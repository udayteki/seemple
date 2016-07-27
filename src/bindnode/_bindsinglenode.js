import lookForBinder from '../lookforbinder';
import runNodeHandler from './_runnodehandler';
import runObjectHandler from './_runobjecthandler';
import triggerOne from '../trigger/_triggerone';
import addListener from '../on/_addlistener';
import debounce from '../_util/debounce';
import set from '../set';

const spaceReg = /\s+/;

// handles binding for single property & node
// the function is used at bindNode
export default function bindSingleNode(object, {
    binder: givenBinder,
    key,
    $nodes,
    node,
    eventOptions,
    propDef
}) {
    const {
        silent,
        assignDefaultValue,
        debounce: debounceOption
    } = eventOptions;
    // create bindings array in property definition object
    const bindings = propDef.bindings = propDef.bindings || []; // eslint-disable-line no-param-reassign
    let { value } = propDef;
    const bindingOptions = {
        self: object,
        key,
        value,
        $nodes,
        node
    };
    let isUndefined = typeof value === 'undefined';
    let binder;
    let objectHandler;
    let nodeHandler;

    // get actual binder
    if (givenBinder !== null) {
        const foundBinder = lookForBinder(node);

        if (foundBinder) {
            if (givenBinder) {
                nofn.assign(foundBinder, givenBinder);
            }

            binder = foundBinder;
        } else {
            binder = givenBinder;
        }
    }

    const { getValue, setValue, on, initialize } = binder;

    // call binder.initialize
    if (initialize) {
        initialize.call(node, bindingOptions);
    }

    // calls getValue immediately and reassign a property
    // when all required conditions are met for this
    if (getValue && (isUndefined && assignDefaultValue !== false || assignDefaultValue === true)) {
        value = getValue.call(node, bindingOptions);
        isUndefined = typeof value === 'undefined';

        set(object, key, value, nofn.assign({ fromNode: true }, eventOptions));
    }

    // add needed event handlers the object when setValue is given
    if (setValue) {
        objectHandler = () => runObjectHandler({
            node,
            propDef,
            binder,
            bindingOptions,
            eventOptions
        });

        // by default debouncing is on
        // it can be turned off by passing debounce=false to event object
        if (debounceOption !== false) {
            const delay = typeof debounceOption === 'number' ? debounceOption : 0;
            objectHandler = debounce(objectHandler, delay);
        }

        addListener(object, `_change:bindings:${key}`, objectHandler);

        if (!isUndefined) {
            objectHandler();
        }
    }

    // add needed event handlers the node when getValue & on are given
    if (getValue && on) {
        nodeHandler = (domEvent) => {
            // nodeHandler.disabled = true is set in unbindNode
            // we cannot "turn off" binder.on when its value is function
            // developer needs to clean memory (turn off callback) manualy in binder.destroy
            if(!nodeHandler.disabled) {
                runNodeHandler({
                    domEvent,
                    object,
                    key,
                    node,
                    propDef,
                    binder,
                    bindingOptions
                });
            }
        }

        // TODO throw error when "on" and maybe other binder properties has wrong type
        if (typeof on === 'function') {
            on.call(node, nodeHandler, bindingOptions);
        } else if (typeof on === 'string'){
            // addEventListener is faster than "on" method from any DOM library
            nofn.forEach(on.split(spaceReg),
                evtName => node.addEventListener(evtName, nodeHandler));
        }
    }

    // add binding data to bindings array
    bindings.push({
        on,
        node,
        binder,
        objectHandler,
        nodeHandler,
        bindingOptions
    });

    // fire events
    if (!silent) {
        const extendedEventOptions = nofn.assign({
            key,
            node
        }, eventOptions);

        triggerOne(object, `bind:${key}`, extendedEventOptions);
        triggerOne(object, 'bind', extendedEventOptions);
    }
}