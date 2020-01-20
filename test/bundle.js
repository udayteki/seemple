/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/construct.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/construct.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../node_modules/common-binders/_classlist.js":
/*!****************************************************!*\
  !*** ../node_modules/common-binders/_classlist.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @IE9
var add;
var remove;
var contains; // eslint-disable-line import/no-mutable-exports

/* istanbul ignore else */

if (window.document.createElement('div').classList) {
  add = function (node, name) {
    return node.classList.add(name);
  };

  remove = function (node, name) {
    return node.classList.remove(name);
  };

  contains = function (node, name) {
    return node.classList.contains(name);
  };
} else {
  add = function (node, name) {
    var re = new RegExp("(^|\\s)" + name + "(\\s|$)", 'g');

    if (!re.test(node.className)) {
      node.className = (node.className + " " + name).replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
    }
  };

  remove = function (node, name) {
    var re = new RegExp("(^|\\s)" + name + "(\\s|$)", 'g');
    node.className = node.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
  };

  contains = function (node, name) {
    return new RegExp("(\\s|^)" + name + "(\\s|$)").test(node.className);
  };
}

var toggle = function (node, name, switcher) {
  if (switcher) {
    add(node, name);
  } else {
    remove(node, name);
  }
};

exports.toggle = toggle;
exports.contains = contains;

/***/ }),

/***/ "../node_modules/common-binders/attr.js":
/*!**********************************************!*\
  !*** ../node_modules/common-binders/attr.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for element attribute
module.exports = attr;

function attr(attributeName, mappingFn) {
  return {
    on: null,
    getValue: function () {
      return this.getAttribute(attributeName);
    },
    setValue: function (value) {
      var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
      this.setAttribute(attributeName, val);
    }
  };
}

/***/ }),

/***/ "../node_modules/common-binders/classname.js":
/*!***************************************************!*\
  !*** ../node_modules/common-binders/classname.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classlist = __webpack_require__(/*! ./_classlist */ "../node_modules/common-binders/_classlist.js");

var toggle = _classlist.toggle;
var contains = _classlist.contains;
// returns a binder for className of an element
// switcher makes possible to turn property value
module.exports = className;

function className(elementClassName) {
  var switcher = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return {
    on: null,
    getValue: function () {
      var value = contains(this, elementClassName);
      return switcher ? value : !value;
    },
    setValue: function (value) {
      toggle(this, elementClassName, switcher ? !!value : !value);
    }
  };
}

/***/ }),

/***/ "../node_modules/common-binders/dataset.js":
/*!*************************************************!*\
  !*** ../node_modules/common-binders/dataset.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// replace namesLikeThis with names-like-this
var replacer = function (u) {
  return "-" + u.toLowerCase();
};

var toDashed = function (name) {
  return "data-" + name.replace(/([A-Z])/g, replacer);
}; //  returns a binder for dataset of an element
// old browsers are also supported @IE9 @IE10


module.exports = dataset;

function dataset(prop, mappingFn) {
  return {
    on: null,
    getValue: function () {
      if (this.dataset) {
        return this.dataset[prop];
      }
      /* istanbul ignore next */


      return this.getAttribute(toDashed(prop));
    },
    setValue: function (value) {
      var val = typeof mappingFn === 'function' ? mappingFn(value) : value;

      if (this.dataset) {
        this.dataset[prop] = val;
      } else {
        /* istanbul ignore next */
        this.setAttribute(toDashed(prop), val);
      }
    }
  };
}

/***/ }),

/***/ "../node_modules/common-binders/display.js":
/*!*************************************************!*\
  !*** ../node_modules/common-binders/display.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//  returns a binder to switch visibility of an element
module.exports = display;

function display() {
  var switcher = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    on: null,
    getValue: function () {
      var value = this.style.display || window.getComputedStyle(this).getPropertyValue('display');
      var none = value === 'none';
      return switcher ? !none : none;
    },
    setValue: function (value) {
      var style = this.style;

      if (typeof switcher === 'function') {
        style.display = switcher(value) ? '' : 'none';
      } else if (switcher) {
        style.display = value ? '' : 'none';
      } else {
        style.display = value ? 'none' : '';
      }
    }
  };
}

/***/ }),

/***/ "../node_modules/common-binders/existence.js":
/*!***************************************************!*\
  !*** ../node_modules/common-binders/existence.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = existence;

function existence() {
  var switcher = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var comment;
  return {
    setValue: function (value) {
      var node = this;
      var tagName = node.tagName,
          id = node.id,
          classList = node.classList,
          className = node.className;

      if (!comment) {
        var commentText = tagName;

        if (id) {
          commentText += "#" + id;
        }

        if (className) {
          commentText += "." + [].slice.apply(classList).join('.');
        }

        comment = window.document.createComment(commentText);
      }

      if (typeof switcher === 'function') {
        value = switcher(value); // eslint-disable-line no-param-reassign
      } else if (!switcher) {
        value = !value; // eslint-disable-line no-param-reassign
      }

      if (value) {
        delete node.__replacedByNode;

        if (comment.parentNode) {
          comment.parentNode.insertBefore(node, comment);
          comment.parentNode.removeChild(comment);
        }
      }

      if (!value) {
        node.__replacedByNode = comment;

        if (node.parentNode) {
          node.parentNode.insertBefore(comment, node);
          node.parentNode.removeChild(node);
        }
      }
    }
  };
}

/***/ }),

/***/ "../node_modules/common-binders/html.js":
/*!**********************************************!*\
  !*** ../node_modules/common-binders/html.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for innerHTML of an element
module.exports = html;

function html(mappingFn) {
  return {
    on: 'input',
    // the event name fires only in contenteditable mode
    getValue: function () {
      return this.innerHTML;
    },
    setValue: function (value) {
      var val = typeof mappingFn === 'function' ? mappingFn(value) : value;

      if (val instanceof window.HTMLElement) {
        this.innerHTML = '';
        this.appendChild(val);
      } else {
        this.innerHTML = "" + val;
      }
    }
  };
}

/***/ }),

/***/ "../node_modules/common-binders/index.js":
/*!***********************************************!*\
  !*** ../node_modules/common-binders/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html = __webpack_require__(/*! ./html */ "../node_modules/common-binders/html.js");

var display = __webpack_require__(/*! ./display */ "../node_modules/common-binders/display.js");

var className = __webpack_require__(/*! ./classname */ "../node_modules/common-binders/classname.js");

var prop = __webpack_require__(/*! ./prop */ "../node_modules/common-binders/prop.js");

var attr = __webpack_require__(/*! ./attr */ "../node_modules/common-binders/attr.js");

var text = __webpack_require__(/*! ./text */ "../node_modules/common-binders/text.js");

var style = __webpack_require__(/*! ./style */ "../node_modules/common-binders/style.js");

var dataset = __webpack_require__(/*! ./dataset */ "../node_modules/common-binders/dataset.js");

var existence = __webpack_require__(/*! ./existence */ "../node_modules/common-binders/existence.js");

exports.html = html;
exports.display = display;
exports.className = className;
exports.prop = prop;
exports.attr = attr;
exports.text = text;
exports.style = style;
exports.dataset = dataset;
exports.existence = existence;

/***/ }),

/***/ "../node_modules/common-binders/prop.js":
/*!**********************************************!*\
  !*** ../node_modules/common-binders/prop.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder to change properties of an element
module.exports = prop;

function prop(propertyName, mappingFn) {
  return {
    on: null,
    getValue: function () {
      return this[propertyName];
    },
    setValue: function (value) {
      var val = typeof mappingFn === 'function' ? mappingFn(value) : value; // in case when you're trying to set read-only property

      try {
        this[propertyName] = val;
      } catch (e) {// cannot set given property (eg tagName)
      }
    }
  };
}

/***/ }),

/***/ "../node_modules/common-binders/style.js":
/*!***********************************************!*\
  !*** ../node_modules/common-binders/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for style properties
module.exports = style;

function style(property, mappingFn) {
  return {
    on: null,
    getValue: function () {
      return this.style[property] || window.getComputedStyle(this).getPropertyValue(property);
    },
    setValue: function (value) {
      var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
      this.style[property] = val;
    }
  };
}

/***/ }),

/***/ "../node_modules/common-binders/text.js":
/*!**********************************************!*\
  !*** ../node_modules/common-binders/text.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for textContent of an element
module.exports = text;

function text(mappingFn) {
  return {
    on: 'input',
    // the event name fires only in contenteditable mode
    getValue: function () {
      return this.textContent;
    },
    setValue: function (value) {
      var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
      this.textContent = "" + val;
    }
  };
}

/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../src sync recursive .*\\.js$":
/*!***************************!*\
  !*** ../src sync .*\.js$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_core/defineprop.js": "../src/_core/defineprop.js",
	"./_core/defs.js": "../src/_core/defs.js",
	"./_core/init.js": "../src/_core/init.js",
	"./_dom/default-dollar.js": "../src/_dom/default-dollar.js",
	"./_dom/index.js": "../src/_dom/index.js",
	"./_dom/mq/_data.js": "../src/_dom/mq/_data.js",
	"./_dom/mq/_html2nodelist.js": "../src/_dom/mq/_html2nodelist.js",
	"./_dom/mq/_init.js": "../src/_dom/mq/_init.js",
	"./_dom/mq/add.js": "../src/_dom/mq/add.js",
	"./_dom/mq/index.js": "../src/_dom/mq/index.js",
	"./_dom/mq/off.js": "../src/_dom/mq/off.js",
	"./_dom/mq/on.js": "../src/_dom/mq/on.js",
	"./_dom/mq/parsehtml.js": "../src/_dom/mq/parsehtml.js",
	"./_helpers/apply.js": "../src/_helpers/apply.js",
	"./_helpers/assign.js": "../src/_helpers/assign.js",
	"./_helpers/checkobjecttype.js": "../src/_helpers/checkobjecttype.js",
	"./_helpers/debounce.js": "../src/_helpers/debounce.js",
	"./_helpers/deepfind.js": "../src/_helpers/deepfind.js",
	"./_helpers/foreach.js": "../src/_helpers/foreach.js",
	"./_helpers/forown.js": "../src/_helpers/forown.js",
	"./_helpers/is.js": "../src/_helpers/is.js",
	"./_helpers/seempleerror.js": "../src/_helpers/seempleerror.js",
	"./_helpers/toarray.js": "../src/_helpers/toarray.js",
	"./array/_afterinit.js": "../src/array/_afterinit.js",
	"./array/_cheaprecreate.js": "../src/array/_cheaprecreate.js",
	"./array/_processrendering/checkalreadyrendered.js": "../src/array/_processrendering/checkalreadyrendered.js",
	"./array/_processrendering/getalreadyrendered.js": "../src/array/_processrendering/getalreadyrendered.js",
	"./array/_processrendering/index.js": "../src/array/_processrendering/index.js",
	"./array/_processrendering/processpush.js": "../src/array/_processrendering/processpush.js",
	"./array/_processrendering/processrecreate.js": "../src/array/_processrendering/processrecreate.js",
	"./array/_processrendering/processremove.js": "../src/array/_processrendering/processremove.js",
	"./array/_processrendering/processrerender.js": "../src/array/_processrendering/processrerender.js",
	"./array/_processrendering/processsort.js": "../src/array/_processrendering/processsort.js",
	"./array/_processrendering/processspliceadd.js": "../src/array/_processrendering/processspliceadd.js",
	"./array/_processrendering/processunshift.js": "../src/array/_processrendering/processunshift.js",
	"./array/_processrendering/renderitemnode.js": "../src/array/_processrendering/renderitemnode.js",
	"./array/_prototype.js": "../src/array/_prototype.js",
	"./array/_pseudonativemethods/concat.js": "../src/array/_pseudonativemethods/concat.js",
	"./array/_pseudonativemethods/createaddingmethod.js": "../src/array/_pseudonativemethods/createaddingmethod.js",
	"./array/_pseudonativemethods/createcopywithin.js": "../src/array/_pseudonativemethods/createcopywithin.js",
	"./array/_pseudonativemethods/createfill.js": "../src/array/_pseudonativemethods/createfill.js",
	"./array/_pseudonativemethods/createpseudonativemethod.js": "../src/array/_pseudonativemethods/createpseudonativemethod.js",
	"./array/_pseudonativemethods/createremovingmethod.js": "../src/array/_pseudonativemethods/createremovingmethod.js",
	"./array/_pseudonativemethods/createsortingmethod.js": "../src/array/_pseudonativemethods/createsortingmethod.js",
	"./array/_pseudonativemethods/createsplice.js": "../src/array/_pseudonativemethods/createsplice.js",
	"./array/_pseudonativemethods/entries.js": "../src/array/_pseudonativemethods/entries.js",
	"./array/_pseudonativemethods/index.js": "../src/array/_pseudonativemethods/index.js",
	"./array/_pseudonativemethods/keys.js": "../src/array/_pseudonativemethods/keys.js",
	"./array/_pseudonativemethods/values.js": "../src/array/_pseudonativemethods/values.js",
	"./array/_reportmodified.js": "../src/array/_reportmodified.js",
	"./array/_staticmembers.js": "../src/array/_staticmembers.js",
	"./array/_toseemplearray.js": "../src/array/_toseemplearray.js",
	"./array/from.js": "../src/array/from.js",
	"./array/index.js": "../src/array/index.js",
	"./array/iterator.js": "../src/array/iterator.js",
	"./array/mediateitem.js": "../src/array/mediateitem.js",
	"./array/of.js": "../src/array/of.js",
	"./array/orderby/_pureorderby.js": "../src/array/orderby/_pureorderby.js",
	"./array/orderby/index.js": "../src/array/orderby/index.js",
	"./array/pull.js": "../src/array/pull.js",
	"./array/recreate/_updateobject.js": "../src/array/recreate/_updateobject.js",
	"./array/recreate/_updatetracked.js": "../src/array/recreate/_updatetracked.js",
	"./array/recreate/index.js": "../src/array/recreate/index.js",
	"./array/rerender.js": "../src/array/rerender.js",
	"./array/restore.js": "../src/array/restore.js",
	"./array/tojson.js": "../src/array/tojson.js",
	"./binders/index.js": "../src/binders/index.js",
	"./binders/input.js": "../src/binders/input.js",
	"./binders/output.js": "../src/binders/output.js",
	"./binders/progress.js": "../src/binders/progress.js",
	"./binders/select.js": "../src/binders/select.js",
	"./binders/textarea.js": "../src/binders/textarea.js",
	"./bindnode/_bindsinglenode.js": "../src/bindnode/_bindsinglenode.js",
	"./bindnode/_createbindingswitcher.js": "../src/bindnode/_createbindingswitcher.js",
	"./bindnode/_createnodehandler.js": "../src/bindnode/_createnodehandler.js",
	"./bindnode/_createobjecthandler.js": "../src/bindnode/_createobjecthandler.js",
	"./bindnode/_getnodes.js": "../src/bindnode/_getnodes.js",
	"./bindnode/_selectnodes.js": "../src/bindnode/_selectnodes.js",
	"./bindnode/index.js": "../src/bindnode/index.js",
	"./bindoptionalnode.js": "../src/bindoptionalnode.js",
	"./bindsandbox.js": "../src/bindsandbox.js",
	"./calc/_addsource.js": "../src/calc/_addsource.js",
	"./calc/_createcalchandler.js": "../src/calc/_createcalchandler.js",
	"./calc/index.js": "../src/calc/index.js",
	"./chain.js": "../src/chain.js",
	"./class.js": "../src/class.js",
	"./defaultbinders.js": "../src/defaultbinders.js",
	"./index.js": "../src/index.js",
	"./instantiate.js": "../src/instantiate.js",
	"./lookforbinder.js": "../src/lookforbinder.js",
	"./mediate.js": "../src/mediate.js",
	"./object/_afterinit.js": "../src/object/_afterinit.js",
	"./object/_prototype.js": "../src/object/_prototype.js",
	"./object/adddatakeys.js": "../src/object/adddatakeys.js",
	"./object/each.js": "../src/object/each.js",
	"./object/entries.js": "../src/object/entries.js",
	"./object/index.js": "../src/object/index.js",
	"./object/isdatakey.js": "../src/object/isdatakey.js",
	"./object/iterator.js": "../src/object/iterator.js",
	"./object/keyof.js": "../src/object/keyof.js",
	"./object/keys.js": "../src/object/keys.js",
	"./object/removedatakeys.js": "../src/object/removedatakeys.js",
	"./object/setdata.js": "../src/object/setdata.js",
	"./object/tojson.js": "../src/object/tojson.js",
	"./object/values.js": "../src/object/values.js",
	"./off/_removedomlistener.js": "../src/off/_removedomlistener.js",
	"./off/_removelistener.js": "../src/off/_removelistener.js",
	"./off/_removetreelistener.js": "../src/off/_removetreelistener.js",
	"./off/_undelegatelistener.js": "../src/off/_undelegatelistener.js",
	"./off/index.js": "../src/off/index.js",
	"./on/_adddomlistener.js": "../src/on/_adddomlistener.js",
	"./on/_addlistener.js": "../src/on/_addlistener.js",
	"./on/_addtreelistener.js": "../src/on/_addtreelistener.js",
	"./on/_createdomeventhandler.js": "../src/on/_createdomeventhandler.js",
	"./on/_delegatelistener/arrayaddhandler.js": "../src/on/_delegatelistener/arrayaddhandler.js",
	"./on/_delegatelistener/arrayremovehandler.js": "../src/on/_delegatelistener/arrayremovehandler.js",
	"./on/_delegatelistener/changehandler.js": "../src/on/_delegatelistener/changehandler.js",
	"./on/_delegatelistener/index.js": "../src/on/_delegatelistener/index.js",
	"./on/_delegatelistener/objectremovehandler.js": "../src/on/_delegatelistener/objectremovehandler.js",
	"./on/_delegatelistener/objectsethandler.js": "../src/on/_delegatelistener/objectsethandler.js",
	"./on/_domeventregexp.js": "../src/on/_domeventregexp.js",
	"./on/_splitbyspaceregexp.js": "../src/on/_splitbyspaceregexp.js",
	"./on/index.js": "../src/on/index.js",
	"./once.js": "../src/once.js",
	"./ondebounce.js": "../src/ondebounce.js",
	"./parsebindings/_parserdata.js": "../src/parsebindings/_parserdata.js",
	"./parsebindings/_processattribute/_definehiddencontentproperty.js": "../src/parsebindings/_processattribute/_definehiddencontentproperty.js",
	"./parsebindings/_processattribute/_getbindingkey.js": "../src/parsebindings/_processattribute/_getbindingkey.js",
	"./parsebindings/_processattribute/index.js": "../src/parsebindings/_processattribute/index.js",
	"./parsebindings/_processtextnode.js": "../src/parsebindings/_processtextnode.js",
	"./parsebindings/index.js": "../src/parsebindings/index.js",
	"./parserbrackets.js": "../src/parserbrackets.js",
	"./remove.js": "../src/remove.js",
	"./seemple/_afterinit.js": "../src/seemple/_afterinit.js",
	"./seemple/_prototype.js": "../src/seemple/_prototype.js",
	"./seemple/_staticmembers.js": "../src/seemple/_staticmembers.js",
	"./seemple/_universalmethods.js": "../src/seemple/_universalmethods.js",
	"./seemple/index.js": "../src/seemple/index.js",
	"./select.js": "../src/select.js",
	"./selectall.js": "../src/selectall.js",
	"./set.js": "../src/set.js",
	"./toseemple.js": "../src/toseemple.js",
	"./trigger/_triggerdomevent.js": "../src/trigger/_triggerdomevent.js",
	"./trigger/_triggerone.js": "../src/trigger/_triggerone.js",
	"./trigger/_triggeronedomevent.js": "../src/trigger/_triggeronedomevent.js",
	"./trigger/index.js": "../src/trigger/index.js",
	"./unbindnode/_removebinding.js": "../src/unbindnode/_removebinding.js",
	"./unbindnode/index.js": "../src/unbindnode/index.js",
	"./usedomlibrary.js": "../src/usedomlibrary.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../src sync recursive .*\\.js$";

/***/ }),

/***/ "../src/_core/defineprop.js":
/*!**********************************!*\
  !*** ../src/_core/defineprop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineProp; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "../src/_core/defs.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../set */ "../src/set.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");




function errorAccessor() {
  throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__["default"])('common:use_magic_props');
} // the function defines needed descriptor for given property


function defineProp(object, key, noAccessor) {
  var def = _defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object); // if no object definition do nothing

  if (!def) {
    return null;
  }

  if (!def.props[key]) {
    var propDef = def.props[key] = {
      value: object[key],
      mediator: null,
      bindings: null
    };
    var getter;
    var setter; // make possible to throw an error on get and on set if sandbox (for all objects)
    // or container (for Seemple.Array instances) are used

    if (key === 'sandbox' || object.isSeempleArray && key === 'container') {
      getter = setter = errorAccessor;
    }

    if (!noAccessor) {
      Object.defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        get: function get() {
          return getter ? getter() : propDef.value;
        },
        set: function set(v) {
          return setter ? setter() : Object(_set__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, v, {
            fromSetter: true
          });
        }
      });
    }
  }

  return def.props[key];
}

/***/ }),

/***/ "../src/_core/defs.js":
/*!****************************!*\
  !*** ../src/_core/defs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");


function PseudoMap() {} // PseudoMap simulates WeakMap behavior with O(1) search complexity
// it's needed to support @IE9 and @IE10


Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_0__["default"])(PseudoMap.prototype, {
  get: function get(obj) {
    return obj.seempleData;
  },
  set: function set(obj, data) {
    Object.defineProperty(obj, 'seempleData', {
      value: data,
      enumerable: false,
      writable: false,
      configurable: false
    });
  },
  has: function has(obj) {
    return 'seempleData' in obj;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (typeof WeakMap === 'undefined' ? new PseudoMap() : new WeakMap());

/***/ }),

/***/ "../src/_core/init.js":
/*!****************************!*\
  !*** ../src/_core/init.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initSeemple; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "../src/_core/defs.js");

var objectId = 0; // this is common function which associates an object with its Seemple definition

function initSeemple(object) {
  var def = _defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object);

  if (!def) {
    def = {
      // a property name of "events" object is an event name
      // and a value is an array of event handlers
      events: {
        /* example: {
            callback: function,
            ctx: object,
            context: object2,
            name: "example",
            info: { ...extra data for an event... }
        } */
      },
      // "props" contains special information about properties (getters, setters etc)
      props: {
        /* example: {
            value: object[key],
            mediator: null,
            bindings: [{
                node,
                binder,
                nodeHandler,
                objectHandler,
                ...other required info
            }]
        } */
      },
      id: objectId
    };
    objectId += 1;
    _defs__WEBPACK_IMPORTED_MODULE_0__["default"].set(object, def);

    if (object._afterInit) {
      object._afterInit(def);
    }
  }

  return def;
}

/***/ }),

/***/ "../src/_dom/default-dollar.js":
/*!*************************************!*\
  !*** ../src/_dom/default-dollar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mq */ "../src/_dom/mq/index.js");
/* global $ */
 // check existence of needed methods in $ global variable
// to use it for internal needs

var neededMethods = ['on', 'off', 'add'];
var globalDollar = typeof $ === 'function' ? $ : null;
var useGlobalDollar = true;
/* istanbul ignore if */

if (globalDollar) {
  var fn = globalDollar.fn || globalDollar.prototype;

  for (var i = 0; i < neededMethods.length; i++) {
    if (!fn[neededMethods[i]]) {
      useGlobalDollar = false;
      break;
    }
  }

  if (!globalDollar.parseHTML) {
    // Zepto doesn't include its own parseHTML
    // TODO: Assignment of parseHTML is side effect
    globalDollar.parseHTML = _mq__WEBPACK_IMPORTED_MODULE_0__["default"].parseHTML;
  }
} else {
  useGlobalDollar = false;
}

/* harmony default export */ __webpack_exports__["default"] = (useGlobalDollar ? globalDollar : _mq__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../src/_dom/index.js":
/*!****************************!*\
  !*** ../src/_dom/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_dollar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-dollar */ "../src/_dom/default-dollar.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  $: _default_dollar__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "../src/_dom/mq/_data.js":
/*!*******************************!*\
  !*** ../src/_dom/mq/_data.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// an object allows to share data between modules; it's needed because we use
// simplified ES modules there and cannot import and share a number
/* harmony default export */ __webpack_exports__["default"] = ({
  nodeIndex: 0,
  allEvents: {}
});

/***/ }),

/***/ "../src/_dom/mq/_html2nodelist.js":
/*!****************************************!*\
  !*** ../src/_dom/mq/_html2nodelist.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return html2nodeList; });
// converts HTML string to NodeList instance
function html2nodeList(givenHTML) {
  // wrapMap is taken from jQuery
  var wrapMap = {
    option: [1, '<select multiple="multiple">', '</select>'],
    legend: [1, '<fieldset>', '</fieldset>'],
    thead: [1, '<table>', '</table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    area: [1, '<map>', '</map>'],
    _: [0, '', '']
  };
  var html = givenHTML.replace(/^\s+|\s+$/g, '');
  var node = window.document.createElement('div');
  var i;
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  var ex = /<([\w:]+)/.exec(html);
  var wrapper = ex && wrapMap[ex[1]] || wrapMap._;
  node.innerHTML = wrapper[1] + html + wrapper[2];
  i = wrapper[0];

  while (i) {
    i -= 1;
    node = node.children[0];
  }

  return node.childNodes;
}

/***/ }),

/***/ "../src/_dom/mq/_init.js":
/*!*******************************!*\
  !*** ../src/_dom/mq/_init.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html2nodelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_html2nodelist */ "../src/_dom/mq/_html2nodelist.js");


var win = window; // function-constructor of mq library
// accepts many kinds of arguments (selector, html, function)

function MQInit(selector, context) {
  var result;

  if (selector) {
    if (selector.nodeType || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(win) === 'object' && selector === win) {
      result = [selector];
    } else if (typeof selector === 'string') {
      if (/</.test(selector)) {
        result = Object(_html2nodelist__WEBPACK_IMPORTED_MODULE_1__["default"])(selector);
      } else if (context) {
        var newContext = new MQInit(context)[0];

        if (newContext) {
          result = newContext.querySelectorAll(selector);
        }
      } else {
        result = win.document.querySelectorAll(selector);
      }
    } else if ('length' in selector) {
      // if it's something array-like (eg NodeList)
      result = selector;
    } else {
      // this is somethong another (eg Attr)
      result = [selector];
    }
  }

  var length = result && result.length;

  if (length) {
    for (var i = 0; i < length; i++) {
      this.push(result[i]);
    }
  }

  return this;
}

MQInit.prototype = [];
/* harmony default export */ __webpack_exports__["default"] = (MQInit);

/***/ }),

/***/ "../src/_dom/mq/add.js":
/*!*****************************!*\
  !*** ../src/_dom/mq/add.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return add; });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_init */ "../src/_dom/mq/_init.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data */ "../src/_dom/mq/_data.js");

 // adds unique nodes to mq collection

function add(selector) {
  var idMap = {};
  var result;
  var nodes = new _init__WEBPACK_IMPORTED_MODULE_0__["default"](selector);

  if (this.length) {
    result = new _init__WEBPACK_IMPORTED_MODULE_0__["default"]();

    for (var i = 0; i < this.length; i++) {
      var node = this[i];
      var nodeID = node.b$ = node.b$ || ++_data__WEBPACK_IMPORTED_MODULE_1__["default"].nodeIndex; // eslint-disable-line no-plusplus

      idMap[nodeID] = 1;
      result.push(node);
    }

    for (var _i = 0; _i < nodes.length; _i++) {
      var _node = nodes[_i];

      var _nodeID = _node.b$ = _node.b$ || ++_data__WEBPACK_IMPORTED_MODULE_1__["default"].nodeIndex; // eslint-disable-line no-plusplus


      if (!idMap[_nodeID]) {
        idMap[_nodeID] = 1;
        result.push(_node);
      }
    }
  } else {
    result = nodes;
  }

  return result;
}

/***/ }),

/***/ "../src/_dom/mq/index.js":
/*!*******************************!*\
  !*** ../src/_dom/mq/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mq; });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_init */ "../src/_dom/mq/_init.js");
/* harmony import */ var _parsehtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsehtml */ "../src/_dom/mq/parsehtml.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on */ "../src/_dom/mq/on.js");
/* harmony import */ var _off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./off */ "../src/_dom/mq/off.js");
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add */ "../src/_dom/mq/add.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/assign */ "../src/_helpers/assign.js");





 // tiny jQuery replacement for Seemple

function mq(selector, context) {
  return new _init__WEBPACK_IMPORTED_MODULE_0__["default"](selector, context);
}
mq.parseHTML = _parsehtml__WEBPACK_IMPORTED_MODULE_1__["default"];
Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_5__["default"])(_init__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, {
  on: _on__WEBPACK_IMPORTED_MODULE_2__["default"],
  off: _off__WEBPACK_IMPORTED_MODULE_3__["default"],
  add: _add__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "../src/_dom/mq/off.js":
/*!*****************************!*\
  !*** ../src/_dom/mq/off.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return off; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data */ "../src/_dom/mq/_data.js");


var splitBySpaceReg = /\s+/;
var splitByDotReg = /\.(.+)/; // removes event handler from a set of elements

function off(namesStr, selector, handler) {
  if (typeof selector === 'function') {
    handler = selector; // eslint-disable-line no-param-reassign

    selector = null; // eslint-disable-line no-param-reassign
  }

  var names = namesStr.split(splitBySpaceReg);

  for (var i = 0; i < names.length; i++) {
    var _names$i$split = names[i].split(splitByDotReg),
        _names$i$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_names$i$split, 2),
        name = _names$i$split2[0],
        namespace = _names$i$split2[1];

    for (var j = 0; j < this.length; j++) {
      var node = this[j];

      if (!name && namespace) {
        for (var k = 0, keys = Object.keys(_data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents); k < keys.length; k++) {
          var _events = _data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents[keys[k]];

          for (var l = 0; l < _events.length; l++) {
            var event = _events[i];

            if (event.namespace === namespace && event.nodeID === node.b$) {
              node.removeEventListener(event.name, event.delegate || event.handler);

              _events.splice(l, 1);

              l -= 1;
            }
          }
        }

        continue;
      }

      var events = _data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents[name + node.b$];

      if (events) {
        for (var _k = 0; _k < events.length; _k++) {
          var _event = events[_k];

          if ((!handler || handler === _event.handler || handler === _event.delegate) && (!namespace || namespace === _event.namespace) && (!selector || selector === _event.selector)) {
            node.removeEventListener(name, _event.delegate || _event.handler);
            events.splice(_k, 1);
            _k -= 1;
          }
        }
      } else if (!namespace && !selector) {
        node.removeEventListener(name, handler);
      }
    }
  }

  return this;
}

/***/ }),

/***/ "../src/_dom/mq/on.js":
/*!****************************!*\
  !*** ../src/_dom/mq/on.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return on; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data */ "../src/_dom/mq/_data.js");


var splitBySpaceReg = /\s+/;
var splitByDotReg = /\.(.+)/;
var randomID = "".concat(Math.random().toString().replace('0.', 'x'), "y"); // x12345y
// checks an element against a selector

function is(node, selector) {
  return (node.matches || node.webkitMatchesSelector || node.mozMatchesSelector || node.msMatchesSelector || node.oMatchesSelector).call(node, selector);
} // the function is used when a selector is given


function delegateHandler(evt, selector, handler) {
  var scopeSelector = "[".concat(randomID, "=\"").concat(randomID, "\"] ");
  var splittedSelector = selector.split(',');
  var matching = '';

  for (var i = 0; i < splittedSelector.length; i++) {
    var sel = splittedSelector[i];
    matching += "".concat(i === 0 ? '' : ',').concat(scopeSelector).concat(sel, ",").concat(scopeSelector).concat(sel, " *");
  }

  this.setAttribute(randomID, randomID);

  if (is(evt.target, matching)) {
    handler.call(this, evt);
  }

  this.removeAttribute(randomID);
} // adds event listener to a set of elemnts


function on(namesStr, selector, handler) {
  var names = namesStr.split(splitBySpaceReg);
  var delegate;

  if (typeof selector === 'function') {
    handler = selector; // eslint-disable-line no-param-reassign

    selector = null; // eslint-disable-line no-param-reassign
  }

  if (selector) {
    delegate = function uniqueDelegateHandler(evt) {
      delegateHandler.call(this, evt, selector, handler);
    };
  }

  for (var i = 0; i < names.length; i++) {
    var _names$i$split = names[i].split(splitByDotReg),
        _names$i$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_names$i$split, 2),
        name = _names$i$split2[0],
        namespace = _names$i$split2[1];

    for (var j = 0; j < this.length; j++) {
      var node = this[j];
      var nodeID = node.b$ = node.b$ || ++_data__WEBPACK_IMPORTED_MODULE_1__["default"].nodeIndex; // eslint-disable-line no-plusplus

      var events = _data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents[name + nodeID] = _data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents[name + nodeID] || [];
      var exist = false;

      for (var k = 0; k < events.length; k++) {
        var event = events[k];

        if (handler === event.handler && (!selector || selector === event.selector)) {
          exist = true;
          break;
        }
      }

      if (!exist) {
        events.push({
          delegate: delegate,
          handler: handler,
          namespace: namespace,
          selector: selector,
          nodeID: nodeID,
          name: name
        });
        node.addEventListener(name, delegate || handler, false);
      }
    }
  }

  return this;
}

/***/ }),

/***/ "../src/_dom/mq/parsehtml.js":
/*!***********************************!*\
  !*** ../src/_dom/mq/parsehtml.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseHTML; });
/* harmony import */ var _html2nodelist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_html2nodelist */ "../src/_dom/mq/_html2nodelist.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_init */ "../src/_dom/mq/_init.js");

 // parses given HTML and returns mq instance

function parseHTML(html) {
  return new _init__WEBPACK_IMPORTED_MODULE_1__["default"](Object(_html2nodelist__WEBPACK_IMPORTED_MODULE_0__["default"])(html));
}

/***/ }),

/***/ "../src/_helpers/apply.js":
/*!********************************!*\
  !*** ../src/_helpers/apply.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apply; });
function apply(func, context, args) {
  if (context) {
    switch (args.length) {
      case 0:
        return func.call(context);

      case 1:
        return func.call(context, args[0]);

      case 2:
        return func.call(context, args[0], args[1]);

      case 3:
        return func.call(context, args[0], args[1], args[2]);

      case 4:
        return func.call(context, args[0], args[1], args[2], args[3]);

      default:
        return func.apply(context, args);
      // eslint-disable-line prefer-spread
    }
  }

  switch (args.length) {
    case 0:
      return func();

    case 1:
      return func(args[0]);

    case 2:
      return func(args[0], args[1]);

    case 3:
      return func(args[0], args[1], args[2]);

    case 4:
      return func(args[0], args[1], args[2], args[3]);

    default:
      return func.apply(undefined, args);
    // eslint-disable-line prefer-spread
  }
}

/***/ }),

/***/ "../src/_helpers/assign.js":
/*!*********************************!*\
  !*** ../src/_helpers/assign.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forown */ "../src/_helpers/forown.js");
 // Object.assign polyfyll

/* istanbul ignore next */

var assign = Object.assign || function assign(target) {
  /* istanbul ignore next */
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var source = arguments[index];

    if (source !== undefined && source !== null) {
      Object(_forown__WEBPACK_IMPORTED_MODULE_0__["default"])(source, function (nextValue, nextKey) {
        output[nextKey] = nextValue;
      });
    }
  }

  return output;
};

/* harmony default export */ __webpack_exports__["default"] = (assign);

/***/ }),

/***/ "../src/_helpers/checkobjecttype.js":
/*!******************************************!*\
  !*** ../src/_helpers/checkobjecttype.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkObjectType; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _seempleerror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seempleerror */ "../src/_helpers/seempleerror.js");

 // checks type of a variable and throws an error if its type is not an object

function checkObjectType(object, method) {
  var typeofObject = object === null ? 'null' : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(object);

  if (typeofObject !== 'object' && typeofObject !== 'function') {
    throw Object(_seempleerror__WEBPACK_IMPORTED_MODULE_1__["default"])('common:object_type', {
      object: object,
      method: method
    });
  }
}

/***/ }),

/***/ "../src/_helpers/debounce.js":
/*!***********************************!*\
  !*** ../src/_helpers/debounce.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply */ "../src/_helpers/apply.js");
 // Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds.
// (c) https://davidwalsh.name/javascript-debounce-function

function debounce(func, givenDelay, thisArg) {
  var timeout;
  var delay;

  if (typeof givenDelay !== 'number') {
    thisArg = givenDelay; // eslint-disable-line no-param-reassign

    delay = 0;
  } else {
    delay = givenDelay || 0;
  }

  return function debounced() {
    var args = arguments;
    var callContext = thisArg || this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return Object(_apply__WEBPACK_IMPORTED_MODULE_0__["default"])(func, callContext, args);
    }, delay);
  };
}

/***/ }),

/***/ "../src/_helpers/deepfind.js":
/*!***********************************!*\
  !*** ../src/_helpers/deepfind.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepFind; });
// gets value of a property in nested object
// eg "d" from a.b.c.d
function deepFind(obj, givenPath) {
  var paths = typeof givenPath === 'string' ? givenPath.split('.') : givenPath;
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (typeof current[paths[i]] === 'undefined') {
      return undefined;
    }

    current = current[paths[i]];
  }

  return current;
}

/***/ }),

/***/ "../src/_helpers/foreach.js":
/*!**********************************!*\
  !*** ../src/_helpers/foreach.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forEach; });
function forEach(arr, callback) {
  var i = 0;
  var l = arr.length;

  for (; i < l; i++) {
    callback(arr[i], i);
  }
}

/***/ }),

/***/ "../src/_helpers/forown.js":
/*!*********************************!*\
  !*** ../src/_helpers/forown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forOwn; });
function forOwn(obj, callback) {
  var keys = Object.keys(obj);
  var l = keys.length;
  var i = 0;
  var key;

  while (i < l) {
    key = keys[i++];
    callback(obj[key], key);
  }
}

/***/ }),

/***/ "../src/_helpers/is.js":
/*!*****************************!*\
  !*** ../src/_helpers/is.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// determines whether two values are the same value

/* istanbul ignore next */
// eslint-disable-next-line
var isPolyfill = function isPolyfill(v1, v2) {
  return v1 === 0 && v2 === 0 ? 1 / v1 === 1 / v2 : v1 !== v1 && v2 !== v2 || v1 === v2;
};

/* harmony default export */ __webpack_exports__["default"] = (Object.is || isPolyfill);

/***/ }),

/***/ "../src/_helpers/seempleerror.js":
/*!***************************************!*\
  !*** ../src/_helpers/seempleerror.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return seempleError; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable prefer-template, max-len */
var bindingErrorPrefix = 'Binding error:';
var calcErrorPrefix = 'Calc error:';
var eventsErrorPrefix = 'Events error:';
var arrayErrorPrefix = 'Seemple.Array error:';

var getType = function getType(variable) {
  if (variable === null) {
    return 'null';
  }

  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(variable);
};

var getTypeError = function getTypeError(variable, variableName, expectedType) {
  return "".concat(variableName, " must have type \"").concat(expectedType, "\" but got \"").concat(getType(variable), "\" instead.");
};

var errors = {
  'common:object_type': function commonObject_type(_ref) {
    var object = _ref.object,
        method = _ref.method;
    return "Error in ".concat(method, ": ") + getTypeError(object, 'object', 'object');
  },
  'common:call_class': function commonCall_class() {
    return 'Cannot call a class as a function';
  },
  'common:use_magic_props': function commonUse_magic_props() {
    return '"sandbox" key (for all objects) and "container" key (for Seemple.Array instances)' + ' are reserved for service use and cannot be used as usual properties';
  },
  'binding:node_missing': function bindingNode_missing(_ref2) {
    var key = _ref2.key,
        node = _ref2.node;
    var selectorInfo = typeof node === 'string' ? " (given selector is \"".concat(node, "\")") : '';
    return "".concat(bindingErrorPrefix, " node is missing for key \"").concat(key, "\"").concat(selectorInfo, ".");
  },
  'binding:falsy_key': function bindingFalsy_key() {
    return "".concat(bindingErrorPrefix, " \"key\" arg cannot be falsy");
  },
  'binding:instance_nodes_missing': function bindingInstance_nodes_missing(_ref3) {
    var $nodes = _ref3.$nodes;
    var missing = !$nodes ? '$nodes' : 'nodes';
    return "".concat(bindingErrorPrefix, " \"").concat(missing, "\" property of Seemple instance is missing.") + ' It must be an object and must not be reassigned.';
  },
  'binding:magic_props_nodes_length': function bindingMagic_props_nodes_length() {
    return "".concat(bindingErrorPrefix, " \"sandbox\" key (for all objects) and \"container\" key") + ' (for Seemple.Array instances) cannot have more than one bound node';
  },
  'calc:target_type': function calcTarget_type(_ref4) {
    var target = _ref4.target;
    return "".concat(calcErrorPrefix, " ").concat(getTypeError(target, 'target key', 'string'));
  },
  'calc:source_key_type': function calcSource_key_type(_ref5) {
    var sourceKey = _ref5.sourceKey;
    return "".concat(calcErrorPrefix, " ").concat(getTypeError(sourceKey, 'source key', 'string'));
  },
  'calc:source_object_type': function calcSource_object_type(_ref6) {
    var sourceObject = _ref6.sourceObject;
    return "".concat(calcErrorPrefix, " ").concat(getTypeError(sourceObject, 'source object', 'object'));
  },
  'calc:source_type': function calcSource_type(_ref7) {
    var source = _ref7.source;
    return "".concat(calcErrorPrefix, " ").concat(getTypeError(source, 'source', 'object'));
  },
  'array:model_type': function arrayModel_type(_ref8) {
    var Model = _ref8.Model;
    return "".concat(arrayErrorPrefix, " ").concat(getTypeError(Model, 'Model', 'function'));
  },
  'array:add_render_twice': function arrayAdd_render_twice() {
    return "".concat(arrayErrorPrefix, " one rendered object was inserted twice.");
  },
  'array:rendered_number_nodes': function arrayRendered_number_nodes(_ref9) {
    var length = _ref9.length;
    return "".concat(arrayErrorPrefix, " renderer returned ").concat(length, " nodes instead of one.") + " ".concat(length > 0 ? 'To fix this wrap these nodes by single node.' : '');
  },
  'array:renderer_node_missing': function arrayRenderer_node_missing(_ref10) {
    var selector = _ref10.selector;
    return "".concat(arrayErrorPrefix, " renderer node is missing (given selector is \"").concat(selector, "\")");
  },
  'array:nonexistent_method': function arrayNonexistent_method(_ref11) {
    var method = _ref11.method;
    return "".concat(arrayErrorPrefix, " Array.prototype.").concat(method, " doesn't exist.") + ' You need to include a polyfill for it (e. g. babel-node)';
  },
  'array:method_compat_renderer': function arrayMethod_compat_renderer(_ref12) {
    var method = _ref12.method;
    return "".concat(arrayErrorPrefix, " Not possible to render when ").concat(method, " method is called");
  },
  'pull:to_remove_type': function pullTo_remove_type(_ref13) {
    var toRemove = _ref13.toRemove;
    return "Error in pull: ".concat(getTypeError(toRemove, 'toRemove', 'number'));
  },
  'restore:no_nodes': function restoreNo_nodes() {
    return "".concat(arrayErrorPrefix, " cannot find any container to restore an instance using \"restore\" method");
  },
  'trigger:names_type': function triggerNames_type(_ref14) {
    var names = _ref14.names;
    return "".concat(eventsErrorPrefix, " ").concat(getTypeError(names, 'event name', 'string'));
  },
  'on:names_type': function onNames_type(_ref15) {
    var names = _ref15.names;
    return errors['trigger:names_type']({
      names: names
    });
  },
  'removedatakeys:key_type': function removedatakeysKey_type(_ref16) {
    var key = _ref16.key;
    return "Error in removeDataKeys: ".concat(getTypeError(key, 'key', 'string'));
  },
  'adddatakeys:key_type': function adddatakeysKey_type(_ref17) {
    var key = _ref17.key;
    return "Error in addDataKeys: ".concat(getTypeError(key, 'key', 'string'));
  },
  'remove:key_type': function removeKey_type(_ref18) {
    var key = _ref18.key;
    return "Error in remove: ".concat(getTypeError(key, 'key', 'string'));
  },
  'mediate:key_type': function mediateKey_type(_ref19) {
    var key = _ref19.key;
    return "Error in mediate: ".concat(getTypeError(key, 'key', 'string'));
  }
};
function seempleError(key, data) {
  var getError = errors[key];

  if (!getError) {
    throw Error("Unknown error \"".concat(key, "\". Please report about this on Github."));
  }

  return new Error(getError(data));
}

/***/ }),

/***/ "../src/_helpers/toarray.js":
/*!**********************************!*\
  !*** ../src/_helpers/toarray.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
// cheap conversion of an array-like object to Array instance
function toArray(object) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var length = object.length;
  var array = Array(length);

  for (var i = start; i < length; i++) {
    array[i - start] = object[i];
  }

  return array;
}

/***/ }),

/***/ "../src/array/_afterinit.js":
/*!**********************************!*\
  !*** ../src/array/_afterinit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return afterSeempleArrayInit; });
/* harmony import */ var _seemple_afterinit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../seemple/_afterinit */ "../src/seemple/_afterinit.js");
/* harmony import */ var _on_addlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");


 // the function returns array item converted to Model instance

function modelItemMediator(item, index) {
  var Model = this.Model; // if an item is already instance of Model

  if (item instanceof Model) {
    return item;
  }

  var itemData;

  if (item && typeof item.toJSON === 'function') {
    // if item is not falsy and if it has toJSON method
    // then retrieve instance data by this method
    itemData = item.toJSON(false);
  } else {
    // if not then use an item as its data
    itemData = item;
  }

  return new Model(itemData, this, index);
} // event handler to listen changes of Model property


function changeModel() {
  var Model = this.Model; // if model has wrong type then throw an error

  if (typeof Model !== 'function') {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__["default"])('array:model_type', {
      Model: Model
    });
  } // attatch item mediator


  this.mediateItem(modelItemMediator);
} // event handler to listen changes of itemRenderer property


function changeItemRendererHandler() {
  var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _eventOptions$forceRe = eventOptions.forceRerender,
      forceRerender = _eventOptions$forceRe === void 0 ? true : _eventOptions$forceRe;
  this.rerender({
    forceRerender: forceRerender
  });
} // Seemple.Array initializer


function afterSeempleArrayInit() {
  // we need to calculate hasModel before change:Model is added
  var hasModel = 'Model' in this; // call Seemple initializer

  _seemple_afterinit__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_change:common:Model', changeModel, this, {
    skipChecks: true
  });
  Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_change:common:itemRenderer', changeItemRendererHandler, this, {
    skipChecks: true
  }); // call changeModel handler immediately if model is present
  // it will throw an error if Model is not a function

  if (hasModel) {
    changeModel.call(this);
  }
}

/***/ }),

/***/ "../src/array/_cheaprecreate.js":
/*!**************************************!*\
  !*** ../src/array/_cheaprecreate.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cheapRecreate; });
// makes cheap array recreation (with no trackBy, with no events, with no item mediator etc)
function cheapRecreate(self) {
  var newItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newLength = newItems.length;
  var oldLength = self.length;
  var lengthDiff = newLength - oldLength;

  for (var i = 0; i < newLength; i++) {
    self[i] = newItems[i];
  }

  for (var _i = 0; _i < lengthDiff; _i++) {
    delete self[_i + newLength];
  }

  self.length = newLength;
  return self;
}

/***/ }),

/***/ "../src/array/_processrendering/checkalreadyrendered.js":
/*!**************************************************************!*\
  !*** ../src/array/_processrendering/checkalreadyrendered.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkAlreadyRendered; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");

 // checks is item already rendered in an array
// selfDef is given instead of itself (array) for perf optimisation

function checkAlreadyRendered(_ref) {
  var item = _ref.item,
      selfDef = _ref.selfDef;
  var itemDef = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(item);
  var selfId = selfDef.id; // if item object is defined in object defs

  if (itemDef) {
    var renderedInArrays = itemDef.renderedInArrays; // if item's node is already rendered for an array
    // then throw an error

    if (renderedInArrays && renderedInArrays[selfId]) {
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_1__["default"])('array:add_render_twice');
    }
  }
}

/***/ }),

/***/ "../src/array/_processrendering/getalreadyrendered.js":
/*!************************************************************!*\
  !*** ../src/array/_processrendering/getalreadyrendered.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAlreadyRendered; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_core/defs */ "../src/_core/defs.js");
 // returns already rendered node of an object in given array
// selfDef is given instead of  itself (array) for perf optimisation

function getAlreadyRendered(_ref) {
  var item = _ref.item,
      selfDef = _ref.selfDef;
  var itemDef = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(item);
  var selfId = selfDef.id; // if item object is defined in object defs

  if (itemDef) {
    var renderedInArrays = itemDef.renderedInArrays; // if item's node is already rendered for an array then return it

    if (renderedInArrays && renderedInArrays[selfId]) {
      var node = renderedInArrays[selfId];
      return node.__replacedByNode || node;
    }
  }

  return undefined;
}

/***/ }),

/***/ "../src/array/_processrendering/index.js":
/*!***********************************************!*\
  !*** ../src/array/_processrendering/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processRendering; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _processpush__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processpush */ "../src/array/_processrendering/processpush.js");
/* harmony import */ var _processunshift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processunshift */ "../src/array/_processrendering/processunshift.js");
/* harmony import */ var _processrecreate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processrecreate */ "../src/array/_processrendering/processrecreate.js");
/* harmony import */ var _processsort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processsort */ "../src/array/_processrendering/processsort.js");
/* harmony import */ var _processremove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processremove */ "../src/array/_processrendering/processremove.js");
/* harmony import */ var _processrerender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./processrerender */ "../src/array/_processrendering/processrerender.js");
/* harmony import */ var _processspliceadd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./processspliceadd */ "../src/array/_processrendering/processspliceadd.js");








 // makes possible to render array items based on a name of called method

function processRendering(_ref) {
  var self = _ref.self,
      eventOptions = _ref.eventOptions;
  var method = eventOptions.method,
      added = eventOptions.added,
      removed = eventOptions.removed; // nodes object always exist at Seemple instances

  var container = self.nodes.container || self.nodes.sandbox;
  var selfDef = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(self);

  if (!container) {
    return;
  }

  switch (method) {
    case 'fill':
    case 'copyWithin':
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_1__["default"])('array:method_compat_renderer', {
        method: method
      });

    case 'push':
      Object(_processpush__WEBPACK_IMPORTED_MODULE_2__["default"])({
        self: self,
        selfDef: selfDef,
        eventOptions: eventOptions,
        container: container
      });
      break;

    case 'unshift':
      Object(_processunshift__WEBPACK_IMPORTED_MODULE_3__["default"])({
        self: self,
        selfDef: selfDef,
        eventOptions: eventOptions,
        container: container
      });
      break;

    case 'pull':
    case 'pop':
    case 'shift':
      Object(_processremove__WEBPACK_IMPORTED_MODULE_6__["default"])({
        self: self,
        selfDef: selfDef,
        eventOptions: eventOptions,
        container: container
      });
      break;

    case 'sort':
    case 'reverse':
      Object(_processsort__WEBPACK_IMPORTED_MODULE_5__["default"])({
        self: self,
        selfDef: selfDef,
        eventOptions: eventOptions,
        container: container
      });
      break;

    case 'rerender':
      Object(_processrerender__WEBPACK_IMPORTED_MODULE_7__["default"])({
        self: self,
        selfDef: selfDef,
        eventOptions: eventOptions,
        container: container
      });
      break;

    case 'recreate':
      Object(_processrecreate__WEBPACK_IMPORTED_MODULE_4__["default"])({
        self: self,
        selfDef: selfDef,
        eventOptions: eventOptions,
        container: container
      });
      break;

    case 'splice':
      if (added.length) {
        Object(_processspliceadd__WEBPACK_IMPORTED_MODULE_8__["default"])({
          self: self,
          selfDef: selfDef,
          eventOptions: eventOptions,
          container: container
        });
      }

      if (removed.length) {
        Object(_processremove__WEBPACK_IMPORTED_MODULE_6__["default"])({
          self: self,
          selfDef: selfDef,
          eventOptions: eventOptions,
          container: container
        });
      }

      break;

    default:
  }
}

/***/ }),

/***/ "../src/array/_processrendering/processpush.js":
/*!*****************************************************!*\
  !*** ../src/array/_processrendering/processpush.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processPush; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderitemnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderitemnode */ "../src/array/_processrendering/renderitemnode.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _checkalreadyrendered__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkalreadyrendered */ "../src/array/_processrendering/checkalreadyrendered.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/foreach */ "../src/_helpers/foreach.js");




 // this function renders inserted items if possible when push method is called

function processPush(_ref) {
  var self = _ref.self,
      selfDef = _ref.selfDef,
      eventOptions = _ref.eventOptions,
      container = _ref.container;
  var added = eventOptions.added,
      silent = eventOptions.silent;
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_4__["default"])(added, function (item) {
    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      // if a node of an item is already rendered then throw an error
      Object(_checkalreadyrendered__WEBPACK_IMPORTED_MODULE_3__["default"])({
        item: item,
        selfDef: selfDef
      }); // render

      var _renderItemNode = Object(_renderitemnode__WEBPACK_IMPORTED_MODULE_1__["default"])({
        selfDef: selfDef,
        self: self,
        item: item,
        eventOptions: eventOptions
      }),
          node = _renderItemNode.node,
          itemEventOptions = _renderItemNode.itemEventOptions;

      if (node) {
        container.appendChild(node);

        if (!silent) {
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(item, 'afterrender', itemEventOptions);
        }
      }
    }
  });
}

/***/ }),

/***/ "../src/array/_processrendering/processrecreate.js":
/*!*********************************************************!*\
  !*** ../src/array/_processrendering/processrecreate.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processRecreate; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderitemnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderitemnode */ "../src/array/_processrendering/renderitemnode.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _getalreadyrendered__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getalreadyrendered */ "../src/array/_processrendering/getalreadyrendered.js");






 // this function renders inserted items if possible when recreate method is called

function processRecreate(_ref) {
  var self = _ref.self,
      selfDef = _ref.selfDef,
      eventOptions = _ref.eventOptions,
      container = _ref.container;
  var removed = eventOptions.removed,
      silent = eventOptions.silent;
  var selfId = selfDef.id; // iterate over removed items and remove their nodes

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(removed, function (item) {
    var itemDef = _core_defs__WEBPACK_IMPORTED_MODULE_3__["default"].get(item);

    if (itemDef) {
      var renderedInArrays = itemDef.renderedInArrays;
      var node = renderedInArrays && renderedInArrays[selfId];

      if (node) {
        delete itemDef.renderedInArrays[selfId];
        container.removeChild(node);
      }
    }
  });
  var alreadyRenderedMap = {}; // iterate over all items
  // the following approach allows to throw an error when two added objects are the same
  // (not only compare existing items with old ones)

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(self, function (item) {
    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      var itemDef = _core_defs__WEBPACK_IMPORTED_MODULE_3__["default"].get(item);
      var alreadyRenderedNode;

      if (itemDef) {
        alreadyRenderedNode = Object(_getalreadyrendered__WEBPACK_IMPORTED_MODULE_6__["default"])({
          item: item,
          selfDef: selfDef
        });
      }

      if (alreadyRenderedNode) {
        // if an item is already rendered (old item)
        if (itemDef.id in alreadyRenderedMap) {
          // if an item is rendered twice throw an error
          throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__["default"])('array:add_render_twice');
        }

        alreadyRenderedMap[itemDef.id] = true;
        container.appendChild(alreadyRenderedNode);
      } else {
        // this is newly added item
        var _renderItemNode = Object(_renderitemnode__WEBPACK_IMPORTED_MODULE_1__["default"])({
          selfDef: selfDef,
          self: self,
          item: item,
          eventOptions: eventOptions
        }),
            node = _renderItemNode.node,
            itemEventOptions = _renderItemNode.itemEventOptions;

        if (node) {
          // itemDef is defined at renderItemNode if not defined before
          // reload this variable
          itemDef = itemDef || _core_defs__WEBPACK_IMPORTED_MODULE_3__["default"].get(item);

          if (itemDef.id in alreadyRenderedMap) {
            // if newly added item is rendered twice throw an error
            throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__["default"])('array:add_render_twice');
          }

          alreadyRenderedMap[itemDef.id] = true;
          container.appendChild(node);

          if (!silent) {
            Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(item, 'afterrender', itemEventOptions);
          }
        }
      }
    }
  });
}

/***/ }),

/***/ "../src/array/_processrendering/processremove.js":
/*!*******************************************************!*\
  !*** ../src/array/_processrendering/processremove.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processRemove; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/foreach */ "../src/_helpers/foreach.js");


 // this function removes DOM nodes of removed items
// called on splice, pull, pop and shift

function processRemove(_ref) {
  var selfDef = _ref.selfDef,
      eventOptions = _ref.eventOptions,
      container = _ref.container;
  var removed = eventOptions.removed;
  var selfId = selfDef.id;
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(removed, function (item) {
    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      var itemDef = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(item);

      if (itemDef) {
        var renderedInArrays = itemDef.renderedInArrays;
        var node = renderedInArrays && renderedInArrays[selfId];

        if (node) {
          delete renderedInArrays[selfId];
          container.removeChild(node);
        }
      }
    }
  });
}

/***/ }),

/***/ "../src/array/_processrendering/processrerender.js":
/*!*********************************************************!*\
  !*** ../src/array/_processrendering/processrerender.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processRerender; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getalreadyrendered__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getalreadyrendered */ "../src/array/_processrendering/getalreadyrendered.js");
/* harmony import */ var _renderitemnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderitemnode */ "../src/array/_processrendering/renderitemnode.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");



 // this function re-inserts rendered DOM nodes of items
// if they are rendered and forceRerender is falsy
// and renders array items from scratch if they aren't rendered yet or forceRerender is truthy

function processRerender(_ref) {
  var self = _ref.self,
      selfDef = _ref.selfDef,
      eventOptions = _ref.eventOptions,
      container = _ref.container;
  var forceRerender = eventOptions.forceRerender,
      silent = eventOptions.silent; // iterate over all items

  for (var i = 0; i < self.length; i++) {
    var item = self[i];

    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      var alreadyRenderedNode = Object(_getalreadyrendered__WEBPACK_IMPORTED_MODULE_1__["default"])({
        item: item,
        selfDef: selfDef
      }); // if item is already rendered and forceRerender is falsy then re-insert DOM node
      // go to the next cycle iteration then

      if (!forceRerender && alreadyRenderedNode) {
        container.appendChild(alreadyRenderedNode);
        continue;
      } // node removal is called when an item is rendered
      // and forceRerender is truty


      if (alreadyRenderedNode) {
        if (container.contains(alreadyRenderedNode)) {
          container.removeChild(alreadyRenderedNode);
        }
      } // render new node


      var _renderItemNode = Object(_renderitemnode__WEBPACK_IMPORTED_MODULE_2__["default"])({
        selfDef: selfDef,
        self: self,
        item: item,
        eventOptions: eventOptions
      }),
          node = _renderItemNode.node,
          itemEventOptions = _renderItemNode.itemEventOptions;

      if (node) {
        container.appendChild(node);

        if (!silent) {
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(item, 'afterrender', itemEventOptions);
        }
      }
    }
  }
}

/***/ }),

/***/ "../src/array/_processrendering/processsort.js":
/*!*****************************************************!*\
  !*** ../src/array/_processrendering/processsort.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processSort; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getalreadyrendered__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getalreadyrendered */ "../src/array/_processrendering/getalreadyrendered.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/foreach */ "../src/_helpers/foreach.js");


 // this function gets called when array is sorted (via sort, orderBy or reverse)

function processSort(_ref) {
  var self = _ref.self,
      selfDef = _ref.selfDef,
      container = _ref.container;
  // just re-insert rendered nodes in new order
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(self, function (item) {
    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      var node = Object(_getalreadyrendered__WEBPACK_IMPORTED_MODULE_1__["default"])({
        item: item,
        selfDef: selfDef
      });

      if (node) {
        container.appendChild(node);
      }
    }
  });
}

/***/ }),

/***/ "../src/array/_processrendering/processspliceadd.js":
/*!**********************************************************!*\
  !*** ../src/array/_processrendering/processspliceadd.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processSpliceAdd; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderitemnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderitemnode */ "../src/array/_processrendering/renderitemnode.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _checkalreadyrendered__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkalreadyrendered */ "../src/array/_processrendering/checkalreadyrendered.js");
/* harmony import */ var _getalreadyrendered__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getalreadyrendered */ "../src/array/_processrendering/getalreadyrendered.js");





 // the function handles rendering of added items passed as third and rest arguments to splice method

function processSpliceAdd(_ref) {
  var self = _ref.self,
      selfDef = _ref.selfDef,
      eventOptions = _ref.eventOptions,
      container = _ref.container;
  var added = eventOptions.added,
      silent = eventOptions.silent;
  var nextIndex = self.lastIndexOf(added[added.length - 1]) + 1;
  var next = self[nextIndex];
  var nextNode; // get a node of an item which is placed next to the last added item
  // it is needed to insert newly rendered items before

  if (next && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(next) === 'object') {
    nextNode = Object(_getalreadyrendered__WEBPACK_IMPORTED_MODULE_5__["default"])({
      item: next,
      selfDef: selfDef
    });
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(added, function (item) {
    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      // throw an error if node of an item is alread rendered
      Object(_checkalreadyrendered__WEBPACK_IMPORTED_MODULE_4__["default"])({
        item: item,
        selfDef: selfDef
      });

      var _renderItemNode = Object(_renderitemnode__WEBPACK_IMPORTED_MODULE_1__["default"])({
        selfDef: selfDef,
        self: self,
        item: item,
        eventOptions: eventOptions
      }),
          node = _renderItemNode.node,
          itemEventOptions = _renderItemNode.itemEventOptions;

      if (node) {
        if (nextNode) {
          container.insertBefore(node, nextNode);
        } else {
          container.appendChild(node);
        }

        if (!silent) {
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(item, 'afterrender', itemEventOptions);
        }
      }
    }
  });
}

/***/ }),

/***/ "../src/array/_processrendering/processunshift.js":
/*!********************************************************!*\
  !*** ../src/array/_processrendering/processunshift.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processUnshift; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderitemnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderitemnode */ "../src/array/_processrendering/renderitemnode.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _checkalreadyrendered__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkalreadyrendered */ "../src/array/_processrendering/checkalreadyrendered.js");



 // this function renders inserted items if possible when unshift or push method is called

function processUnshift(_ref) {
  var self = _ref.self,
      selfDef = _ref.selfDef,
      eventOptions = _ref.eventOptions,
      container = _ref.container;
  var added = eventOptions.added,
      silent = eventOptions.silent; // iterate over all added items in opposite order

  for (var i = added.length - 1; i + 1; i--) {
    var item = added[i];

    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      // if a node of an item is already rendered then throw an error
      Object(_checkalreadyrendered__WEBPACK_IMPORTED_MODULE_3__["default"])({
        item: item,
        selfDef: selfDef
      });

      var _renderItemNode = Object(_renderitemnode__WEBPACK_IMPORTED_MODULE_1__["default"])({
        selfDef: selfDef,
        self: self,
        item: item,
        eventOptions: eventOptions
      }),
          node = _renderItemNode.node,
          itemEventOptions = _renderItemNode.itemEventOptions;

      if (node) {
        if (container.firstChild) {
          container.insertBefore(node, container.firstChild);
        } else {
          container.appendChild(node);
        }

        if (!silent) {
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(item, 'afterrender', itemEventOptions);
        }
      }
    }
  }
}

/***/ }),

/***/ "../src/array/_processrendering/renderitemnode.js":
/*!********************************************************!*\
  !*** ../src/array/_processrendering/renderitemnode.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderItemNode; });
/* harmony import */ var _parsebindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../parsebindings */ "../src/parsebindings/index.js");
/* harmony import */ var _bindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _unbindnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../unbindnode */ "../src/unbindnode/index.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_core/init */ "../src/_core/init.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _bindnode_getnodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../bindnode/_getnodes */ "../src/bindnode/_getnodes.js");







var htmlTestReg = /</; // the function makes the main rendering job
// it renders given array item

function renderItemNode(_ref) {
  var selfDef = _ref.selfDef,
      self = _ref.self,
      item = _ref.item,
      eventOptions = _ref.eventOptions;
  var renderer = item.renderer,
      _item$bindRenderedAsS = item.bindRenderedAsSandbox,
      bindRenderedAsSandbox = _item$bindRenderedAsS === void 0 ? true : _item$bindRenderedAsS;
  var itemRenderer = self.itemRenderer;
  var usedRenderer = renderer || itemRenderer;
  var rendererContext = usedRenderer === renderer ? item : self;
  var selfId = selfDef.id;
  var moveSandbox = eventOptions.moveSandbox,
      forceRerender = eventOptions.forceRerender,
      silent = eventOptions.silent; // if renderer is not found return null as a node

  if (!usedRenderer) {
    return {
      node: null
    };
  }

  var itemDef = Object(_core_init__WEBPACK_IMPORTED_MODULE_4__["default"])(item);
  var _itemDef$renderedInAr = itemDef.renderedInArrays,
      renderedInArrays = _itemDef$renderedInAr === void 0 ? {} : _itemDef$renderedInAr; // if moveSandbox option is truthy then return a sandbox of an item

  if (moveSandbox) {
    var sandboxPropDef = itemDef.props.sandbox;

    if (sandboxPropDef) {
      var bindings = sandboxPropDef.bindings;

      var _node = bindings ? bindings[0].node : null;

      if (_node) {
        for (var i = 0, keys = Object.keys(renderedInArrays); i < keys.length; i++) {
          var key = keys[i];

          if (_node === renderedInArrays[key]) {
            // delete an information about previous array
            delete renderedInArrays[key];
            break;
          }
        }

        renderedInArrays[selfId] = _node; // moving sandbox does not fire "render" event but it fire "afterrender"
        // since "afterrender" means "node is inserted to DOM"

        return {
          node: _node.__replacedByNode || _node,
          itemEventOptions: {
            node: _node,
            self: item,
            parentArray: self
          }
        };
      }
    }
  }

  itemDef.renderedInArrays = renderedInArrays; // if usedRenderer is function then call it

  if (typeof usedRenderer === 'function') {
    usedRenderer = usedRenderer.call(rendererContext, item);
  } // if usedRenderer is string


  if (typeof usedRenderer === 'string') {
    if (!htmlTestReg.test(usedRenderer)) {
      // if usedRenderer is a selector
      var selector = usedRenderer;
      usedRenderer = Object(_bindnode_getnodes__WEBPACK_IMPORTED_MODULE_6__["default"])(self, selector);

      if (usedRenderer.length) {
        // if a node is found by given selector then use its HTML
        usedRenderer = usedRenderer[0].innerHTML.trim();
      } else {
        // if not throw an error
        throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_5__["default"])('array:renderer_node_missing', {
          selector: selector
        });
      }
    } else {
      // if usedRenderer is HTML string
      usedRenderer = usedRenderer.trim();
    }
  } // pass a node or HTML


  var parsed = Object(_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(item, usedRenderer, eventOptions); // if parseBindings returned more/less than one node then throw an error

  if (parsed.length !== 1) {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_5__["default"])('array:rendered_number_nodes', {
      length: parsed.length
    });
  }

  var node = renderedInArrays[selfId] = parsed[0];

  if (bindRenderedAsSandbox) {
    if (forceRerender) {
      Object(_unbindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(item, 'sandbox', null, null, eventOptions);
    }

    Object(_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 'sandbox', node, null, eventOptions);
  } // if silent is not truthy then fire 'render' event and virtual methods


  if (!silent) {
    var itemEventOptions = {
      node: node,
      self: item,
      parentArray: self
    };
    var onRender = item.onRender;
    var onItemRender = self.onItemRender;

    if (onRender) {
      onRender.call(item, itemEventOptions);
    }

    if (onItemRender) {
      onItemRender.call(self, item, itemEventOptions);
    }

    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(item, 'render', itemEventOptions);
    return {
      node: node.__replacedByNode || node,
      itemEventOptions: itemEventOptions
    };
  }

  return {
    node: node.__replacedByNode || node
  };
}

/***/ }),

/***/ "../src/array/_prototype.js":
/*!**********************************!*\
  !*** ../src/array/_prototype.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");
/* harmony import */ var _afterinit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_afterinit */ "../src/array/_afterinit.js");
/* harmony import */ var _mediateitem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediateitem */ "../src/array/mediateitem.js");
/* harmony import */ var _orderby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderby */ "../src/array/orderby/index.js");
/* harmony import */ var _pull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pull */ "../src/array/pull.js");
/* harmony import */ var _recreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recreate */ "../src/array/recreate/index.js");
/* harmony import */ var _rerender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rerender */ "../src/array/rerender.js");
/* harmony import */ var _restore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restore */ "../src/array/restore.js");
/* harmony import */ var _tojson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tojson */ "../src/array/tojson.js");
/* harmony import */ var _pseudonativemethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_pseudonativemethods */ "../src/array/_pseudonativemethods/index.js");
/* harmony import */ var _iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./iterator */ "../src/array/iterator.js");












var symbolIterator = typeof Symbol === 'function' ? Symbol.iterator : '@@iterator';
/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_1__["default"])(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
  _afterInit: _afterinit__WEBPACK_IMPORTED_MODULE_2__["default"],
  mediateItem: _mediateitem__WEBPACK_IMPORTED_MODULE_3__["default"],
  orderBy: _orderby__WEBPACK_IMPORTED_MODULE_4__["default"],
  pull: _pull__WEBPACK_IMPORTED_MODULE_5__["default"],
  recreate: _recreate__WEBPACK_IMPORTED_MODULE_6__["default"],
  rerender: _rerender__WEBPACK_IMPORTED_MODULE_7__["default"],
  restore: _restore__WEBPACK_IMPORTED_MODULE_8__["default"],
  toJSON: _tojson__WEBPACK_IMPORTED_MODULE_9__["default"],
  length: 0,
  isSeempleArray: true
}, symbolIterator, _iterator__WEBPACK_IMPORTED_MODULE_11__["default"]), _pseudonativemethods__WEBPACK_IMPORTED_MODULE_10__["default"]));

/***/ }),

/***/ "../src/array/_pseudonativemethods/concat.js":
/*!***************************************************!*\
  !*** ../src/array/_pseudonativemethods/concat.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return concat; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_helpers/apply */ "../src/_helpers/apply.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/foreach */ "../src/_helpers/foreach.js");


 // the method works just like Array.prototype.concat but
// - flattens both Array and Seemple.Array
// - returns Seemple.Array

function concat() {
  // fix circular dependency issue
  var SeempleArray = __webpack_require__(/*! ../ */ "../src/array/index.js")["default"];

  var args = Array(arguments.length); // convert all instances of Seemple.Array to Array

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(arguments, function (arg, index) {
    if (arg && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arg) === 'object' && arg.isSeempleArray) {
      args[index] = arg.toJSON(false);
    } else {
      args[index] = arg;
    }
  }); // call original concat method

  var nativeCallResult = Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_1__["default"])(Array.prototype.concat, this.toJSON(false), args); // convert returned value to Seemple.Array

  var result = new SeempleArray();
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(nativeCallResult, function (item, index) {
    result[index] = item;
  });
  result.length = nativeCallResult.length;
  return result;
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/createaddingmethod.js":
/*!***************************************************************!*\
  !*** ../src/array/_pseudonativemethods/createaddingmethod.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAddingMethod; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_core/init */ "../src/_core/init.js");
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reportmodified */ "../src/array/_reportmodified.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/assign */ "../src/_helpers/assign.js");



 // creates methods: push, unshift, push_, unshift_

function createAddingMethod(name, hasOptions) {
  return function pseudoNativeMethod() {
    var _initSeemple = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(this),
        itemMediator = _initSeemple.itemMediator; // +hasOptions is converted to 0 or 1 depending on its value (false/true)


    var argsLength = arguments.length - +hasOptions;
    var args = Array(argsLength);
    var givenEventOptions = hasOptions ? arguments[arguments.length - 1] : null;
    var useMediator = typeof itemMediator === 'function' && (!givenEventOptions || !givenEventOptions.skipItemMediator);
    var isPush = name === 'push';
    var length = this.length; // if no arguments are passed

    if (!argsLength) {
      return length;
    } // convert arguments to array and call item mediator on every item if it's possible


    for (var i = 0; i < argsLength; i++) {
      var arg = arguments[i];

      if (useMediator) {
        var index = isPush ? i + length : i;
        args[i] = itemMediator(arg, index);
      } else {
        args[i] = arg;
      }
    }

    if (isPush) {
      // insert new items to the end of array
      for (var _i = 0; _i < argsLength; _i++) {
        this[length + _i] = args[_i];
      }
    } else {
      // move current items to new indexes
      for (var _i2 = length - 1; _i2 >= 0; _i2--) {
        this[argsLength + _i2] = this[_i2];
      } // insert new items to the begin of array


      for (var _i3 = 0; _i3 < argsLength; _i3++) {
        this[_i3] = args[_i3];
      }
    } // update length


    length += argsLength;
    this.length = length;
    var eventOptions = {
      method: name,
      self: this,
      added: args,
      removed: []
    }; // extend event options by custom event options if they are given

    if (hasOptions) {
      if (givenEventOptions && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenEventOptions) === 'object') {
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_3__["default"])(eventOptions, givenEventOptions);
      }
    }

    Object(_reportmodified__WEBPACK_IMPORTED_MODULE_2__["default"])(this, eventOptions);
    return length;
  };
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/createcopywithin.js":
/*!*************************************************************!*\
  !*** ../src/array/_pseudonativemethods/createcopywithin.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCopyWithin; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_helpers/apply */ "../src/_helpers/apply.js");
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reportmodified */ "../src/array/_reportmodified.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/assign */ "../src/_helpers/assign.js");





function createCopyWithin(hasOptions) {
  return function copyWithin() {
    var originalCopyWithin = Array.prototype.copyWithin;
    /* istanbul ignore if  */

    if (typeof originalCopyWithin !== 'function') {
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('array:nonexistent_method', {
        method: 'copyWithin'
      });
    } // +hasOptions is converted to 0 or 1 depending on its value (false/true)


    var argsLength = arguments.length - +hasOptions;
    var args = Array(argsLength);
    var givenEventOptions = hasOptions ? arguments[arguments.length - 1] : null;

    for (var i = 0; i < argsLength; i++) {
      args[i] = arguments[i];
    }

    Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_1__["default"])(originalCopyWithin, this, args);
    var eventOptions = {
      method: 'copyWithin',
      self: this,
      added: [],
      removed: []
    }; // extend event options by custom event options if they are given

    if (hasOptions) {
      if (givenEventOptions && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenEventOptions) === 'object') {
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_4__["default"])(eventOptions, givenEventOptions);
      }
    }

    Object(_reportmodified__WEBPACK_IMPORTED_MODULE_2__["default"])(this, eventOptions);
    return this;
  };
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/createfill.js":
/*!*******************************************************!*\
  !*** ../src/array/_pseudonativemethods/createfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFill; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_helpers/apply */ "../src/_helpers/apply.js");
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reportmodified */ "../src/array/_reportmodified.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/assign */ "../src/_helpers/assign.js");





function createFill(hasOptions) {
  return function fill(value) {
    var originalFill = Array.prototype.fill;
    /* istanbul ignore if  */

    if (typeof originalFill !== 'function') {
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('array:nonexistent_method', {
        method: 'fill'
      });
    } // +hasOptions is converted to 0 or 1 depending on its value (false/true)


    var argsLength = arguments.length - +hasOptions;
    var args = Array(argsLength);
    var givenEventOptions = hasOptions ? arguments[arguments.length - 1] : null;

    for (var i = 0; i < argsLength; i++) {
      args[i] = arguments[i];
    }

    Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_1__["default"])(originalFill, this, args);
    var eventOptions = {
      method: 'fill',
      self: this,
      added: [value],
      removed: []
    }; // extend event options by custom event options if they are given

    if (hasOptions) {
      if (givenEventOptions && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenEventOptions) === 'object') {
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_4__["default"])(eventOptions, givenEventOptions);
      }
    }

    Object(_reportmodified__WEBPACK_IMPORTED_MODULE_2__["default"])(this, eventOptions);
    return this;
  };
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/createpseudonativemethod.js":
/*!*********************************************************************!*\
  !*** ../src/array/_pseudonativemethods/createpseudonativemethod.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPseudoNativeMethod; });
/* harmony import */ var _toseemplearray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_toseemplearray */ "../src/array/_toseemplearray.js");
/* harmony import */ var _createsortingmethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createsortingmethod */ "../src/array/_pseudonativemethods/createsortingmethod.js");
/* harmony import */ var _createremovingmethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createremovingmethod */ "../src/array/_pseudonativemethods/createremovingmethod.js");
/* harmony import */ var _createaddingmethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createaddingmethod */ "../src/array/_pseudonativemethods/createaddingmethod.js");
/* harmony import */ var _createsplice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createsplice */ "../src/array/_pseudonativemethods/createsplice.js");
/* harmony import */ var _createcopywithin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createcopywithin */ "../src/array/_pseudonativemethods/createcopywithin.js");
/* harmony import */ var _createfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createfill */ "../src/array/_pseudonativemethods/createfill.js");
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_helpers/apply */ "../src/_helpers/apply.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");









var arrayPrototype = Array.prototype; // creates pseudo native method and returns it (push, push_, sort, sort_...)

function createPseudoNativeMethod(name) {
  var hasOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  switch (name) {
    case 'forEach':
      return function pseudoNativeMethod(callback, thisArg) {
        arrayPrototype[name].call(this, callback, thisArg); // return this for nicer chain calls

        return this;
      };

    case 'map':
    case 'filter':
    case 'slice':
      // TODO: Improve readability of pseudoNativeMethod, arguments "a, b" look not good
      return function pseudoNativeMethod(a, b) {
        return Object(_toseemplearray__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayPrototype[name].call(this, a, b));
      };

    case 'every':
    case 'some':
    case 'findIndex':
    case 'find':
      return function pseudoNativeMethod(callback, thisArg) {
        var originalMethod = arrayPrototype[name];
        /* istanbul ignore if  */

        if (typeof originalMethod !== 'function') {
          throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_8__["default"])('array:nonexistent_method', {
            method: name
          });
        }

        return originalMethod.call(this, callback, thisArg);
      };

    case 'join':
      return function pseudoNativeMethod() {
        var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ',';
        return arrayPrototype[name].call(this, separator);
      };

    case 'indexOf':
    case 'lastIndexOf':
    case 'includes':
      return function pseudoNativeMethod(searchElement, fromIndex) {
        var originalMethod = arrayPrototype[name];
        /* istanbul ignore if  */

        if (typeof originalMethod !== 'function') {
          throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_8__["default"])('array:nonexistent_method', {
            method: name
          });
        }

        if (typeof fromIndex === 'undefined') {
          return originalMethod.call(this, searchElement);
        }

        return originalMethod.call(this, searchElement, fromIndex);
      };

    case 'reduce':
    case 'reduceRight':
      return function pseudoNativeMethod() {
        return Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_7__["default"])(arrayPrototype[name], this, arguments);
      };

    case 'sort':
    case 'reverse':
      return Object(_createsortingmethod__WEBPACK_IMPORTED_MODULE_1__["default"])(name, hasOptions);

    case 'pop':
    case 'shift':
      return Object(_createremovingmethod__WEBPACK_IMPORTED_MODULE_2__["default"])(name, hasOptions);

    case 'push':
    case 'unshift':
      return Object(_createaddingmethod__WEBPACK_IMPORTED_MODULE_3__["default"])(name, hasOptions);

    case 'splice':
      return Object(_createsplice__WEBPACK_IMPORTED_MODULE_4__["default"])(hasOptions);

    case 'copyWithin':
      return Object(_createcopywithin__WEBPACK_IMPORTED_MODULE_5__["default"])(hasOptions);

    case 'fill':
      return Object(_createfill__WEBPACK_IMPORTED_MODULE_6__["default"])(hasOptions);

    default:
      return undefined;
  }
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/createremovingmethod.js":
/*!*****************************************************************!*\
  !*** ../src/array/_pseudonativemethods/createremovingmethod.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createRemovingMethod; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_core/init */ "../src/_core/init.js");
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reportmodified */ "../src/array/_reportmodified.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/assign */ "../src/_helpers/assign.js");



 // creates removing method and returns it (pop, shift, pop_, shift_)

function createRemovingMethod(name, hasOptions) {
  return function pseudoNativeMethod(givenEventOptions) {
    if (!this.length) {
      return undefined;
    }

    Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(this); // call original method

    var returns = Array.prototype[name].call(this);
    var eventOptions = {
      method: name,
      self: this,
      added: [],
      removed: [returns]
    }; // extend event options by custom event options if they are given

    if (hasOptions) {
      if (givenEventOptions && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenEventOptions) === 'object') {
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_3__["default"])(eventOptions, givenEventOptions);
      }
    }

    Object(_reportmodified__WEBPACK_IMPORTED_MODULE_2__["default"])(this, eventOptions);
    return returns;
  };
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/createsortingmethod.js":
/*!****************************************************************!*\
  !*** ../src/array/_pseudonativemethods/createsortingmethod.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSortingMethod; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_core/init */ "../src/_core/init.js");
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reportmodified */ "../src/array/_reportmodified.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/assign */ "../src/_helpers/assign.js");



 // creates sorting method and returns it (sort, reverse, sort_, reverse_)

function createSortingMethod(name, hasOptions) {
  return function pseudoNativeMethod(sortCallback) {
    if (this.length < 2) return this;
    Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
    var givenEventOptions = hasOptions ? arguments[arguments.length - 1] : null;
    var method = Array.prototype[name];
    var eventOptions = {
      method: name,
      self: this,
      added: [],
      removed: []
    }; // call original method

    if (name === 'sort' && typeof sortCallback === 'function') {
      method.call(this, sortCallback);
    } else {
      method.call(this);
    } // extend event options by custom event options if they are given


    if (hasOptions) {
      if (givenEventOptions && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenEventOptions) === 'object') {
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_3__["default"])(eventOptions, givenEventOptions);
      }
    }

    Object(_reportmodified__WEBPACK_IMPORTED_MODULE_2__["default"])(this, eventOptions);
    return this;
  };
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/createsplice.js":
/*!*********************************************************!*\
  !*** ../src/array/_pseudonativemethods/createsplice.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSplice; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_core/init */ "../src/_core/init.js");
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reportmodified */ "../src/array/_reportmodified.js");
/* harmony import */ var _toseemplearray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_toseemplearray */ "../src/array/_toseemplearray.js");
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/apply */ "../src/_helpers/apply.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/assign */ "../src/_helpers/assign.js");





 // creates splice or splice_ method and returns it
// TODO: Improve readability of createSplice function

function createSplice(hasOptions) {
  return function pseudoNativeMethod() {
    var _initSeemple = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(this),
        itemMediator = _initSeemple.itemMediator;

    var functionArguments = arguments;
    var argsLength = functionArguments.length - +hasOptions;
    var args = Array(argsLength);
    var givenEventOptions = hasOptions ? functionArguments[functionArguments.length - 1] : null;
    var useMediator = typeof itemMediator === 'function' && (!givenEventOptions || !givenEventOptions.skipItemMediator);
    var added = [];
    var start = args[0];
    var length = this.length;
    start = start < 0 ? length + start : start; // convert arguments to array and call item mediator on every new item if it's possible

    args[0] = functionArguments[0];
    args[1] = functionArguments[1];

    for (var i = 2; i < argsLength; i++) {
      var arg = functionArguments[i];

      if (useMediator) {
        args[i] = itemMediator(arg, start + (i - 2));
      } else {
        args[i] = arg;
      }

      added[i - 2] = args[i];
    } // call original method
    // TODO: Change array manually in splice method for better performance


    var returns = Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_4__["default"])(Array.prototype.splice, this, args); // removed items mean returned items

    var removed = returns; // if something is added or removed

    if (added.length || removed.length) {
      var eventOptions = {
        added: added,
        removed: removed,
        method: 'splice',
        self: this
      }; // extend event options by custom event options if they are given

      if (hasOptions) {
        if (givenEventOptions && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenEventOptions) === 'object') {
          Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_5__["default"])(eventOptions, givenEventOptions);
        }
      }

      Object(_reportmodified__WEBPACK_IMPORTED_MODULE_2__["default"])(this, eventOptions);
    }

    return Object(_toseemplearray__WEBPACK_IMPORTED_MODULE_3__["default"])(returns);
  };
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/entries.js":
/*!****************************************************!*\
  !*** ../src/array/_pseudonativemethods/entries.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return values; });
// returns pairs like [index, value]
function values() {
  var length = this.length;
  var result = new Array(length);

  for (var i = 0; i < length; i++) {
    result[i] = [i, this[i]];
  }

  return result;
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/index.js":
/*!**************************************************!*\
  !*** ../src/array/_pseudonativemethods/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createpseudonativemethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createpseudonativemethod */ "../src/array/_pseudonativemethods/createpseudonativemethod.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ "../src/array/_pseudonativemethods/concat.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ "../src/array/_pseudonativemethods/keys.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./values */ "../src/array/_pseudonativemethods/values.js");
/* harmony import */ var _entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entries */ "../src/array/_pseudonativemethods/entries.js");





var splitBySpaceReg = /\s+/;
var methods = {
  concat: _concat__WEBPACK_IMPORTED_MODULE_1__["default"],
  keys: _keys__WEBPACK_IMPORTED_MODULE_2__["default"],
  values: _values__WEBPACK_IMPORTED_MODULE_3__["default"],
  entries: _entries__WEBPACK_IMPORTED_MODULE_4__["default"]
};
"push pop unshift shift sort reverse splice map filter slice every some reduce reduceRight\nforEach join indexOf lastIndexOf copyWithin fill includes find findIndex".split(splitBySpaceReg).forEach(function (name) {
  methods[name] = Object(_createpseudonativemethod__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
});
'push pop unshift shift sort reverse splice copyWithin fill'.split(splitBySpaceReg).forEach(function (name) {
  methods["".concat(name, "_")] = Object(_createpseudonativemethod__WEBPACK_IMPORTED_MODULE_0__["default"])(name, true);
});
/* harmony default export */ __webpack_exports__["default"] = (methods);

/***/ }),

/***/ "../src/array/_pseudonativemethods/keys.js":
/*!*************************************************!*\
  !*** ../src/array/_pseudonativemethods/keys.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
// returns indexes
function keys() {
  var length = this.length;
  var result = new Array(length);

  for (var i = 0; i < length; i++) {
    result[i] = i;
  }

  return result;
}

/***/ }),

/***/ "../src/array/_pseudonativemethods/values.js":
/*!***************************************************!*\
  !*** ../src/array/_pseudonativemethods/values.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return values; });
// returns values
function values() {
  var length = this.length;
  var result = new Array(length);

  for (var i = 0; i < length; i++) {
    result[i] = this[i];
  }

  return result;
}

/***/ }),

/***/ "../src/array/_reportmodified.js":
/*!***************************************!*\
  !*** ../src/array/_reportmodified.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reportModified; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _processrendering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_processrendering */ "../src/array/_processrendering/index.js");


 // fires events and triggers rendering logic

function reportModified(self, eventOptions) {
  var added = eventOptions.added,
      removed = eventOptions.removed,
      silent = eventOptions.silent,
      method = eventOptions.method,
      dontRender = eventOptions.dontRender;
  var addedLength = added.length;
  var removedLength = removed.length;
  var modified = addedLength || removedLength || method === 'sort' || method === 'reverse';

  var _defs$get = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(self),
      events = _defs$get.events;

  var _self$renderIfPossibl = self.renderIfPossible,
      renderIfPossible = _self$renderIfPossibl === void 0 ? true : _self$renderIfPossibl;
  var asteriskAddEvtName = '_asterisk:add';
  var asteriskRemoveEvtName = '_asterisk:remove'; // if something is added and an array has delegated "asterisk" events
  // then attatch delegated event handlers to newly added items

  if (addedLength && events[asteriskAddEvtName]) {
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(self, asteriskAddEvtName, eventOptions);
  } // if something is removed and an array has delegated "asterisk" events
  // then remove delegated event handlers from removed items


  if (removedLength && events[asteriskRemoveEvtName]) {
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(self, asteriskRemoveEvtName, eventOptions);
  }

  if (!silent) {
    // fire additional event name (like "push")
    if (events[method]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(self, method, eventOptions);
    } // if something is added then fire add and addone events


    if (addedLength) {
      if (events.add) {
        Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(self, 'add', eventOptions);
      }

      if (events.addone) {
        for (var i = 0; i < addedLength; i++) {
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(self, 'addone', {
            self: self,
            addedItem: added[i]
          });
        }
      }
    } // if something is removed then fire add and addone events


    if (removedLength) {
      if (events.remove) {
        Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(self, 'remove', eventOptions);
      }

      if (events.removeone) {
        for (var _i = 0; _i < removedLength; _i++) {
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(self, 'removeone', {
            self: self,
            removedItem: removed[_i]
          });
        }
      }
    } // modify event says that something is added or removed


    if (events.modify) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(self, 'modify', eventOptions);
    }
  } // trigger rendering logic if possible


  if (modified && !dontRender && renderIfPossible) {
    Object(_processrendering__WEBPACK_IMPORTED_MODULE_2__["default"])({
      self: self,
      eventOptions: eventOptions
    });
  }
}

/***/ }),

/***/ "../src/array/_staticmembers.js":
/*!**************************************!*\
  !*** ../src/array/_staticmembers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from */ "../src/array/from.js");
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./of */ "../src/array/of.js");
 // lol


/* harmony default export */ __webpack_exports__["default"] = ({
  of: _of__WEBPACK_IMPORTED_MODULE_1__["default"],
  from: _from__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "../src/array/_toseemplearray.js":
/*!***************************************!*\
  !*** ../src/array/_toseemplearray.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toSeempleArray; });
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
 // converts array-like to Seemple.Array instance

function toSeempleArray(arrayLike) {
  // fix circular dependency issue
  var SeempleArray = __webpack_require__(/*! ./ */ "../src/array/index.js")["default"];

  var result = new SeempleArray(arrayLike.length);
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayLike, function (item, index) {
    result[index] = item;
  });
  return result;
}

/***/ }),

/***/ "../src/array/from.js":
/*!****************************!*\
  !*** ../src/array/from.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return from; });
/* harmony import */ var _cheaprecreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cheaprecreate */ "../src/array/_cheaprecreate.js");
 // creates a new Seemple.Array instance from an array-like or iterable object

function from(arrayLike, mapFn, thisArg) {
  // allow to inherit this method by child classes
  // require('./') fixes circular ref issue
  var ParentClass = typeof this === 'function' ? this : __webpack_require__(/*! ./ */ "../src/array/index.js")["default"];
  var result = new ParentClass();
  var length = arrayLike.length;
  var arrayFrom = Array.from;
  var newItems;
  /* istanbul ignore else */

  if (typeof arrayFrom === 'function') {
    // if Array.from exist, let it do all the job (work with iterable objects etc)
    newItems = arrayFrom(arrayLike, mapFn, thisArg);
  } else {
    // convert array-like object for older browsers
    // @IE
    newItems = Array(length);

    for (var i = 0; i < length; i++) {
      if (typeof mapFn === 'function') {
        newItems[i] = mapFn.call(thisArg, arrayLike[i], i, arrayLike);
      } else {
        newItems[i] = arrayLike[i];
      }
    }
  }

  return Object(_cheaprecreate__WEBPACK_IMPORTED_MODULE_0__["default"])(result, newItems);
}

/***/ }),

/***/ "../src/array/index.js":
/*!*****************************!*\
  !*** ../src/array/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ "../src/class.js");
/* harmony import */ var _seemple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../seemple */ "../src/seemple/index.js");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_prototype */ "../src/array/_prototype.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _staticmembers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_staticmembers */ "../src/array/_staticmembers.js");






_prototype__WEBPACK_IMPORTED_MODULE_2__["default"]["extends"] = _seemple__WEBPACK_IMPORTED_MODULE_1__["default"];

_prototype__WEBPACK_IMPORTED_MODULE_2__["default"].constructor = function SeempleArray(length) {
  if (!(this instanceof SeempleArray)) {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('common:call_class');
  }

  Object(_core_init__WEBPACK_IMPORTED_MODULE_4__["default"])(this); // repeat the same logic as for native Array

  if (arguments.length === 1 && typeof length === 'number') {
    this.length = length;
  } else if (arguments.length) {
    this.recreate(arguments, {
      silent: true,
      dontRender: true
    });
  } // return is used to make possible to chain super() calls


  return this;
};

var SeempleArray = Object(_class__WEBPACK_IMPORTED_MODULE_0__["default"])(_prototype__WEBPACK_IMPORTED_MODULE_2__["default"], _staticmembers__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (SeempleArray);

/***/ }),

/***/ "../src/array/iterator.js":
/*!********************************!*\
  !*** ../src/array/iterator.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return seempleArrayIterator; });
// Symbol.iterator of Seemple.Array instances
function seempleArrayIterator() {
  var _this = this;

  var i = 0;
  return {
    next: function next() {
      if (i > _this.length - 1) {
        return {
          done: true
        };
      }

      return {
        done: false,
        value: _this[i++] // eslint-disable-line no-plusplus

      };
    }
  };
}

/***/ }),

/***/ "../src/array/mediateitem.js":
/*!***********************************!*\
  !*** ../src/array/mediateitem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mediateItem; });
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
 // creates item mediator

function createItemMediator(_ref) {
  var arr = _ref.arr,
      mediator = _ref.mediator;
  return function itemMediator(value, index) {
    // args: value, old value, index, array itself
    return mediator.call(arr, value, index, arr);
  };
} // defines a "type" of every array item


function mediateItem(mediator) {
  var def = Object(_core_init__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
  var length = this.length; // store itemMediator in object definition

  var itemMediator = def.itemMediator = createItemMediator({
    arr: this,
    mediator: mediator
  }); // convert existing items

  for (var i = 0; i < length; i++) {
    this[i] = itemMediator(this[i], i);
  }

  return this;
}

/***/ }),

/***/ "../src/array/of.js":
/*!**************************!*\
  !*** ../src/array/of.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return of; });
/* harmony import */ var _cheaprecreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cheaprecreate */ "../src/array/_cheaprecreate.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");

 // creates a new Seemple.Array instance with a variable number of arguments,
// regardless of number or type of the arguments

function of() {
  var _arguments = arguments;
  // allow to inherit this method by child classes
  // require('./') fixes circular ref issue
  var ParentClass = typeof this === 'function' ? this : __webpack_require__(/*! ./ */ "../src/array/index.js")["default"];
  var result = new ParentClass();
  var newItems = Array(arguments.length);
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments, function (item, index) {
    newItems[index] = _arguments[index];
  });
  return Object(_cheaprecreate__WEBPACK_IMPORTED_MODULE_0__["default"])(result, newItems);
}

/***/ }),

/***/ "../src/array/orderby/_pureorderby.js":
/*!********************************************!*\
  !*** ../src/array/orderby/_pureorderby.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pureOrderBy; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

// the function orders by given order data any array-like object
function pureOrderBy(arr, givenKeys, orders) {
  if ('length' in arr && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arr) === 'object') {
    var defaultOrder = 'asc';
    var commonOrder;

    if (!(orders instanceof Array)) {
      commonOrder = orders || defaultOrder;
    }

    var length = arr.length;
    var result = Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = arr[i];
    }

    if (!givenKeys) {
      return result;
    }

    var keys = givenKeys instanceof Array ? givenKeys : [givenKeys];
    return result.sort(function (a, b) {
      if (a && b) {
        for (var _i = 0; _i < keys.length; _i++) {
          var key = keys[_i];
          var order = (commonOrder || orders[_i]) !== 'desc' ? -1 : 1;

          if (a[key] > b[key]) {
            return -order;
          }

          if (a[key] < b[key]) {
            return order;
          }
        }
      }

      return 0;
    });
  }

  return [];
}

/***/ }),

/***/ "../src/array/orderby/index.js":
/*!*************************************!*\
  !*** ../src/array/orderby/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderBy; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cheaprecreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_cheaprecreate */ "../src/array/_cheaprecreate.js");
/* harmony import */ var _pureorderby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_pureorderby */ "../src/array/orderby/_pureorderby.js");
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_reportmodified */ "../src/array/_reportmodified.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // sorts by properties of items

function orderBy(keys, orders) {
  var eventOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (this.length > 1) {
    Object(_cheaprecreate__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_pureorderby__WEBPACK_IMPORTED_MODULE_2__["default"])(this, keys, orders));
    Object(_reportmodified__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _objectSpread({
      method: 'sort',
      // makes possible to listen "sort" event
      self: this,
      added: [],
      removed: []
    }, eventOptions));
  }

  return this;
}

/***/ }),

/***/ "../src/array/pull.js":
/*!****************************!*\
  !*** ../src/array/pull.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pull; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_reportmodified */ "../src/array/_reportmodified.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // removes array item by given index

function shift(arr, index) {
  for (var i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  delete arr[arr.length - 1];
  arr.length -= 1;
} // finds array item that equals to given value and removes it
// returns removed value


function pullByValue(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      shift(arr, i);
      return value;
    }
  }

  return undefined;
} // removes array item by given index if the index is not over array length
// returns removed value


function pullByIndex(arr, index) {
  if (index < arr.length) {
    var value = arr[index];
    shift(arr, index);
    return value;
  }

  return undefined;
} // removes an array item by index (if number is given) or by value (if object is given)


function pull(toRemove) {
  var eventOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var typeofToRemove = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(toRemove);

  var removed;

  if (toRemove && typeofToRemove === 'object') {
    removed = pullByValue(this, toRemove);
  } else if (typeofToRemove === 'number') {
    removed = pullByIndex(this, toRemove);
  } else {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('pull:to_remove_type', {
      toRemove: toRemove
    });
  }

  if (typeof removed !== 'undefined') {
    Object(_reportmodified__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _objectSpread({
      method: 'pull',
      self: this,
      added: [],
      removed: [removed]
    }, eventOptions));
  }

  return removed;
}

/***/ }),

/***/ "../src/array/recreate/_updateobject.js":
/*!**********************************************!*\
  !*** ../src/array/recreate/_updateobject.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateObject; });
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_helpers/forown */ "../src/_helpers/forown.js");
 // updates one single object by new data
// for Seemple.Array instance call recreate method
// for Seemple.Object instance call setData method
// for other objects just extend them by properties of data parameter

function updateObject(instance, data) {
  if (instance.isSeempleArray) {
    instance.recreate(data);
  } else if (instance.isSeempleObject) {
    // QUESTION: Is it OK to just extend but not replace instance data?
    instance.setData(data);
  } else {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_0__["default"])(data, function (value, key) {
      instance[key] = value;
    });
  }

  return instance;
}

/***/ }),

/***/ "../src/array/recreate/_updatetracked.js":
/*!***********************************************!*\
  !*** ../src/array/recreate/_updatetracked.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateTracked; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _updateobject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_updateobject */ "../src/array/recreate/_updateobject.js");

 // the function gets called to update new items passed to recreate method when trackBy is present
// TODO: Throw an error when two or more items of one array has the same value of trackBy

function updateTracked(_ref) {
  var givenNewItems = _ref.givenNewItems,
      arr = _ref.arr,
      trackBy = _ref.trackBy;
  var newLength = givenNewItems.length;
  var oldLength = arr.length;
  var newItems = Array(newLength);

  if (trackBy === '$index') {
    // simply update items with the same index
    for (var i = 0; i < newLength; i++) {
      var item = arr[i];
      var newItem = givenNewItems[i];

      if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object' && newItem && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(newItem) === 'object') {
        newItems[i] = Object(_updateobject__WEBPACK_IMPORTED_MODULE_1__["default"])(item, newItem);
      } else {
        newItems[i] = newItem;
      }
    }
  } else {
    var trackMap = {}; // fill trackMap object where keys are values of trackBy and values are corresponding items

    for (var _i = 0; _i < oldLength; _i++) {
      var _item = arr[_i];

      if (_item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_item) === 'object') {
        if (trackBy in _item) {
          trackMap[_item[trackBy]] = _item;
        }
      }
    }

    for (var _i2 = 0; _i2 < newLength; _i2++) {
      var _newItem = givenNewItems[_i2];

      if (_newItem && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_newItem) === 'object') {
        var _item2 = arr[_i2];

        if (_item2 && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_item2) === 'object' && _newItem[trackBy] in trackMap) {
          // if an item exists at trackMap then update it
          newItems[_i2] = Object(_updateobject__WEBPACK_IMPORTED_MODULE_1__["default"])(trackMap[_newItem[trackBy]], _newItem);
        } else {
          // if not then use new value as is
          newItems[_i2] = _newItem;
        }
      } else {
        // newItem is not an object
        newItems[_i2] = _newItem;
      }
    }
  }

  return newItems;
}

/***/ }),

/***/ "../src/array/recreate/index.js":
/*!**************************************!*\
  !*** ../src/array/recreate/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return recreate; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_core/init */ "../src/_core/init.js");
/* harmony import */ var _reportmodified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reportmodified */ "../src/array/_reportmodified.js");
/* harmony import */ var _updatetracked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_updatetracked */ "../src/array/recreate/_updatetracked.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // recreates an array

function recreate() {
  var givenNewItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var eventOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var def = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
  var itemMediator = def.itemMediator;
  var newLength = givenNewItems.length;
  var oldLength = this.length;
  var lengthDiff = oldLength - newLength;
  var was = this.toJSON(false);
  var trackBy = this.trackBy;
  var skipItemMediator = eventOptions.skipItemMediator,
      silent = eventOptions.silent,
      dontRender = eventOptions.dontRender;
  var added;
  var removed;
  var newItems;

  if (trackBy) {
    // if trackBy property is given then update givenNewItems array
    newItems = Object(_updatetracked__WEBPACK_IMPORTED_MODULE_3__["default"])({
      arr: this,
      givenNewItems: givenNewItems,
      trackBy: trackBy
    });
  } else {
    // if trackBy is not given then use given new items as is
    newItems = givenNewItems;
  } // call item mediator for every new item (but don't modify passed newItems)


  if (itemMediator && !skipItemMediator) {
    var toMediate = newItems;
    newItems = Array(newLength);

    for (var i = 0; i < newLength; i++) {
      newItems[i] = itemMediator(toMediate[i], i);
    }
  } // update array indexes with new values


  for (var _i = 0; _i < newLength; _i++) {
    this[_i] = newItems[_i];
  } // remove old items that is out of new length


  for (var _i2 = 0; _i2 < lengthDiff; _i2++) {
    delete this[_i2 + newLength];
  } // update length


  this.length = newLength;

  if (silent && dontRender) {
    return this;
  } // create an array of removed items
  // TODO: Optimize creation of "added" and "removed" options in recreate method
  // ... (do not use indexOf)


  if (newLength) {
    if (oldLength) {
      removed = [];

      for (var _i3 = 0; _i3 < oldLength; _i3++) {
        if (!~newItems.indexOf(was[_i3])) {
          removed.push(was[_i3]);
        }
      }
    } else {
      removed = [];
    }
  } else {
    removed = was;
  } // create an array of added items


  if (oldLength) {
    if (newLength) {
      added = [];

      for (var _i4 = 0; _i4 < newLength; _i4++) {
        if (!~was.indexOf(newItems[_i4])) {
          added.push(newItems[_i4]);
        }
      }
    } else {
      added = [];
    }
  } else {
    added = newItems;
  }

  Object(_reportmodified__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _objectSpread({
    added: added,
    removed: removed,
    method: 'recreate',
    self: this
  }, eventOptions));
  return this;
}

/***/ }),

/***/ "../src/array/rerender.js":
/*!********************************!*\
  !*** ../src/array/rerender.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rerender; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _processrendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_processrendering */ "../src/array/_processrendering/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // rerenders not rendered items in an array
// force rerender when forceRerender event option is truthy

function rerender() {
  var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _this$renderIfPossibl = this.renderIfPossible,
      renderIfPossible = _this$renderIfPossibl === void 0 ? true : _this$renderIfPossibl;

  if (renderIfPossible) {
    Object(_processrendering__WEBPACK_IMPORTED_MODULE_1__["default"])({
      self: this,
      eventOptions: _objectSpread({
        method: 'rerender',
        added: [],
        removed: []
      }, eventOptions)
    });
  }

  return this;
}

/***/ }),

/***/ "../src/array/restore.js":
/*!*******************************!*\
  !*** ../src/array/restore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return restore; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _bindnode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _bindnode_getnodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindnode/_getnodes */ "../src/bindnode/_getnodes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // restores Seemple.Array from external nodes

function restore(selector) {
  var _this = this;

  var eventOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var selfDef = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
  var Model = this.Model;
  var silent = eventOptions.silent;
  var newItems = [];
  var nodes;

  if (typeof selector === 'string') {
    // get nodes by selector
    nodes = Object(_bindnode_getnodes__WEBPACK_IMPORTED_MODULE_6__["default"])(this, selector);
  } else {
    // get nodes from rendering container
    var container = this.nodes.container || this.nodes.sandbox;

    if (container) {
      nodes = container.children;
    } else {
      // no container is bound, throw an error
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__["default"])('restore:no_nodes');
    }
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(nodes, function (node, index) {
    var item = Model ? new Model({}, _this, index) : {}; // create new item

    var bindRenderedAsSandbox = item.bindRenderedAsSandbox;
    var itemDef = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
    itemDef.renderedInArrays = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, selfDef.id, node);

    if (bindRenderedAsSandbox !== false) {
      Object(_bindnode__WEBPACK_IMPORTED_MODULE_4__["default"])(item, 'sandbox', node, null, eventOptions);
    }

    if (!silent) {
      // trigger needed events
      var itemEventOptions = {
        node: node,
        self: item,
        parentArray: _this
      };
      var onRender = item.onRender;
      var onItemRender = _this.onItemRender;

      if (onRender) {
        onRender.call(item, itemEventOptions);
      }

      if (onItemRender) {
        onItemRender.call(_this, item, itemEventOptions);
      }

      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_5__["default"])(item, 'render', itemEventOptions); // call afterrender immediately because a node already exists in DOM tree

      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_5__["default"])(item, 'afterrender', itemEventOptions);
    }

    newItems.push(item);
  }); // recreate an array but don't render newly added items

  return this.recreate(newItems, _objectSpread({
    dontRender: true
  }, eventOptions));
}

/***/ }),

/***/ "../src/array/tojson.js":
/*!******************************!*\
  !*** ../src/array/tojson.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toJSON; });
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
 // converts Seemple.Array instance to ordinary array

function toJSON() {
  var recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var result = new Array(this.length);
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_0__["default"])(this, function (item, index) {
    // when recursive is true and when an item has toJSON method then call it recusively
    if (recursive && item && typeof item.toJSON === 'function') {
      result[index] = item.toJSON(true);
    } else {
      result[index] = item;
    }
  });
  return result;
}

/***/ }),

/***/ "../src/binders/index.js":
/*!*******************************!*\
  !*** ../src/binders/index.js ***!
  \*******************************/
/*! exports provided: html, display, className, prop, attr, input, output, textarea, select, progress, text, style, dataset, existence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_binders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-binders */ "../node_modules/common-binders/index.js");
/* harmony import */ var common_binders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(common_binders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "display", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["display"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "className", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["className"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["attr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "text", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["dataset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "existence", function() { return common_binders__WEBPACK_IMPORTED_MODULE_0__["existence"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "../src/binders/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "input", function() { return _input__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./output */ "../src/binders/output.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "output", function() { return _output__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea */ "../src/binders/textarea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textarea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select */ "../src/binders/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress */ "../src/binders/progress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "../src/binders/input.js":
/*!*******************************!*\
  !*** ../src/binders/input.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return input; });
// returns a binder for input element based on its type
function input(type) {
  var on;

  switch (type) {
    case 'checkbox':
      return {
        on: 'click keyup',
        getValue: function getValue() {
          return this.checked;
        },
        setValue: function setValue(value) {
          this.checked = value;
        }
      };

    case 'radio':
      return {
        on: 'click keyup',
        getValue: function getValue() {
          return this.value;
        },
        setValue: function setValue(value) {
          this.checked = typeof value !== 'undefined' && this.value === value;
        }
      };

    case 'submit':
    case 'button':
    case 'image':
    case 'reset':
      return {};

    case 'hidden':
      on = null;
      break;

    case 'file':
      on = 'change';
      break;

    /*
    case 'text':
    case 'password':
    case 'date':
    case 'datetime':
    case 'datetime-local':
    case 'month':
    case 'time':
    case 'week':
    case 'range':
    case 'color':
    case 'search':
    case 'email':
    case 'tel':
    case 'url':
    case 'file':
    case 'number': */

    default:
      // other future (HTML6+) inputs
      on = 'input';
  }

  return {
    on: on,
    getValue: function getValue() {
      return this.value;
    },
    setValue: function setValue(value) {
      this.value = value;
    }
  };
}

/***/ }),

/***/ "../src/binders/output.js":
/*!********************************!*\
  !*** ../src/binders/output.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return output; });
// returns a binder for output element
function output() {
  return {
    on: null,
    getValue: function getValue() {
      return this.value || this.textContent;
    },
    setValue: function setValue(value) {
      var property = 'form' in this ? 'value' : 'textContent';
      this[property] = value === null ? '' : "".concat(value);
    }
  };
}

/***/ }),

/***/ "../src/binders/progress.js":
/*!**********************************!*\
  !*** ../src/binders/progress.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return progress; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "../src/binders/input.js");
 // returns a binder for textarea element

function progress() {
  return Object(_input__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "../src/binders/select.js":
/*!********************************!*\
  !*** ../src/binders/select.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return select; });
// returns a binder for select element
function select(multiple) {
  if (multiple) {
    return {
      on: 'change',
      getValue: function getValue() {
        var options = this.options;
        var result = [];

        for (var i = 0; options.length > i; i++) {
          if (options[i].selected) {
            result.push(options[i].value);
          }
        }

        return result;
      },
      setValue: function setValue(givenValue) {
        var options = this.options;
        var value = typeof givenValue === 'string' ? [givenValue] : givenValue;

        for (var i = options.length - 1; i >= 0; i--) {
          options[i].selected = ~value.indexOf(options[i].value);
        }
      }
    };
  }

  return {
    on: 'change',
    getValue: function getValue() {
      return this.value;
    },
    setValue: function setValue(value) {
      this.value = value;

      if (!value) {
        var options = this.options;

        for (var i = options.length - 1; i >= 0; i--) {
          if (!options[i].value) {
            options[i].selected = true;
            break;
          }
        }
      }
    }
  };
}

/***/ }),

/***/ "../src/binders/textarea.js":
/*!**********************************!*\
  !*** ../src/binders/textarea.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return textarea; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "../src/binders/input.js");
 // returns a binder for textarea element

function textarea() {
  // textarea behaves just like text input
  return Object(_input__WEBPACK_IMPORTED_MODULE_0__["default"])('text');
}

/***/ }),

/***/ "../src/bindnode/_bindsinglenode.js":
/*!******************************************!*\
  !*** ../src/bindnode/_bindsinglenode.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindSingleNode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lookforbinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lookforbinder */ "../src/lookforbinder.js");
/* harmony import */ var _createnodehandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createnodehandler */ "../src/bindnode/_createnodehandler.js");
/* harmony import */ var _createobjecthandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_createobjecthandler */ "../src/bindnode/_createobjecthandler.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _on_addlistener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _helpers_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/debounce */ "../src/_helpers/debounce.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var spaceReg = /\s+/; // handles binding for single property & node
// the function is used at bindNode

function bindSingleNode(object, _ref) {
  var givenBinder = _ref.binder,
      key = _ref.key,
      $nodes = _ref.$nodes,
      node = _ref.node,
      eventOptions = _ref.eventOptions,
      propDef = _ref.propDef;
  var silent = eventOptions.silent,
      getValueOnBind = eventOptions.getValueOnBind,
      setValueOnBind = eventOptions.setValueOnBind,
      _eventOptions$debounc = eventOptions.debounceSetValue,
      debounceSetValue = _eventOptions$debounc === void 0 ? true : _eventOptions$debounc,
      _eventOptions$debounc2 = eventOptions.debounceGetValue,
      debounceGetValue = _eventOptions$debounc2 === void 0 ? true : _eventOptions$debounc2,
      _eventOptions$debounc3 = eventOptions.debounceSetValueOnBind,
      debounceSetValueOnBind = _eventOptions$debounc3 === void 0 ? false : _eventOptions$debounc3,
      _eventOptions$debounc4 = eventOptions.debounceGetValueOnBind,
      debounceGetValueOnBind = _eventOptions$debounc4 === void 0 ? false : _eventOptions$debounc4,
      _eventOptions$debounc5 = eventOptions.debounceSetValueDelay,
      debounceSetValueDelay = _eventOptions$debounc5 === void 0 ? 0 : _eventOptions$debounc5,
      _eventOptions$debounc6 = eventOptions.debounceGetValueDelay,
      debounceGetValueDelay = _eventOptions$debounc6 === void 0 ? 0 : _eventOptions$debounc6,
      _eventOptions$useExac = eventOptions.useExactBinder,
      useExactBinder = _eventOptions$useExac === void 0 ? false : _eventOptions$useExac; // create bindings array in property definition object

  var bindings = propDef.bindings = propDef.bindings || [];
  var value = propDef.value;
  var bindingOptions = {
    self: object,
    key: key,
    value: value,
    $nodes: $nodes,
    node: node
  };
  var isUndefined = typeof value === 'undefined';
  var binder;
  var objectHandler;
  var nodeHandler; // do not allow to bind more than 2 nodes to "sandbox" (for all nodes)
  // and "container" (for Seemple.Array)

  if (bindings.length && (key === 'sandbox' || object.isSeempleArray && key === 'container')) {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_7__["default"])('binding:magic_props_nodes_length');
  } // get actual binder


  if (givenBinder !== null) {
    // by default binder passed to bindNode is extended by default binder
    // useExactBinder turns this behavior off
    if (useExactBinder) {
      binder = givenBinder;
    } else {
      // getting default binder
      var foundBinder = Object(_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node); // if default binder is found

      if (foundBinder) {
        // extend found binder by given binder
        if (givenBinder) {
          Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_9__["default"])(foundBinder, givenBinder);
        }

        binder = foundBinder;
      } else {
        // default binder is not found
        binder = givenBinder || {};
      }
    }
  }

  var _binder = binder,
      getValue = _binder.getValue,
      setValue = _binder.setValue,
      on = _binder.on,
      initialize = _binder.initialize; // call binder.initialize

  if (initialize) {
    initialize.call(node, bindingOptions);
  } // add needed event handlers to given node when getValue is given


  if (getValue) {
    var syncNodeHandler = Object(_createnodehandler__WEBPACK_IMPORTED_MODULE_2__["default"])({
      object: object,
      key: key,
      node: node,
      propDef: propDef,
      binder: binder,
      bindingOptions: bindingOptions
    });
    var debouncedNodeHandler;

    if (debounceGetValue || debounceGetValueOnBind) {
      debouncedNodeHandler = Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(syncNodeHandler, debounceGetValueDelay);
    }

    if (debounceGetValue) {
      nodeHandler = debouncedNodeHandler;
    } else {
      nodeHandler = syncNodeHandler;
    } // TODO: Throw error when "on" and maybe other binder properties has wrong type


    if (typeof on === 'function') {
      on.call(node, nodeHandler, bindingOptions);
    } else if (typeof on === 'string') {
      // addEventListener is faster than "on" method from any DOM library
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_8__["default"])(on.split(spaceReg), function (evtName) {
        return node.addEventListener(evtName, nodeHandler);
      });
    }

    if (isUndefined && getValueOnBind !== false || getValueOnBind === true) {
      if (debounceGetValueOnBind) {
        debouncedNodeHandler();
      } else {
        syncNodeHandler();
      }
    }

    isUndefined = typeof propDef.value === 'undefined';
  } // add needed event handlers to the object when setValue is given


  if (setValue) {
    var syncObjectHandler = Object(_createobjecthandler__WEBPACK_IMPORTED_MODULE_3__["default"])({
      node: node,
      propDef: propDef,
      binder: binder,
      bindingOptions: bindingOptions,
      eventOptions: eventOptions
    });
    var debouncedObjectHandler;

    if (debounceSetValue || debounceSetValueOnBind) {
      debouncedObjectHandler = Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(syncObjectHandler, debounceSetValueDelay);
    }

    if (debounceSetValue) {
      objectHandler = debouncedObjectHandler;
    } else {
      objectHandler = syncObjectHandler;
    } // TODO: Is it possible to get previous value of a property?


    Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_5__["default"])(object, "_change:bindings:".concat(key), objectHandler, null, {
      skipChecks: true
    });

    if (!isUndefined && setValueOnBind !== false || setValueOnBind === true) {
      if (debounceSetValueOnBind) {
        debouncedObjectHandler();
      } else {
        syncObjectHandler();
      }
    }
  } // add binding data to bindings array


  bindings.push({
    on: on,
    node: node,
    binder: binder,
    objectHandler: objectHandler,
    nodeHandler: nodeHandler,
    bindingOptions: bindingOptions
  }); // fire events

  if (!silent) {
    var extendedEventOptions = _objectSpread({
      key: key,
      node: node
    }, eventOptions);

    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__["default"])(object, "bind:".concat(key), extendedEventOptions);
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__["default"])(object, 'bind', extendedEventOptions);
  }
}

/***/ }),

/***/ "../src/bindnode/_createbindingswitcher.js":
/*!*************************************************!*\
  !*** ../src/bindnode/_createbindingswitcher.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBindingSwitcher; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unbindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unbindnode */ "../src/unbindnode/index.js");

 // returns a function which re-adds binding when object branch is changed
// the function is called by bindNode when something like
// 'foo.bar.baz' is passed to it as key argument value
// this is one of the hardest things in the framework to understand

function createBindingSwitcher(_ref) {
  var object = _ref.object,
      deepPath = _ref.deepPath,
      $nodes = _ref.$nodes,
      binder = _ref.binder,
      eventOptions = _ref.eventOptions,
      bindNode = _ref.bindNode;
  return function bindingSwitcher() {
    var changeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var deepPathLength = deepPath.length;
    var lastDeepPathItem = deepPath[deepPathLength - 1];
    var value = changeEvent.value,
        previousValue = changeEvent.previousValue,
        restPath = changeEvent.restPath;
    var target; // an object to call bindNode

    var previousTarget; // an object to call unbindNode

    if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' && restPath) {
      // if rest path is given and new value is an object
      target = value;

      for (var i = 0; i < restPath.length; i++) {
        target = target[restPath[i]];

        if (!target) {
          break;
        }
      }
    } else {
      // if rest path is not given
      target = object;

      for (var _i = 0; _i < deepPathLength - 1; _i++) {
        target = target[deepPath[_i]];

        if (!target) {
          break;
        }
      }
    } // if rest path is given and previous value is an object


    if (previousValue && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(previousValue) === 'object' && restPath) {
      previousTarget = previousValue;

      for (var _i2 = 0; _i2 < restPath.length; _i2++) {
        previousTarget = previousTarget[restPath[_i2]];

        if (!previousTarget) {
          break;
        }
      }
    } // add binding for new target


    if (target && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(target) === 'object') {
      bindNode(target, lastDeepPathItem, $nodes, binder, eventOptions);
    } // remove binding for previously used object


    if (previousTarget && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(previousTarget) === 'object') {
      Object(_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(previousTarget, lastDeepPathItem, $nodes);
    }
  };
}

/***/ }),

/***/ "../src/bindnode/_createnodehandler.js":
/*!*********************************************!*\
  !*** ../src/bindnode/_createnodehandler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createNodeHandler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/is */ "../src/_helpers/is.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set */ "../src/set.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // returns a function which called when bound node state is changed (eg DOM event is fired)

function createNodeHandler(_ref) {
  var object = _ref.object,
      key = _ref.key,
      node = _ref.node,
      propDef = _ref.propDef,
      binder = _ref.binder,
      bindingOptions = _ref.bindingOptions;
  return function nodeHandler() {
    var domEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // nodeHandler.disabled = true is set in unbindNode
    // we cannot "turn off" binder.on when its value is a function
    // developer needs to clean memory ("turn off" callback) manualy in binder.destroy
    if (nodeHandler.disabled) {
      return;
    }

    var previousValue = propDef.value;
    var which = domEvent.which,
        target = domEvent.target,
        ctrlKey = domEvent.ctrlKey,
        altKey = domEvent.altKey;
    var getValue = binder.getValue;
    var value = getValue.call(node, _objectSpread({
      previousValue: previousValue,
      domEvent: domEvent,
      originalEvent: domEvent.originalEvent || domEvent,
      // jQuery thing
      // will throw "preventDefault is not a function" when domEvent is empty object
      preventDefault: function preventDefault() {
        return domEvent.preventDefault();
      },
      // will throw "stopPropagation is not a function" when domEvent is empty object
      stopPropagation: function stopPropagation() {
        return domEvent.stopPropagation();
      },
      which: which,
      target: target,
      ctrlKey: ctrlKey,
      altKey: altKey
    }, bindingOptions));

    if (!Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["default"])(value, previousValue)) {
      Object(_set__WEBPACK_IMPORTED_MODULE_2__["default"])(object, key, value, {
        fromNode: true,
        // the following properties are needed to avoid circular changes
        // they are used at objectHandler
        changedNode: node,
        onChangeValue: value,
        binder: binder
      });
    }
  };
}

/***/ }),

/***/ "../src/bindnode/_createobjecthandler.js":
/*!***********************************************!*\
  !*** ../src/bindnode/_createobjecthandler.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createObjectHandler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// returns a function which is called when property value is changed
function createObjectHandler(_ref) {
  var node = _ref.node,
      propDef = _ref.propDef,
      binder = _ref.binder,
      bindingOptions = _ref.bindingOptions;
  return function objectHandler() {
    var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var value = propDef.value;
    var onChangeValue = eventOptions.onChangeValue,
        changedNode = eventOptions.changedNode,
        evtBinder = eventOptions.binder;
    var setValue = binder.setValue; // dirty hack for https://github.com/finom/seemple/issues/19

    var dirtyHackValue = onChangeValue === 'string' && typeof value === 'number' ? "".concat(value) : value; // don't call setValue if a property is changed via getValue of the same binder

    if (changedNode === node && onChangeValue === dirtyHackValue && evtBinder === binder) {
      return;
    }

    setValue.call(node, value, _objectSpread({
      value: value
    }, bindingOptions));
  };
}

/***/ }),

/***/ "../src/bindnode/_getnodes.js":
/*!************************************!*\
  !*** ../src/bindnode/_getnodes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodes; });
/* harmony import */ var _selectnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_selectnodes */ "../src/bindnode/_selectnodes.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_dom */ "../src/_dom/index.js");


var htmlReg = /</;
var customSelectorReg = /:sandbox|:bound\(([^(]*)\)/; // the function works just like DOM library accepting any kind of arg
// (HTML string, Node, NodeList etc) bu allows to pass custom selector
// eg :bound(KEY) and :sandbox

function getNodes(object, selector) {
  if (typeof selector === 'string' && !htmlReg.test(selector) && customSelectorReg.test(selector)) {
    return Object(_selectnodes__WEBPACK_IMPORTED_MODULE_0__["default"])(object, selector);
  }

  return _dom__WEBPACK_IMPORTED_MODULE_1__["default"].$(selector);
}

/***/ }),

/***/ "../src/bindnode/_selectnodes.js":
/*!***************************************!*\
  !*** ../src/bindnode/_selectnodes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectNodes; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_toarray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/toarray */ "../src/_helpers/toarray.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_dom */ "../src/_dom/index.js");




var customSelectorReg = /\s*:bound\(([^(]*)\)\s*([\S\s]*)\s*|\s*:sandbox\s*([\S\s]*)\s*/;
var randomAttr = "".concat(Math.random().toString().replace('0.', 'x'), "y"); // x12345y
// the function selects nodes based on a selector (including custom values, eg :sandbox)
// TODO: selectNodes looks not good, it needs to be refactored and accelerated if possible

function selectNodes(object, givenSelector) {
  var _defs$get = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object),
      props = _defs$get.props;

  var selectors = givenSelector.split(',');
  var result = _dom__WEBPACK_IMPORTED_MODULE_3__["default"].$();
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(selectors, function (selector) {
    var execResult = customSelectorReg.exec(selector);

    if (execResult) {
      var boundKey = execResult[3] !== undefined ? 'sandbox' : execResult[1];
      var subSelector = execResult[3] !== undefined ? execResult[3] : execResult[2];
      var propDef = props[boundKey];

      if (propDef) {
        var bindings = propDef.bindings;

        if (bindings) {
          var boundNodes = Array(bindings.length);
          Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(bindings, function (binding, i) {
            boundNodes[i] = binding.node;
          }); // if native selector passed after :bound(KEY) is not empty string
          // for example ":bound(KEY) .my-selector"

          if (subSelector) {
            // if native selector contains children selector
            // for example ":bound(KEY) > .my-selector"
            if (subSelector.indexOf('>') === 0) {
              // selecting children
              Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(boundNodes, function (node) {
                node.setAttribute(randomAttr, randomAttr);
                var selected = node.querySelectorAll("[".concat(randomAttr, "=\"").concat(randomAttr, "\"] ").concat(subSelector));
                result = result.add(Object(_helpers_toarray__WEBPACK_IMPORTED_MODULE_1__["default"])(selected));
                node.removeAttribute(randomAttr);
              });
            } else {
              // if native selector doesn't contain children selector
              Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(boundNodes, function (node) {
                var selected = node.querySelectorAll(subSelector);
                result = result.add(Object(_helpers_toarray__WEBPACK_IMPORTED_MODULE_1__["default"])(selected));
              });
            }
          } else {
            // if native selector is empty string just add bound nodes to result
            result = result.add(boundNodes);
          }
        }
      }
    } else {
      // if it's native selector (no custom things)
      result = result.add(selector);
    }
  });
  return result;
}

/***/ }),

/***/ "../src/bindnode/index.js":
/*!********************************!*\
  !*** ../src/bindnode/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindNode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _getnodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getnodes */ "../src/bindnode/_getnodes.js");
/* harmony import */ var _createbindingswitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_createbindingswitcher */ "../src/bindnode/_createbindingswitcher.js");
/* harmony import */ var _bindsinglenode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_bindsinglenode */ "../src/bindnode/_bindsinglenode.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _on_addtreelistener__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../on/_addtreelistener */ "../src/on/_addtreelistener.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











 // initializes binsing between a property of an object to HTML node

function bindNode(object, key, node, binder, eventOptions) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    eventOptions = binder;
    binder = node;
    node = key;
    key = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_7__["default"])(object, 'bindNode');
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  binder = binder || {}; // eslint-disable-line no-param-reassign

  Object(_core_init__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
  var temporaryOptionalFlag = bindNode.temporaryOptionalFlag;
  delete bindNode.temporaryOptionalFlag; // throw an error when key is falsy

  if (!key) {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_10__["default"])('binding:falsy_key');
  }

  if (key instanceof Array) {
    if (typeof key[0] === 'string') {
      /*
       * accept array of keys
       * this.bindNode(['a', 'b', 'c'], node)
       */
      if (temporaryOptionalFlag) {
        // eslint-disable-next-line no-param-reassign
        eventOptions = _objectSpread({}, eventOptions, {
          optional: true
        });
      }

      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_9__["default"])(key, function (itemKey) {
        return bindNode(object, itemKey, node, binder, eventOptions);
      });
    } else {
      /*
       * accept array of objects
       * this.bindNode([{key, node, binder, event}], { silent: true });
       */
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_9__["default"])(key, function (_ref) {
        var itemKey = _ref.key,
            itemNode = _ref.node,
            itemBinder = _ref.binder,
            itemEventOptions = _ref.event;
        var commonEventOptions = node;
        var mergedEventOptions = {};

        if (temporaryOptionalFlag) {
          mergedEventOptions.optional = true;
        }

        if (commonEventOptions) {
          // extend event object by "global" event
          Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_12__["default"])(mergedEventOptions, commonEventOptions);
        }

        if (itemEventOptions) {
          // extend event object by "local" event ("event" key of an object)
          Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_12__["default"])(mergedEventOptions, itemEventOptions);
        }

        bindNode(object, itemKey, itemNode, itemBinder, mergedEventOptions);
      });
    }

    return object;
  }

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(key) === 'object') {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_8__["default"])(key, function (keyObjValue, keyObjKey) {
      // binder means eventOptions
      if (temporaryOptionalFlag) {
        // eslint-disable-next-line no-param-reassign
        eventOptions = binder ? _objectSpread({}, binder, {
          optional: true
        }) : {
          optional: true
        };
      } else {
        eventOptions = binder; // eslint-disable-line no-param-reassign
      }

      if (keyObjValue && keyObjValue.constructor === Object && 'node' in keyObjValue) {
        // this.bindNode({ key: { node: $(), binder } ) }, { on: 'evt' }, { silent: true });
        bindNode(object, keyObjKey, keyObjValue.node, keyObjValue.binder || node, eventOptions);
      } else if (keyObjValue && keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
        // this.bindNode({ key: [{
        //   node: $(),
        //   binder
        // }] ) }, { on: 'evt' }, { silent: true });
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_9__["default"])(keyObjValue, function (keyObjValueItem) {
          bindNode(object, keyObjKey, keyObjValueItem.node, keyObjValueItem.binder || node, eventOptions);
        });
      } else {
        // this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
        bindNode(object, keyObjKey, keyObjValue, node, eventOptions);
      }
    });
    return object;
  }

  var _eventOptions = eventOptions,
      _eventOptions$optiona = _eventOptions.optional,
      optional = _eventOptions$optiona === void 0 ? temporaryOptionalFlag || false : _eventOptions$optiona,
      _eventOptions$exactKe = _eventOptions.exactKey,
      exactKey = _eventOptions$exactKe === void 0 ? false : _eventOptions$exactKe;
  var $nodes = Object(_getnodes__WEBPACK_IMPORTED_MODULE_4__["default"])(object, node); // check node existence

  if (!$nodes.length) {
    if (optional) {
      return object;
    }

    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_10__["default"])('binding:node_missing', {
      key: key,
      node: node
    });
  }

  if (!exactKey) {
    var deepPath = key.split('.');
    var deepPathLength = deepPath.length;

    if (deepPathLength > 1) {
      // handle binding when key arg includes dots (eg "a.b.c.d")
      var bindingSwitcher = Object(_createbindingswitcher__WEBPACK_IMPORTED_MODULE_5__["default"])({
        object: object,
        deepPath: deepPath,
        $nodes: $nodes,
        binder: binder,
        eventOptions: eventOptions,
        bindNode: bindNode
      });
      Object(_on_addtreelistener__WEBPACK_IMPORTED_MODULE_11__["default"])(object, deepPath.slice(0, deepPathLength - 1), bindingSwitcher);
      bindingSwitcher();
      return object;
    }
  }

  var propDef = Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_3__["default"])(object, key);

  if (object.isSeemple) {
    // if an object is Seemple instance then extend "$nodes" and "nodes" objects
    var _object = object,
        $allNodes = _object.$nodes,
        allNodes = _object.nodes;

    if (!$allNodes || !allNodes) {
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_10__["default"])('binding:instance_nodes_missing', {
        $nodes: $allNodes,
        nodes: allNodes
      });
    }

    $allNodes[key] = $allNodes[key] && $allNodes[key].length ? $allNodes[key].add($nodes) : $nodes;
    allNodes[key] = $allNodes[key][0];
  } // handle binding for every node separately


  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_9__["default"])($nodes, function (oneNode) {
    return Object(_bindsinglenode__WEBPACK_IMPORTED_MODULE_6__["default"])(object, {
      $nodes: $nodes,
      node: oneNode,
      key: key,
      eventOptions: eventOptions,
      binder: binder,
      propDef: propDef
    });
  });
  return object;
}

/***/ }),

/***/ "../src/bindoptionalnode.js":
/*!**********************************!*\
  !*** ../src/bindoptionalnode.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindOptionalNode; });
/* harmony import */ var _bindnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers/apply */ "../src/_helpers/apply.js");

 // TODO: Adds a binding, not throwing an error when a node is missing

function bindOptionalNode() {
  // this hack allows to keep bindOptionalNode as compact as possible
  // and doesn't require to flip args and support all bindNode variations
  _bindnode__WEBPACK_IMPORTED_MODULE_0__["default"].temporaryOptionalFlag = true;
  return Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_1__["default"])(_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"], this, arguments);
}

/***/ }),

/***/ "../src/bindsandbox.js":
/*!*****************************!*\
  !*** ../src/bindsandbox.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindSandbox; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _unbindnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unbindnode */ "../src/unbindnode/index.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");



 // binds or rebinds sandbox node

function bindSandbox(object, node, evt) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    evt = node;
    node = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__["default"])(object, 'bindSandbox');
  }

  Object(_unbindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'sandbox', null, evt);
  return Object(_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(object, 'sandbox', node, null, evt);
}

/***/ }),

/***/ "../src/calc/_addsource.js":
/*!*********************************!*\
  !*** ../src/calc/_addsource.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSource; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _on_addlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _on_addtreelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../on/_addtreelistener */ "../src/on/_addtreelistener.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");



 // adds a source to a source list and adds needed event listener to a it

function addSource(_ref) {
  var calcHandler = _ref.calcHandler,
      allSources = _ref.allSources,
      sourceKey = _ref.sourceKey,
      sourceObject = _ref.sourceObject,
      eventOptions = _ref.eventOptions;
  var _eventOptions$exactKe = eventOptions.exactKey,
      exactKey = _eventOptions$exactKe === void 0 ? false : _eventOptions$exactKe;
  var isDelegated = false; // source key must be a string

  if (typeof sourceKey !== 'string') {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('calc:source_key_type', {
      sourceKey: sourceKey
    });
  } // source object must be an object


  if (!sourceObject || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(sourceObject) !== 'object') {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('calc:source_object_type', {
      sourceObject: sourceObject
    });
  }

  if (!exactKey) {
    var deepPath = sourceKey.split('.'); // if something like a.b.c is used as a key

    if (deepPath.length > 1) {
      isDelegated = true; // TODO: Avoid collisions with bindings by using another event name
      // ... instead of _change:tree:xxx

      Object(_on_addtreelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(sourceObject, deepPath, calcHandler);
    } else {
      exactKey = true;
    }
  }

  if (exactKey) {
    // normal handler
    Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceObject, "_change:deps:".concat(sourceKey), calcHandler);
  }

  allSources.push({
    sourceKey: sourceKey,
    sourceObject: sourceObject,
    isDelegated: isDelegated
  });
}

/***/ }),

/***/ "../src/calc/_createcalchandler.js":
/*!*****************************************!*\
  !*** ../src/calc/_createcalchandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCalcHandler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../set */ "../src/set.js");
/* harmony import */ var _helpers_deepfind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/deepfind */ "../src/_helpers/deepfind.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/apply */ "../src/_helpers/apply.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // creates event handler for target object which will be fired when a source is changed

function createCalcHandler(_ref) {
  var object = _ref.object,
      eventOptions = _ref.eventOptions,
      allSources = _ref.allSources,
      target = _ref.target,
      def = _ref.def,
      handler = _ref.handler;
  return function calcHandler() {
    var changeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var values = [];
    var _changeEvent$protecto = changeEvent.protector,
        protector = _changeEvent$protecto === void 0 ? {} : _changeEvent$protecto;
    var protectKey = target + def.id;
    var promiseCalc = eventOptions.promiseCalc;

    var setEventOptions = _objectSpread({
      protector: protector
    }, eventOptions, {}, changeEvent);

    if (protectKey in protector) {
      return;
    }

    protector[protectKey] = true;
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(allSources, function (_ref2) {
      var sourceObject = _ref2.sourceObject,
          sourceKey = _ref2.sourceKey,
          isDelegated = _ref2.isDelegated;
      var value = isDelegated ? Object(_helpers_deepfind__WEBPACK_IMPORTED_MODULE_2__["default"])(sourceObject, sourceKey) : sourceObject[sourceKey];
      values.push(value);
    });
    var targetValue = Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_4__["default"])(handler, object, values);

    if (promiseCalc) {
      if (!(targetValue instanceof Promise)) {
        targetValue = Promise.resolve(targetValue);
      }

      targetValue.then(function (promiseResult) {
        return Object(_set__WEBPACK_IMPORTED_MODULE_1__["default"])(object, target, promiseResult, setEventOptions);
      })["catch"](function (e) {
        throw Error(e);
      });
    } else {
      Object(_set__WEBPACK_IMPORTED_MODULE_1__["default"])(object, target, targetValue, setEventOptions);
    }
  };
}

/***/ }),

/***/ "../src/calc/index.js":
/*!****************************!*\
  !*** ../src/calc/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calc; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");
/* harmony import */ var _helpers_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/debounce */ "../src/_helpers/debounce.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _addsource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_addsource */ "../src/calc/_addsource.js");
/* harmony import */ var _createcalchandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_createcalchandler */ "../src/calc/_createcalchandler.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");










 // defines a property which is dependend on other properties

function calc(object, target, sources, givenHandler, eventOptions) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    eventOptions = givenHandler;
    givenHandler = sources;
    sources = target;
    target = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'calc');
  }

  if (target instanceof Object) {
    /*
     * accept an object
     * this.calc({target: { source, handler, event } }, commonEventOptions);
     */
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_7__["default"])(target, function (_ref, itemTarget) {
      var itemSource = _ref.source,
          itemHandler = _ref.handler,
          itemEventOptions = _ref.event;
      var commonEventOptions = sources;
      var mergedEventOptions = {};

      if (commonEventOptions) {
        // extend event object by "global" event
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_4__["default"])(mergedEventOptions, commonEventOptions);
      }

      if (itemEventOptions) {
        // extend event object by "local" event ("event" key of an object)
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_4__["default"])(mergedEventOptions, itemEventOptions);
      }

      calc(object, itemTarget, itemSource, itemHandler, mergedEventOptions);
    });
    return object;
  }

  if (typeof target !== 'string') {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('calc:target_type', {
      target: target
    });
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var def = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  var _eventOptions = eventOptions,
      _eventOptions$setOnIn = _eventOptions.setOnInit,
      setOnInit = _eventOptions$setOnIn === void 0 ? true : _eventOptions$setOnIn,
      _eventOptions$debounc = _eventOptions.debounceCalcOnInit,
      debounceCalcOnInit = _eventOptions$debounc === void 0 ? false : _eventOptions$debounc,
      _eventOptions$debounc2 = _eventOptions.debounceCalc,
      debounceCalc = _eventOptions$debounc2 === void 0 ? true : _eventOptions$debounc2,
      _eventOptions$debounc3 = _eventOptions.debounceCalcDelay,
      debounceCalcDelay = _eventOptions$debounc3 === void 0 ? 0 : _eventOptions$debounc3,
      _eventOptions$isTarge = _eventOptions.isTargetPropertyHidden,
      isTargetPropertyHidden = _eventOptions$isTarge === void 0 ? false : _eventOptions$isTarge;

  var defaultHandler = function defaultHandler(value) {
    return value;
  };

  var handler = givenHandler || defaultHandler;
  var allSources = [];
  var syncCalcHandler = Object(_createcalchandler__WEBPACK_IMPORTED_MODULE_9__["default"])({
    object: object,
    eventOptions: eventOptions,
    allSources: allSources,
    target: target,
    def: def,
    handler: handler
  });
  var debouncedCalcHandler;
  var calcHandler;

  if (debounceCalcOnInit || debounceCalc) {
    debouncedCalcHandler = Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_5__["default"])(syncCalcHandler, debounceCalcDelay);
  }

  Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_10__["default"])(object, target, isTargetPropertyHidden);

  if (!(sources instanceof Array)) {
    sources = [sources]; // eslint-disable-line no-param-reassign
  }

  if (debounceCalc) {
    calcHandler = debouncedCalcHandler;
  } else {
    calcHandler = syncCalcHandler;
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_6__["default"])(sources, function (source) {
    if (typeof source === 'string') {
      // source object is current object
      Object(_addsource__WEBPACK_IMPORTED_MODULE_8__["default"])({
        calcHandler: calcHandler,
        allSources: allSources,
        sourceKey: source,
        sourceObject: object,
        eventOptions: eventOptions
      });
    } else {
      // source object is external object
      if (!source || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(source) !== 'object') {
        throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('calc:source_type', {
          source: source
        });
      }

      var sourceKey = source.key;
      var sourceObject = source.object;

      if (sourceKey instanceof Array) {
        // many keys are passed
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_6__["default"])(sourceKey, function (sourceKeyItem) {
          Object(_addsource__WEBPACK_IMPORTED_MODULE_8__["default"])({
            calcHandler: calcHandler,
            allSources: allSources,
            sourceKey: sourceKeyItem,
            sourceObject: sourceObject,
            eventOptions: eventOptions
          });
        });
      } else {
        // one key is passed
        Object(_addsource__WEBPACK_IMPORTED_MODULE_8__["default"])({
          calcHandler: calcHandler,
          allSources: allSources,
          sourceKey: sourceKey,
          sourceObject: sourceObject,
          eventOptions: eventOptions
        });
      }
    }
  });

  if (setOnInit) {
    if (debounceCalcOnInit) {
      debouncedCalcHandler();
    } else {
      syncCalcHandler();
    }
  }

  return object;
}

/***/ }),

/***/ "../src/chain.js":
/*!***********************!*\
  !*** ../src/chain.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chain; });
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _seemple_universalmethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seemple/_universalmethods */ "../src/seemple/_universalmethods.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ "../src/class.js");
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/apply */ "../src/_helpers/apply.js");




 // create a prototype of ChainClass
// store target object at "object" property

var prototype = {
  constructor: function constructor(object) {
    this.object = object;
  }
};
var methodNames = Object.keys(_seemple_universalmethods__WEBPACK_IMPORTED_MODULE_2__); // iterate over all universal methods

var _loop = function _loop(i) {
  var methodName = methodNames[i];
  var method = _seemple_universalmethods__WEBPACK_IMPORTED_MODULE_2__[methodName]; // create every chained method

  prototype[methodName] = function chainedMethod() {
    var args = [this.object];
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments, function (argument) {
      args.push(argument);
    });
    Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_4__["default"])(method, undefined, args); // returning this is important for chained calls

    return this;
  };
};

for (var i = 0; i < methodNames.length; i++) {
  _loop(i);
}

var ChainClass = Object(_class__WEBPACK_IMPORTED_MODULE_3__["default"])(prototype); // the function allows to chain static function calls on any object

function chain(object) {
  // check for type and throw an error if it is not an object and is not a function
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_0__["default"])(object, 'chain');
  return new ChainClass(object);
}

/***/ }),

/***/ "../src/class.js":
/*!***********************!*\
  !*** ../src/class.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Class; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/assign */ "../src/_helpers/assign.js");



 // static methods and properties of classes will be hidden under Symbol('staticNames')

var staticNamesProperty = typeof Symbol === 'function' ? Symbol('staticNames') : '__staticNames';
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function Class(prototype, staticProps) {
  var Constructor = hasOwnProperty.call(prototype, 'constructor') ? prototype.constructor : function EmptyConstructor() {}; // extends is kept for backward compatibility

  var Parent = prototype["extends"]; // inherit proto from class parent or empty object

  var proto = Object.create(Parent ? Parent.prototype : {});
  var parentStaticNames = Parent ? Parent[staticNamesProperty] : undefined;
  Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_3__["default"])(proto, prototype); // allow to pass symbols as prototype properties

  if (getOwnPropertySymbols) {
    var symbols = getOwnPropertySymbols(prototype);
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_1__["default"])(symbols, function (symbol) {
      proto[symbol] = prototype[symbol];
    });
  } // inherit staric properties of a parent


  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(parentStaticNames) === 'object') {
    var staticNames = Constructor[staticNamesProperty] || {};
    Constructor[staticNamesProperty] = staticNames;
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_2__["default"])(parentStaticNames, function (_, name) {
      Constructor[name] = Parent[name];
      staticNames[name] = true;
    }); // inherit static properties of a parent when their keys are symbols

    if (getOwnPropertySymbols) {
      var _symbols = getOwnPropertySymbols(parentStaticNames);

      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_1__["default"])(_symbols, function (symbol) {
        Constructor[symbol] = Parent[symbol];
        staticNames[symbol] = true;
      });
    }
  } // extend Constructor with passed static properties


  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(staticProps) === 'object') {
    var _staticNames = Constructor[staticNamesProperty] || {};

    Constructor[staticNamesProperty] = _staticNames;
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_2__["default"])(staticProps, function (value, key) {
      Constructor[key] = value;
      _staticNames[key] = true;
    }); // extend Constructor with passed static properties if their keys are symbols

    if (getOwnPropertySymbols) {
      var _symbols2 = getOwnPropertySymbols(staticProps);

      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_1__["default"])(_symbols2, function (symbol) {
        Constructor[symbol] = staticProps[symbol];
        _staticNames[symbol] = true;
      });
    }
  }

  Constructor.prototype = proto; // if new Class({}) is called return its instance

  if (this instanceof Class) {
    return new Constructor();
  }

  return Constructor;
}

/***/ }),

/***/ "../src/defaultbinders.js":
/*!********************************!*\
  !*** ../src/defaultbinders.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binders_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binders/input */ "../src/binders/input.js");
/* harmony import */ var _binders_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binders/textarea */ "../src/binders/textarea.js");
/* harmony import */ var _binders_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binders/select */ "../src/binders/select.js");
/* harmony import */ var _binders_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binders/progress */ "../src/binders/progress.js");
/* harmony import */ var _binders_output__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binders/output */ "../src/binders/output.js");




 // defaultBinders collection by default contains only one function-checker

/* harmony default export */ __webpack_exports__["default"] = ([function (node) {
  switch (node.tagName) {
    case 'INPUT':
      return Object(_binders_input__WEBPACK_IMPORTED_MODULE_0__["default"])(node.type);

    case 'TEXTAREA':
      return Object(_binders_textarea__WEBPACK_IMPORTED_MODULE_1__["default"])();

    case 'SELECT':
      return Object(_binders_select__WEBPACK_IMPORTED_MODULE_2__["default"])(node.multiple);

    case 'PROGRESS':
      return Object(_binders_progress__WEBPACK_IMPORTED_MODULE_3__["default"])();

    case 'OUTPUT':
      return Object(_binders_output__WEBPACK_IMPORTED_MODULE_4__["default"])();

    default:
      return null;
  }
}]);

/***/ }),

/***/ "../src/index.js":
/*!***********************!*\
  !*** ../src/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Seemple = __webpack_require__(/*! ./seemple */ "../src/seemple/index.js")["default"];

var SeempleArray = __webpack_require__(/*! ./array */ "../src/array/index.js")["default"];

var SeempleObject = __webpack_require__(/*! ./object */ "../src/object/index.js")["default"];

Seemple.Object = SeempleObject;
Seemple.Array = SeempleArray;
module.exports = Seemple;

/***/ }),

/***/ "../src/instantiate.js":
/*!*****************************!*\
  !*** ../src/instantiate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return instantiate; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/assign */ "../src/_helpers/assign.js");
/* harmony import */ var _mediate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mediate */ "../src/mediate.js");





 // the function is used when no update function is given

function defaultUpdateFunction(instance, data) {
  if (instance.isSeempleArray) {
    instance.recreate(data);
  } else if (instance.isSeempleObject) {
    instance.setData(data, {
      replaceData: true
    });
  } else {
    // for other objects just extend them with given data
    Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_4__["default"])(instance, data);
  }
} // returns mediator which controls assignments


function createInstantiateMediator(_ref) {
  var UsedClass = _ref.UsedClass,
      updateFunction = _ref.updateFunction;
  return function mediator(value, previousValue, key, object) {
    if (previousValue instanceof UsedClass) {
      updateFunction.call(object, previousValue, value, key);
      return previousValue;
    }

    return new UsedClass(value, object, key);
  };
} // creates an instance of given class as property value
// and updates an instance on new value assignment instead of actual assignment


function instantiate(object, givenKeys, UsedClass, givenUpdateFunction) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    givenUpdateFunction = UsedClass;
    UsedClass = givenKeys;
    givenKeys = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__["default"])(object, 'instantiate');
  }

  var isKeysArray = givenKeys instanceof Array; // allow to use key-class object

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenKeys) === 'object' && !isKeysArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_2__["default"])(givenKeys, function (objVal, objKey) {
      return instantiate(object, objKey, objVal, UsedClass);
    });
    return object;
  } // allow to use both single key and an array of keys


  var keys = isKeysArray ? givenKeys : [givenKeys];
  var updateFunction = givenUpdateFunction || defaultUpdateFunction;
  var mediator = createInstantiateMediator({
    UsedClass: UsedClass,
    updateFunction: updateFunction
  }); // iterate over all keys and define created mediator for all of them

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(keys, function (key) {
    return Object(_mediate__WEBPACK_IMPORTED_MODULE_5__["default"])(object, key, mediator);
  });
  return object;
}

/***/ }),

/***/ "../src/lookforbinder.js":
/*!*******************************!*\
  !*** ../src/lookforbinder.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lookForBinder; });
/* harmony import */ var _defaultbinders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultbinders */ "../src/defaultbinders.js");
 // tries to find a binder for given node

function lookForBinder(node) {
  for (var i = 0; i < _defaultbinders__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
    var binder = _defaultbinders__WEBPACK_IMPORTED_MODULE_0__["default"][i].call(node, node);

    if (binder) {
      return binder;
    }
  }

  return undefined;
}

/***/ }),

/***/ "../src/mediate.js":
/*!*************************!*\
  !*** ../src/mediate.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mediate; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_core/init */ "../src/_core/init.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set */ "../src/set.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");







 // creates property mediator

function createMediator(_ref) {
  var object = _ref.object,
      propDef = _ref.propDef,
      key = _ref.key,
      mediator = _ref.mediator;
  return function propMediator(value) {
    // args: value, previousValue, key, object itself
    return mediator.call(object, value, propDef.value, key, object);
  };
} // transforms property value on its changing


function mediate(object, givenKeys, mediator) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    mediator = givenKeys;
    givenKeys = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__["default"])(object, 'mediate');
  }

  var isKeysArray = givenKeys instanceof Array; // allow to use key-mediator object as another method variation

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenKeys) === 'object' && !isKeysArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_7__["default"])(givenKeys, function (objVal, objKey) {
      return mediate(object, objKey, objVal);
    });
    return object;
  }

  Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(object); // allow to use both single key and an array of keys

  var keys = isKeysArray ? givenKeys : [givenKeys];
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_4__["default"])(keys, function (key) {
    // if non-string is passed as a key
    if (typeof key !== 'string') {
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_6__["default"])('mediate:key_type', {
        key: key
      });
    }

    var propDef = Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_2__["default"])(object, key);
    var propMediator = propDef.mediator = createMediator({
      object: object,
      propDef: propDef,
      key: key,
      mediator: mediator
    }); // set new value

    Object(_set__WEBPACK_IMPORTED_MODULE_5__["default"])(object, key, propMediator(propDef.value), {
      fromMediator: true
    });
  });
  return object;
}

/***/ }),

/***/ "../src/object/_afterinit.js":
/*!***********************************!*\
  !*** ../src/object/_afterinit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return afterSeempleObjectInit; });
/* harmony import */ var _seemple_afterinit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../seemple/_afterinit */ "../src/seemple/_afterinit.js");
/* harmony import */ var _on_addlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");



 // called on _change:delegated
// tiggers asterisk events logic by triggering _asterisk:set

function changeDelegatedHandler() {
  var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = eventOptions.key;
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_3__["default"].get(this);

  if (key && key in def.keys) {
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(this, '_asterisk:set', eventOptions);
  }
} // called on _delete:delegated
// removes asterisk events logic by triggering _asterisk:remove


function deleteDelegatedHandler() {
  var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = eventOptions.key;
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_3__["default"].get(this);

  if (key && key in def.keys) {
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(this, '_asterisk:remove', eventOptions);
  }
} // called on change
// triggers set and modify if data keys are changed


function changeHandler() {
  var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = eventOptions.key,
      silent = eventOptions.silent;
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_3__["default"].get(this);

  if (key && key in def.keys && !silent) {
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'set', eventOptions);
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'modify', eventOptions);
  }
} // called on delete
// triggers remove and modify if data keys are removed


function deleteHandler() {
  var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = eventOptions.key,
      silent = eventOptions.silent;
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_3__["default"].get(this);

  if (key && key in def.keys) {
    delete def.keys[key];

    if (!silent) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'remove', eventOptions);
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'modify', eventOptions);
    }
  }
} // Seemple.Object initializer


function afterSeempleObjectInit(def) {
  // Seemple initializer
  _seemple_afterinit__WEBPACK_IMPORTED_MODULE_0__["default"].call(this); // create a set of data keys

  def.keys = {}; // trigger asterisk events

  Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_change:delegated', changeDelegatedHandler); // trigger asterisk events removal

  Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_delete:delegated', deleteDelegatedHandler); // fire "modify" and "set" events when data key is changed

  Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(this, 'change', changeHandler); // fire "modify" and "remove" events when data key is removed

  Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(this, 'delete', deleteHandler);
}

/***/ }),

/***/ "../src/object/_prototype.js":
/*!***********************************!*\
  !*** ../src/object/_prototype.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _afterinit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_afterinit */ "../src/object/_afterinit.js");
/* harmony import */ var _adddatakeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adddatakeys */ "../src/object/adddatakeys.js");
/* harmony import */ var _removedatakeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removedatakeys */ "../src/object/removedatakeys.js");
/* harmony import */ var _isdatakey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isdatakey */ "../src/object/isdatakey.js");
/* harmony import */ var _setdata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setdata */ "../src/object/setdata.js");
/* harmony import */ var _keyof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keyof */ "../src/object/keyof.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keys */ "../src/object/keys.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./values */ "../src/object/values.js");
/* harmony import */ var _entries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entries */ "../src/object/entries.js");
/* harmony import */ var _tojson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tojson */ "../src/object/tojson.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./each */ "../src/object/each.js");
/* harmony import */ var _iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iterator */ "../src/object/iterator.js");













var symbolIterator = typeof Symbol === 'function' ? Symbol.iterator : '@@iterator';
/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
  _afterInit: _afterinit__WEBPACK_IMPORTED_MODULE_1__["default"],
  setData: _setdata__WEBPACK_IMPORTED_MODULE_5__["default"],
  addDataKeys: _adddatakeys__WEBPACK_IMPORTED_MODULE_2__["default"],
  removeDataKeys: _removedatakeys__WEBPACK_IMPORTED_MODULE_3__["default"],
  isDataKey: _isdatakey__WEBPACK_IMPORTED_MODULE_4__["default"],
  keys: _keys__WEBPACK_IMPORTED_MODULE_7__["default"],
  values: _values__WEBPACK_IMPORTED_MODULE_8__["default"],
  entries: _entries__WEBPACK_IMPORTED_MODULE_9__["default"],
  keyOf: _keyof__WEBPACK_IMPORTED_MODULE_6__["default"],
  toJSON: _tojson__WEBPACK_IMPORTED_MODULE_10__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_11__["default"],
  isSeempleObject: true,
  jset: _setdata__WEBPACK_IMPORTED_MODULE_5__["default"]
}, symbolIterator, _iterator__WEBPACK_IMPORTED_MODULE_12__["default"]));

/***/ }),

/***/ "../src/object/adddatakeys.js":
/*!************************************!*\
  !*** ../src/object/adddatakeys.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDataKeys; });
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");




 // adds keys to a list of data keys

function addDataKeys(givenKeys) {
  var _this = this;

  var _initSeemple = Object(_core_init__WEBPACK_IMPORTED_MODULE_0__["default"])(this),
      keys = _initSeemple.keys;

  var newKeys; // accept an array keys or a list of args

  if (givenKeys instanceof Array) {
    newKeys = givenKeys;
  } else {
    newKeys = arguments;
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(newKeys, function (key) {
    if (typeof key !== 'string') {
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__["default"])('adddatakeys:key_type', {
        key: key
      });
    } // if key is not in a list of keys


    if (!(key in keys)) {
      // define descriptors for this property
      var _defineProp = Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_1__["default"])(_this, key),
          value = _defineProp.value;

      var eventOptions = {
        key: key,
        value: value
      }; // add a key to the list of keys

      keys[key] = true; // trigger events which say that data is changed

      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, 'set', eventOptions);
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, 'modify', eventOptions);
    }
  });
  return this;
}

/***/ }),

/***/ "../src/object/each.js":
/*!*****************************!*\
  !*** ../src/object/each.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return each; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");

 // iterates over data keys and calls callback on every iteration
// @IE for..of is preferable and the method will be removed in one of major versions

function each(callback, thisArg) {
  var _this = this;

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(this);
  var ctx = typeof thisArg !== 'undefined' ? thisArg : this;
  /* istanbul ignore if */

  if (!def) {
    return this;
  }

  Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_1__["default"])(def.keys, function (_, key) {
    callback.call(ctx, _this[key], key, _this);
  });
  return this;
}

/***/ }),

/***/ "../src/object/entries.js":
/*!********************************!*\
  !*** ../src/object/entries.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
 // returns an array which contains things like [key, value]

function keys() {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(this);
  /* istanbul ignore if */

  if (!def) {
    return [];
  }

  var keysArr = Object.keys(def.keys);
  var length = keysArr.length;
  var result = new Array(length);

  for (var i = 0; i < keysArr.length; i++) {
    var key = keysArr[i];
    result[i] = [key, this[key]];
  }

  return result;
}

/***/ }),

/***/ "../src/object/index.js":
/*!******************************!*\
  !*** ../src/object/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ "../src/class.js");
/* harmony import */ var _seemple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../seemple */ "../src/seemple/index.js");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_prototype */ "../src/object/_prototype.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");





_prototype__WEBPACK_IMPORTED_MODULE_2__["default"]["extends"] = _seemple__WEBPACK_IMPORTED_MODULE_1__["default"];

_prototype__WEBPACK_IMPORTED_MODULE_2__["default"].constructor = function SeempleObject(data) {
  if (!(this instanceof SeempleObject)) {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_3__["default"])('common:call_class');
  }

  Object(_core_init__WEBPACK_IMPORTED_MODULE_4__["default"])(this); // return is used to make possible to chain super() calls

  return typeof data !== 'undefined' ? this.setData(data) : this;
};

var SeempleObject = Object(_class__WEBPACK_IMPORTED_MODULE_0__["default"])(_prototype__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (SeempleObject);

/***/ }),

/***/ "../src/object/isdatakey.js":
/*!**********************************!*\
  !*** ../src/object/isdatakey.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDataKey; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
 // checks is a key present in data keys list

function isDataKey(key) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(this);
  /* istanbul ignore if */

  if (!def) {
    return false;
  }

  return key in def.keys;
}

/***/ }),

/***/ "../src/object/iterator.js":
/*!*********************************!*\
  !*** ../src/object/iterator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return seempleObjectIterator; });
// Symbol.iterator of Seemple.Object instances
function seempleObjectIterator() {
  var _this = this;

  var keys = this.keys();
  var i = 0;
  return {
    next: function next() {
      if (i > keys.length - 1) {
        return {
          done: true
        };
      }

      return {
        done: false,
        value: _this[keys[i++]] // eslint-disable-line no-plusplus

      };
    }
  };
}

/***/ }),

/***/ "../src/object/keyof.js":
/*!******************************!*\
  !*** ../src/object/keyof.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyOf; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
 // iterates over data keys looking for a property with given value
// and returns a key of found property

function keyOf(value) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(this);
  /* istanbul ignore if */

  if (!def) {
    return null;
  }

  var keysArray = Object.keys(def.keys);

  for (var i = 0; i < keysArray.length; i++) {
    var key = keysArray[i];

    if (this[key] === value) {
      return key;
    }
  }

  return null;
}

/***/ }),

/***/ "../src/object/keys.js":
/*!*****************************!*\
  !*** ../src/object/keys.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
 // returns an array which contains all data keys

function keys() {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(this);
  /* istanbul ignore if */

  if (!def) {
    return [];
  }

  return Object.keys(def.keys);
}

/***/ }),

/***/ "../src/object/removedatakeys.js":
/*!***************************************!*\
  !*** ../src/object/removedatakeys.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeDataKeys; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");



 // removes given keys from a list of data keys

function removeDataKeys(givenKeys) {
  var _this = this;

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(this);
  /* istanbul ignore if */

  if (!def) {
    return this;
  }

  var keys = def.keys;
  var removedKeys; // accept an array keys or a list of args

  if (givenKeys instanceof Array) {
    removedKeys = givenKeys;
  } else {
    removedKeys = arguments;
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(removedKeys, function (key) {
    if (typeof key !== 'string') {
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_2__["default"])('removedatakeys:key_type', {
        key: key
      });
    }

    if (key in keys) {
      var eventOptions = {
        key: key,
        value: _this[key]
      };
      delete keys[key]; // fire "modify" and "remove" events

      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(_this, 'modify', eventOptions);
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"])(_this, 'remove', eventOptions);
    }
  });
  return this;
}

/***/ }),

/***/ "../src/object/setdata.js":
/*!********************************!*\
  !*** ../src/object/setdata.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../set */ "../src/set.js");





 // returns an array of keys listed at inObject but not listed at fromObject

function getNotListedKeys(inObject, fromObject) {
  var result = [];
  Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_4__["default"])(inObject, function (_, key) {
    if (!(key in fromObject)) {
      result.push(key);
    }
  });
  return result;
} // changes property value and adds given key to a list of data keys


function setData(key, value, eventOptions) {
  var _this = this;

  // if no key or falsy key is given
  if (!key) {
    return this;
  }

  var _initSeemple = Object(_core_init__WEBPACK_IMPORTED_MODULE_2__["default"])(this),
      keys = _initSeemple.keys; // allow to pass key-value object


  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(key) === 'object') {
    eventOptions = value || {}; // eslint-disable-line no-param-reassign

    var _eventOptions = eventOptions,
        _replaceData = _eventOptions.replaceData; // do not call setData recursivally for better performance

    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_4__["default"])(key, function (objVal, objKey) {
      // remove data keys not listed at key-value object
      if (_replaceData) {
        var notListedKeys = getNotListedKeys(keys, key);

        if (notListedKeys.length) {
          _this.removeDataKeys(notListedKeys);
        }
      } // define descriptors for given property


      Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, objKey); // add a key to a list of keys

      keys[objKey] = 1; // do other things with set method

      Object(_set__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, objKey, objVal, eventOptions);
    });
    return this;
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var _eventOptions2 = eventOptions,
      replaceData = _eventOptions2.replaceData; // remove all data keys except given key

  if (replaceData) {
    var notListedKeys = getNotListedKeys(keys, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, true));

    if (notListedKeys.length) {
      this.removeDataKeys(notListedKeys);
    }
  } // define descriptors for given property


  Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_3__["default"])(this, key); // add a key to a list of keys

  keys[key] = 1; // do other things with set method

  return Object(_set__WEBPACK_IMPORTED_MODULE_5__["default"])(this, key, value, eventOptions);
}

/***/ }),

/***/ "../src/object/tojson.js":
/*!*******************************!*\
  !*** ../src/object/tojson.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toJSON; });
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");

 // converts Seemple.Object instance to ordinary object

function toJSON() {
  var _this = this;

  var recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var _initSeemple = Object(_core_init__WEBPACK_IMPORTED_MODULE_0__["default"])(this),
      keys = _initSeemple.keys;

  var result = {};
  Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_1__["default"])(keys, function (_, key) {
    var value = _this[key]; // when recursive is true and when value has toJSON method then call it recusively

    if (recursive && value && typeof value.toJSON === 'function') {
      result[key] = value.toJSON(true);
    } else {
      result[key] = value;
    }
  });
  return result;
}

/***/ }),

/***/ "../src/object/values.js":
/*!*******************************!*\
  !*** ../src/object/values.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
 // returns an array which contains all data values

function keys() {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(this);
  /* istanbul ignore if */

  if (!def) {
    return [];
  }

  var keysArr = Object.keys(def.keys);
  var length = keysArr.length;
  var result = new Array(length);

  for (var i = 0; i < keysArr.length; i++) {
    result[i] = this[keysArr[i]];
  }

  return result;
}

/***/ }),

/***/ "../src/off/_removedomlistener.js":
/*!****************************************!*\
  !*** ../src/off/_removedomlistener.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeDomListener; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _removelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_dom */ "../src/_dom/index.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");



 // removes dom listener from nodes bound to given key

function removeDomListener(object, key, eventName, selector, callback, context, info) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object);

  if (!def) {
    return object;
  }

  var props = def.props;
  var propDef = props[key];

  if (!propDef) {
    return object;
  }

  var bindings = propDef.bindings;

  if (bindings) {
    // collect bound nodes and remove DOM event listener
    var nodes = Array(bindings.length);
    var eventNamespace = def.id + key;
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(bindings, function (binding, index) {
      nodes[index] = binding.node;
    });
    _dom__WEBPACK_IMPORTED_MODULE_2__["default"].$(nodes).off("".concat(eventName, ".").concat(eventNamespace), selector, callback);
  } // remove bind and unbind listeners from given key


  Object(_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, "bind:".concat(key), callback, context, info);
  Object(_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, "unbind:".concat(key), callback, context, info);
  return object;
}

/***/ }),

/***/ "../src/off/_removelistener.js":
/*!*************************************!*\
  !*** ../src/off/_removelistener.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeListener; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _on_domeventregexp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../on/_domeventregexp */ "../src/on/_domeventregexp.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");





 // removes simple event listener from an object

function removeListener(object, name, callback, context, info) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(object); // if no definition do nothing

  if (!def) {
    return false;
  }

  var allEvents = def.events;
  var events = allEvents[name];
  var retain = [];
  var noTrigger = name ? name[0] === '_' : false;
  var domEventExecResult = _on_domeventregexp__WEBPACK_IMPORTED_MODULE_3__["default"].exec(name);

  if (domEventExecResult) {
    var _domEventExecResult = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(domEventExecResult, 4),
        eventName = _domEventExecResult[1],
        _domEventExecResult$ = _domEventExecResult[2],
        key = _domEventExecResult$ === void 0 ? 'sandbox' : _domEventExecResult$,
        selector = _domEventExecResult[3]; // fixing circular reference issue


    var removeDomListener = __webpack_require__(/*! ./_removedomlistener */ "../src/off/_removedomlistener.js")["default"];

    removeDomListener(object, key, eventName, selector, callback, context, info);
    return true;
  } // if all events need to be removed


  if (typeof name === 'undefined') {
    if (!noTrigger) {
      Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_5__["default"])(allEvents, function (allEventsItem, allEventsName) {
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_4__["default"])(allEventsItem, function (event) {
          var removeEventData = {
            allEventsName: allEventsName,
            callback: event.callback,
            context: event.context
          };
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "removeevent:".concat(name), removeEventData);
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'removeevent', removeEventData);
        });
      });
    } // restore default value of "events"


    def.events = {};
  } else if (events) {
    // if events with given name are found
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_4__["default"])(events, function (event) {
      var argCallback = callback && callback._callback || callback;
      var eventCallback = event.callback._callback || event.callback;

      if (argCallback && argCallback !== eventCallback || context && context !== event.context) {
        // keep event
        retain.push(event);
      } else {
        var removeEventData = {
          name: name,
          callback: event.callback,
          context: event.context
        };

        if (!noTrigger) {
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "removeevent:".concat(name), removeEventData);
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'removeevent', removeEventData);
        }
      }
    });

    if (retain.length) {
      allEvents[name] = retain;
    } else {
      delete def.events[name];
    }
  }

  return false;
}

/***/ }),

/***/ "../src/off/_removetreelistener.js":
/*!*****************************************!*\
  !*** ../src/off/_removetreelistener.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeTreeListener; });
/* harmony import */ var _undelegatelistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_undelegatelistener */ "../src/off/_undelegatelistener.js");
 // removes tree listener from all object tree of fiven path
// TODO: Pass context to removeTreeListener

function removeTreeListener(object, deepPath, handler) {
  if (typeof deepPath === 'string') {
    deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
  } // iterate over keys of the path and undelegate given handler (can be undefined)


  for (var i = 0; i < deepPath.length; i++) {
    // TODO: Array.prototype.slice is slow
    var listenedPath = deepPath.slice(0, i);
    Object(_undelegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(object, listenedPath, "_change:tree:".concat(deepPath[i]), handler);
  }
}

/***/ }),

/***/ "../src/off/_undelegatelistener.js":
/*!*****************************************!*\
  !*** ../src/off/_undelegatelistener.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return undelegateListener; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _removelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");



 // the function removes internally used events such as _asterisk:add

function detatchDelegatedLogic(_ref) {
  var delegatedEventName = _ref.delegatedEventName,
      pathStr = _ref.pathStr,
      allEvents = _ref.allEvents;
  var retain = [];
  var events = allEvents[delegatedEventName];
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(events, function (event) {
    // pathStr is assigned to info in delegateListener
    if (event.info.pathStr !== pathStr) {
      retain.push(event);
    }
  });

  if (retain.length) {
    allEvents[delegatedEventName] = retain;
  } else {
    delete allEvents[delegatedEventName];
  }
} // removes delegated event listener from an object by given path


function undelegateListener(object, givenPath, name, callback, context) {
  var info = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(object); // if no definition do nothing

  if (!def) {
    return;
  }

  var allEvents = def.events;
  var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

  if (!path || !path.length) {
    // if no path then remove listener
    Object(_removelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(object, name, callback, context, info);
  } else {
    // else do all magic
    var key = path[0];
    var pathStr;

    if (path.length > 1) {
      path = path.slice(1);
      pathStr = path.join('.');
    } else {
      path = [];
      pathStr = path[0] || '';
    }

    if (key === '*') {
      // remove asterisk events
      if (object.isSeempleArray) {
        var delegatedAddEvtName = '_asterisk:add';

        if (allEvents[delegatedAddEvtName]) {
          detatchDelegatedLogic({
            delegatedEventName: delegatedAddEvtName,
            pathStr: pathStr,
            allEvents: allEvents
          });
        }

        var delegatedRemoveEvtName = '_asterisk:remove';

        if (allEvents[delegatedRemoveEvtName]) {
          detatchDelegatedLogic({
            delegatedEventName: delegatedRemoveEvtName,
            pathStr: pathStr,
            allEvents: allEvents
          });
        } // undelegate asterisk events for existing items


        if (object.length) {
          Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(object, function (item) {
            if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
              undelegateListener(item, path, name, callback, context, info);
            }
          });
        }
      } else if (object.isSeempleObject) {
        var delegatedSetEvtName = '_asterisk:set';

        if (allEvents[delegatedSetEvtName]) {
          detatchDelegatedLogic({
            delegatedEventName: delegatedSetEvtName,
            pathStr: pathStr,
            allEvents: allEvents
          });
        }

        var _delegatedRemoveEvtName = '_asterisk:remove';

        if (allEvents[_delegatedRemoveEvtName]) {
          detatchDelegatedLogic({
            delegatedEventName: _delegatedRemoveEvtName,
            pathStr: pathStr,
            allEvents: allEvents
          });
        }

        object.each(function (item) {
          if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
            undelegateListener(item, path, name, callback, context, info);
          }
        });
      }
    } else {
      // remove non-asterisk delegated events
      var delegatedChangeEvtName = "_change:delegated:".concat(key);

      if (allEvents[delegatedChangeEvtName]) {
        detatchDelegatedLogic({
          delegatedEventName: delegatedChangeEvtName,
          pathStr: pathStr,
          allEvents: allEvents
        });
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(object[key]) === 'object') {
        undelegateListener(object[key], path, name, callback, context, info);
      }
    }
  }
}

/***/ }),

/***/ "../src/off/index.js":
/*!***************************!*\
  !*** ../src/off/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return off; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _on_splitbyspaceregexp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../on/_splitbyspaceregexp */ "../src/on/_splitbyspaceregexp.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _removelistener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _undelegatelistener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_dom */ "../src/_dom/index.js");









 // removes event listener

function off(object, givenNames, callback, context) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    context = callback;
    callback = givenNames;
    givenNames = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__["default"])(object, 'off');
  }

  var isNamesVarArray = givenNames instanceof Array;
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_6__["default"].get(object); // allow to pass name-handler object
  // TODO: Name-handler object passed to off method is non-documented feature

  if (givenNames && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(givenNames) === 'object' && !isNamesVarArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_4__["default"])(givenNames, function (namesObjCallback, namesObjName) {
      return off(object, namesObjName, namesObjCallback, callback);
    });
    return object;
  }

  if (!givenNames && !callback && !context) {
    def.events = {};
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_4__["default"])(def.props, function (_ref, propName) {
      var bindings = _ref.bindings;

      if (bindings) {
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(bindings, function (_ref2) {
          var node = _ref2.node;
          var eventNamespace = def.id + propName;
          _dom__WEBPACK_IMPORTED_MODULE_9__["default"].$(node).off(".".concat(eventNamespace));
        });
      }
    });
    return object;
  } // TODO: Array of names passed to off method is non-documented feature
  // split by spaces


  var names = isNamesVarArray ? givenNames : givenNames.split(_on_splitbyspaceregexp__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(names, function (name) {
    var delegatedEventParts = name.split('@');

    if (delegatedEventParts.length > 1) {
      var _delegatedEventParts = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(delegatedEventParts, 2),
          path = _delegatedEventParts[0],
          delegatedName = _delegatedEventParts[1];

      Object(_undelegatelistener__WEBPACK_IMPORTED_MODULE_8__["default"])(object, path, delegatedName, callback, context);
    } else {
      Object(_removelistener__WEBPACK_IMPORTED_MODULE_7__["default"])(object, name, callback, context);
    }
  });
  return object;
}

/***/ }),

/***/ "../src/on/_adddomlistener.js":
/*!************************************!*\
  !*** ../src/on/_adddomlistener.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDomListener; });
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _addlistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_dom */ "../src/_dom/index.js");
/* harmony import */ var _createdomeventhandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_createdomeventhandler */ "../src/on/_createdomeventhandler.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");





 // returns an object with event handlers used at addDomListener

function createBindingHandlers(_ref) {
  var fullEventName = _ref.fullEventName,
      domEventHandler = _ref.domEventHandler,
      selector = _ref.selector;
  return {
    bindHandler: function bindHandler() {
      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var node = evt.node;

      if (node) {
        _dom__WEBPACK_IMPORTED_MODULE_3__["default"].$(node).on(fullEventName, selector, domEventHandler);
      }
    },
    unbindHandler: function unbindHandler() {
      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var node = evt.node;

      if (node) {
        _dom__WEBPACK_IMPORTED_MODULE_3__["default"].$(node).off(fullEventName, selector, domEventHandler);
      }
    }
  };
} // adds DOM event listener for nodes bound to given property


function addDomListener(object, key, eventName, selector, callback, context, info) {
  var def = Object(_core_init__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
  var propDef = Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key);
  var domEventHandler = Object(_createdomeventhandler__WEBPACK_IMPORTED_MODULE_4__["default"])({
    key: key,
    object: object,
    callback: callback,
    context: context || object
  }); // making possible to remove this event listener

  domEventHandler._callback = callback;
  var eventNamespace = def.id + key;
  var fullEventName = "".concat(eventName, ".").concat(eventNamespace);

  var _createBindingHandler = createBindingHandlers({
    fullEventName: fullEventName,
    domEventHandler: domEventHandler,
    selector: selector
  }),
      bindHandler = _createBindingHandler.bindHandler,
      unbindHandler = _createBindingHandler.unbindHandler;

  var addBindListenerResult = Object(_addlistener__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "bind:".concat(key), bindHandler, context, info);
  var addUnbindListenerResult = Object(_addlistener__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "unbind:".concat(key), unbindHandler, context, info); // if events are added successfully then run bindHandler for every node immediately
  // TODO: Describe why do we need addBindListenerResult and addUnbindListenerResult

  if (addBindListenerResult && addUnbindListenerResult) {
    var bindings = propDef.bindings;

    if (bindings) {
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(bindings, function (_ref2) {
        var node = _ref2.node;
        return bindHandler({
          node: node
        });
      });
    }
  }

  return object;
}

/***/ }),

/***/ "../src/on/_addlistener.js":
/*!*********************************!*\
  !*** ../src/on/_addlistener.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addListener; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _domeventregexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_domeventregexp */ "../src/on/_domeventregexp.js");




 // property modifier event regexp

var propModEventReg = /^_change:deps:|^_change:bindings:|^_change:delegated:|^_change:common:|^_change:tree:|^change:|^beforechange:/; // adds simple event listener
// used as core of event engine

function addListener(object, name, callback, context) {
  var info = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var _initSeemple = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      allEvents = _initSeemple.events;

  var ctx = context || object;
  var events = allEvents[name];
  var event = {
    callback: callback,
    context: context,
    ctx: ctx,
    name: name,
    info: info
  }; // skipChecks is used by internal methods for better performance

  var _info$skipChecks = info.skipChecks,
      skipChecks = _info$skipChecks === void 0 ? false : _info$skipChecks;

  if (!skipChecks) {
    var domEventExecResult = _domeventregexp__WEBPACK_IMPORTED_MODULE_4__["default"].exec(name);

    if (domEventExecResult) {
      var _domEventExecResult = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(domEventExecResult, 4),
          eventName = _domEventExecResult[1],
          _domEventExecResult$ = _domEventExecResult[2],
          key = _domEventExecResult$ === void 0 ? 'sandbox' : _domEventExecResult$,
          selector = _domEventExecResult[3]; // fixing circular reference issue


      var addDomListener = __webpack_require__(/*! ./_adddomlistener */ "../src/on/_adddomlistener.js")["default"];

      addDomListener(object, key, eventName, selector, callback, context, info);
      return true;
    }
  } // if there are events with the same name


  if (events) {
    if (!skipChecks) {
      // if there are events with the same data, return false
      for (var i = 0; i < events.length; i++) {
        var existingEvent = events[i];
        var argCallback = callback && callback._callback || callback;
        var eventCallback = existingEvent.callback._callback || existingEvent.callback;

        if (argCallback === eventCallback && existingEvent.context === context) {
          return false;
        }
      }
    } // if the event isn't found add it to the event list


    events.push(event);
  } else {
    // if there are no events with the same name, create an array with only  one event
    allEvents[name] = [event];
  }

  if (propModEventReg.test(name)) {
    // define needed accessors for KEY
    Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_3__["default"])(object, name.replace(propModEventReg, ''));
  } // names prefixed by underscore mean "private" events


  if (!skipChecks && name[0] !== '_') {
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "addevent:".concat(name), event);
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'addevent', event);
  } // if event is added successfully return true


  return true;
}

/***/ }),

/***/ "../src/on/_addtreelistener.js":
/*!*************************************!*\
  !*** ../src/on/_addtreelistener.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addTreeListener; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delegatelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_delegatelistener */ "../src/on/_delegatelistener/index.js");
/* harmony import */ var _off_removetreelistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../off/_removetreelistener */ "../src/off/_removetreelistener.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // creates tree listener

function createTreeListener(_ref) {
  var handler = _ref.handler,
      restPath = _ref.restPath;

  var newHandler = function treeListener(changeEvent) {
    var extendedChangeEvent = _objectSpread({
      restPath: restPath
    }, changeEvent);

    var previousValue = changeEvent.previousValue,
        value = changeEvent.value; // removes listener for all branches of the path on old object

    if (previousValue && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(previousValue) === 'object') {
      Object(_off_removetreelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(previousValue, restPath, handler);
    } // adds listener for all branches of "restPath" path on newly assigned object


    if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
      addTreeListener(value, restPath, handler);
    } // call original handler


    handler.call(this, extendedChangeEvent);
  };

  newHandler._callback = handler;
  return newHandler;
} // listens changes for all branches of given path
// TODO: Pass context to addTreeListener
// one of the most hard functions to understand


function addTreeListener(object, deepPath, handler) {
  if (typeof deepPath === 'string') {
    deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
  } // iterate over all keys and delegate listener for all objects of given branch


  for (var i = 0; i < deepPath.length; i++) {
    // TODO: Array.prototype.slice method is slow
    var listenPath = deepPath.slice(0, i);
    var restPath = deepPath.slice(i + 1);
    Object(_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(object, listenPath, "_change:tree:".concat(deepPath[i]), createTreeListener({
      handler: handler,
      restPath: restPath
    }));
  }
}

/***/ }),

/***/ "../src/on/_createdomeventhandler.js":
/*!*******************************************!*\
  !*** ../src/on/_createdomeventhandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDomEventHandler; });
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers/apply */ "../src/_helpers/apply.js");
 // returns DOM event handler

function createDomEventHandler(_ref) {
  var key = _ref.key,
      object = _ref.object,
      callback = _ref.callback,
      context = _ref.context;
  return function domEventHandler(domEvent) {
    var originalEvent = domEvent.originalEvent || domEvent; // seempleTriggerArgs are created when DOM event is triggered by trigger method

    var triggerArgs = originalEvent.seempleTriggerArgs;
    var which = domEvent.which,
        target = domEvent.target,
        ctrlKey = domEvent.ctrlKey,
        altKey = domEvent.altKey;

    if (triggerArgs) {
      // if args are passed to trigger method then pass them to an event handler
      Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_0__["default"])(callback, context, triggerArgs);
    } else {
      // use the following object as an arg for event handler
      callback.call(context, {
        self: object,
        node: this,
        preventDefault: function preventDefault() {
          return domEvent.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          return domEvent.stopPropagation();
        },
        key: key,
        domEvent: domEvent,
        originalEvent: originalEvent,
        which: which,
        target: target,
        ctrlKey: ctrlKey,
        altKey: altKey
      });
    }
  };
}

/***/ }),

/***/ "../src/on/_delegatelistener/arrayaddhandler.js":
/*!******************************************************!*\
  !*** ../src/on/_delegatelistener/arrayaddhandler.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrayAddHandler; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/foreach */ "../src/_helpers/foreach.js");


 // the function is called when something is added to an array
// it delegates asterisk listener for newly added items

function arrayAddHandler(_ref) {
  var added = _ref.added;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"].latestEvent.info.delegatedData,
      path = _ref2.path,
      name = _ref2.name,
      callback = _ref2.callback,
      context = _ref2.context,
      info = _ref2.info;

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(added, function (item) {
    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      var delegateListener = __webpack_require__(/*! ./ */ "../src/on/_delegatelistener/index.js")["default"]; // fixing circular ref


      delegateListener(item, path, name, callback, context, info);
    }
  });
}

/***/ }),

/***/ "../src/on/_delegatelistener/arrayremovehandler.js":
/*!*********************************************************!*\
  !*** ../src/on/_delegatelistener/arrayremovehandler.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrayRemoveHandler; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/foreach */ "../src/_helpers/foreach.js");



 // the function is called when something is removed from an array
// it undelegates asterisk listener from removed items

function arrayRemoveHandler(_ref) {
  var removed = _ref.removed;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"].latestEvent.info.delegatedData,
      path = _ref2.path,
      name = _ref2.name,
      callback = _ref2.callback,
      context = _ref2.context,
      info = _ref2.info;

  if (removed && removed.length) {
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(removed, function (item) {
      if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
        Object(_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(item, path, name, callback, context, info);
      }
    });
  }
}

/***/ }),

/***/ "../src/on/_delegatelistener/changehandler.js":
/*!****************************************************!*\
  !*** ../src/on/_delegatelistener/changehandler.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeHandler; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");


 // the function is called when some part of a path is changed
// it delegates event listener for new branch of an object and undelegates it for old one
// used for non-asterisk events

function changeHandler(_ref) {
  var previousValue = _ref.previousValue,
      value = _ref.value;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"].latestEvent.info.delegatedData,
      path = _ref2.path,
      name = _ref2.name,
      callback = _ref2.callback,
      context = _ref2.context,
      info = _ref2.info;

  if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
    var delegateListener = __webpack_require__(/*! ./ */ "../src/on/_delegatelistener/index.js")["default"]; // fixing circular ref


    delegateListener(value, path, name, callback, context, info);
  }

  if (previousValue && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(previousValue) === 'object') {
    Object(_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(previousValue, path, name, callback, context, info);
  }
}

/***/ }),

/***/ "../src/on/_delegatelistener/index.js":
/*!********************************************!*\
  !*** ../src/on/_delegatelistener/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return delegateListener; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _arrayaddhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrayaddhandler */ "../src/on/_delegatelistener/arrayaddhandler.js");
/* harmony import */ var _objectsethandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objectsethandler */ "../src/on/_delegatelistener/objectsethandler.js");
/* harmony import */ var _arrayremovehandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrayremovehandler */ "../src/on/_delegatelistener/arrayremovehandler.js");
/* harmony import */ var _objectremovehandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objectremovehandler */ "../src/on/_delegatelistener/objectremovehandler.js");
/* harmony import */ var _changehandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./changehandler */ "../src/on/_delegatelistener/changehandler.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_helpers/forown */ "../src/_helpers/forown.js");








 // adds delegated event listener to an object by given path

function delegateListener(object, givenPath, name, callback, context) {
  var info = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  // if typeof path is string and path is not empty string then split it
  var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

  if (!path || !path.length) {
    // if no path then add simple listener
    Object(_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, name, callback, context, info);
  } else {
    // else do all magic
    var key = path[0];
    var pathStr; // needed for undelegation

    if (path.length > 1) {
      path = path.slice(1);
      pathStr = path.join('.');
    } else {
      path = [];
      pathStr = path[0] || '';
    }

    var delegatedData = {
      path: path,
      name: name,
      callback: callback,
      context: context,
      info: info,
      object: object
    };

    if (key === '*') {
      // handling asterisk events
      // { skipChecks: true } allows to use same event name and event handler few times
      if (object.isSeempleArray) {
        // the event is triggered when something is added to an array
        Object(_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, '_asterisk:add', _arrayaddhandler__WEBPACK_IMPORTED_MODULE_3__["default"], null, {
          delegatedData: delegatedData,
          pathStr: pathStr,
          skipChecks: true
        }); // the event is triggered when something is removed from an array

        Object(_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, '_asterisk:remove', _arrayremovehandler__WEBPACK_IMPORTED_MODULE_5__["default"], null, {
          delegatedData: delegatedData,
          pathStr: pathStr,
          skipChecks: true
        }); // call handler manually to delegate listener for currently existing data props

        Object(_arrayaddhandler__WEBPACK_IMPORTED_MODULE_3__["default"])({
          added: object
        }, delegatedData);
      } else if (object.isSeempleObject) {
        var def = _core_defs__WEBPACK_IMPORTED_MODULE_2__["default"].get(object); // the event is triggered when data prop is changed

        Object(_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, '_asterisk:set', _objectsethandler__WEBPACK_IMPORTED_MODULE_4__["default"], null, {
          delegatedData: delegatedData,
          pathStr: pathStr,
          skipChecks: true
        }); // the event is triggered when data prop is removed

        Object(_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, '_asterisk:remove', _objectremovehandler__WEBPACK_IMPORTED_MODULE_6__["default"], null, {
          delegatedData: delegatedData,
          pathStr: pathStr,
          skipChecks: true
        }); // delegate listener for currently existing data props

        Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_8__["default"])(def.keys, function (_, defKey) {
          var item = object[defKey];

          if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
            delegateListener(item, path, name, callback, context, info);
          }
        });
      }
    } else {
      // handling non-asterisk delegated event
      // the event is triggered by "set"
      Object(_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, "_change:delegated:".concat(key), _changehandler__WEBPACK_IMPORTED_MODULE_7__["default"], null, {
        delegatedData: delegatedData,
        pathStr: pathStr
      }); // call handler manually

      Object(_changehandler__WEBPACK_IMPORTED_MODULE_7__["default"])({
        value: object[key]
      }, delegatedData);
    }
  }
}

/***/ }),

/***/ "../src/on/_delegatelistener/objectremovehandler.js":
/*!**********************************************************!*\
  !*** ../src/on/_delegatelistener/objectremovehandler.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectRemoveHandler; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");


 // the function is called when data property is removed from Seemple.Object
// it undelegates asterisk listener from removed object

function objectRemoveHandler(_ref) {
  var item = _ref.value;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"].latestEvent.info.delegatedData,
      path = _ref2.path,
      name = _ref2.name,
      callback = _ref2.callback,
      context = _ref2.context,
      info = _ref2.info;

  if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
    Object(_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(item, path, name, callback, context, info);
  }
}

/***/ }),

/***/ "../src/on/_delegatelistener/objectsethandler.js":
/*!*******************************************************!*\
  !*** ../src/on/_delegatelistener/objectsethandler.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectSetHandler; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_core/defs */ "../src/_core/defs.js");


 // the function is called when data property is changed in Seemple.Object
// it delegates asterisk listener for new value

function objectSetHandler(_ref) {
  var key = _ref.key;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _trigger_triggerone__WEBPACK_IMPORTED_MODULE_1__["default"].latestEvent.info.delegatedData,
      path = _ref2.path,
      name = _ref2.name,
      callback = _ref2.callback,
      context = _ref2.context,
      info = _ref2.info,
      object = _ref2.object;

  if (key) {
    var item = object[key];

    if (item && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(item) === 'object') {
      var def = _core_defs__WEBPACK_IMPORTED_MODULE_2__["default"].get(object);

      if (key in def.keys) {
        var delegateListener = __webpack_require__(/*! ./ */ "../src/on/_delegatelistener/index.js")["default"]; // fixing circular ref


        delegateListener(item, path, name, callback, context, info);
      }
    }
  }
}

/***/ }),

/***/ "../src/on/_domeventregexp.js":
/*!************************************!*\
  !*** ../src/on/_domeventregexp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// the regexp allows to parse things like "click::x(.y)"
// it's shared between few modules
/* harmony default export */ __webpack_exports__["default"] = (/([^::]+)::([^()]+)?(?:\((.*)\))?/);

/***/ }),

/***/ "../src/on/_splitbyspaceregexp.js":
/*!****************************************!*\
  !*** ../src/on/_splitbyspaceregexp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// allows to split by spaces not inclusing ones inside of brackers
/* harmony default export */ __webpack_exports__["default"] = (/\s+(?![^(]*\))/g);

/***/ }),

/***/ "../src/on/index.js":
/*!**************************!*\
  !*** ../src/on/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return on; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _splitbyspaceregexp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_splitbyspaceregexp */ "../src/on/_splitbyspaceregexp.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _addlistener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _delegatelistener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_delegatelistener */ "../src/on/_delegatelistener/index.js");








 // adds event listener

function on(object, givenNames, callback, triggerOnInit, context) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    context = triggerOnInit;
    triggerOnInit = callback;
    callback = givenNames;
    givenNames = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__["default"])(object, 'on');
  }

  var isNamesVarArray = givenNames instanceof Array; // allow to pass name-handler object

  if (givenNames && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(givenNames) === 'object' && !isNamesVarArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_5__["default"])(givenNames, function (namesObjCallback, namesObjName) {
      return on(object, namesObjName, namesObjCallback, callback, triggerOnInit);
    });
    return object;
  }

  if (typeof givenNames !== 'string' && !isNamesVarArray) {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__["default"])('on:names_type', {
      names: givenNames
    });
  } // split by spaces
  // TODO: Array of names passed to on method is non-documented feature


  var names = isNamesVarArray ? givenNames : givenNames.split(_splitbyspaceregexp__WEBPACK_IMPORTED_MODULE_2__["default"]); // flip triggerOnInit and context when triggerOnInit is not boolean

  if (typeof triggerOnInit !== 'boolean' && typeof triggerOnInit !== 'undefined') {
    // eslint-disable-next-line no-param-reassign
    var _ref = [triggerOnInit, context];
    context = _ref[0];
    triggerOnInit = _ref[1];
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_6__["default"])(names, function (name) {
    var delegatedEventParts = name.split('@');

    if (delegatedEventParts.length > 1) {
      // if @ exists in event name then this is delegated event
      var _delegatedEventParts = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(delegatedEventParts, 2),
          path = _delegatedEventParts[0],
          delegatedName = _delegatedEventParts[1];

      Object(_delegatelistener__WEBPACK_IMPORTED_MODULE_8__["default"])(object, path, delegatedName, callback, context || object);
    } else {
      // if not, this is simple event
      Object(_addlistener__WEBPACK_IMPORTED_MODULE_7__["default"])(object, name, callback, context);
    }
  }); // call callback immediatelly if triggerOnInit is true

  if (triggerOnInit === true) {
    callback.call(context || object, {
      triggerOnInit: triggerOnInit
    });
  }

  return object;
}

/***/ }),

/***/ "../src/once.js":
/*!**********************!*\
  !*** ../src/once.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return once; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on */ "../src/on/index.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _off__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./off */ "../src/off/index.js");
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/apply */ "../src/_helpers/apply.js");





 // adds event listener which will be removed immediately after its first call

function once(object, names, givenCallback, context) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    context = givenCallback;
    givenCallback = names;
    names = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'once');
  }

  var isNamesVarArray = names instanceof Array; // allow to pass name-handler object

  if (names && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(names) === 'object' && !isNamesVarArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_3__["default"])(names, function (namesObjCallback, namesObjName) {
      return once(object, namesObjName, namesObjCallback, givenCallback);
    });
    return object;
  }

  var callback = function onceCallback() {
    Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_5__["default"])(givenCallback, this, arguments); // remove event listener after its call

    Object(_off__WEBPACK_IMPORTED_MODULE_4__["default"])(object, names, onceCallback, context);
  }; // allow to remove event listener py passing original callback to "off"


  callback._callback = givenCallback;
  return Object(_on__WEBPACK_IMPORTED_MODULE_1__["default"])(object, names, callback, context);
}

/***/ }),

/***/ "../src/ondebounce.js":
/*!****************************!*\
  !*** ../src/ondebounce.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onDebounce; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on */ "../src/on/index.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/debounce */ "../src/_helpers/debounce.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");




 // adds debounced event listener

function onDebounce(object, names, givenCallback, givenDelay, triggerOnInit, context) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    context = triggerOnInit;
    triggerOnInit = givenDelay;
    givenDelay = givenCallback;
    givenCallback = names;
    names = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'onDebounce');
  }

  var isNamesVarArray = names instanceof Array; // allow to pass name-handler object

  if (names && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(names) === 'object' && !isNamesVarArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_4__["default"])(names, function (namesObjCallback, namesObjName) {
      return onDebounce(object, namesObjName, namesObjCallback, givenCallback, givenDelay, triggerOnInit);
    });
    return object;
  }

  var delay = typeof givenDelay === 'number' ? givenDelay : 0;
  var callback = Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(givenCallback, delay); // allow to remove event listener py passing original callback to "off"

  callback._callback = givenCallback;
  return Object(_on__WEBPACK_IMPORTED_MODULE_1__["default"])(object, names, callback, triggerOnInit, context);
}

/***/ }),

/***/ "../src/parsebindings/_parserdata.js":
/*!*******************************************!*\
  !*** ../src/parsebindings/_parserdata.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calc */ "../src/calc/index.js");
/* harmony import */ var _parserbrackets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parserbrackets */ "../src/parserbrackets.js");


var parserData = {}; // since Seemple allows to change parser brackets via parserBrackets objects
// the parser needs to generate required regular expressions and escaped brackets every time
// when parseBindings is called
// to optimize this behavior parserData object is created
// it calculates needed data every time when parserBrackets are changed
// and when parseBindings function is called it uses previously generated regeps
// from parserData object

Object(_calc__WEBPACK_IMPORTED_MODULE_0__["default"])(parserData, {
  leftBracket: {
    source: {
      object: _parserbrackets__WEBPACK_IMPORTED_MODULE_1__["default"],
      key: 'left'
    }
  },
  rightBracket: {
    source: {
      object: _parserbrackets__WEBPACK_IMPORTED_MODULE_1__["default"],
      key: 'right'
    }
  },
  escLeftBracket: {
    source: 'leftBracket',
    handler: function handler(left) {
      return left.replace(/(\[|\(|\?)/g, '\\$1');
    }
  },
  escRightBracket: {
    source: 'rightBracket',
    handler: function handler(right) {
      return right.replace(/(]|\)|\?)/g, '\\$1');
    }
  },
  bindingReg: {
    source: ['escLeftBracket', 'escRightBracket'],
    handler: function handler(left, right) {
      return new RegExp("".concat(left, "\\s*(.+?)\\s*").concat(right), 'g');
    }
  },
  strictBindingReg: {
    source: ['escLeftBracket', 'escRightBracket'],
    handler: function handler(left, right) {
      return new RegExp("^".concat(left, "\\s*(.+?)\\s*").concat(right, "$"), 'g');
    }
  }
}, {
  debounceCalc: false // we need to get new regexps immediately when brackets are changed

});
/* harmony default export */ __webpack_exports__["default"] = (parserData);

/***/ }),

/***/ "../src/parsebindings/_processattribute/_definehiddencontentproperty.js":
/*!******************************************************************************!*\
  !*** ../src/parsebindings/_processattribute/_definehiddencontentproperty.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineHiddenContentProperty; });
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../calc */ "../src/calc/index.js");
/* harmony import */ var _parserdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_parserdata */ "../src/parsebindings/_parserdata.js");


var hiddenPropertyPrefix = "".concat(Math.random()).replace('0.', 'hidden');
var hiddenPropertyIndex = 0; // defines hiden (without accessors) computed property
// that dependent on given properties ('keys') as text template describes
// for example if text='{{x}} blah {{y}}', x='foo', y='bar'
// then the new property should have value 'foo blah bar'

function defineHiddenContentProperty(_ref) {
  var object = _ref.object,
      keys = _ref.keys,
      text = _ref.text;
  var key = "".concat(hiddenPropertyPrefix).concat(hiddenPropertyIndex);
  var regs = {};
  var escLeftBracket = _parserdata__WEBPACK_IMPORTED_MODULE_1__["default"].escLeftBracket,
      escRightBracket = _parserdata__WEBPACK_IMPORTED_MODULE_1__["default"].escRightBracket;
  hiddenPropertyIndex += 1; // create and cache regular expressions which will help us to
  // change target property value quickly when sources are changed
  // TODO: We need better parser!

  for (var i = 0; i < keys.length; i++) {
    regs[keys[i]] = new RegExp("".concat(escLeftBracket, "\\s*").concat(keys[i], "\\s*").concat(escRightBracket), 'g');
  }

  Object(_calc__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, keys, function calcHandler() {
    var value = text; // replace things like {{x}} by actual values

    for (var _i = 0; _i < keys.length; _i++) {
      value = value.replace(regs[keys[_i]], arguments[_i]);
    }

    return value;
  }, {
    isTargetPropertyHidden: true,
    debounceCalc: false
  });
  return key;
}

/***/ }),

/***/ "../src/parsebindings/_processattribute/_getbindingkey.js":
/*!****************************************************************!*\
  !*** ../src/parsebindings/_processattribute/_getbindingkey.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBindingKey; });
/* harmony import */ var _parserdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_parserdata */ "../src/parsebindings/_parserdata.js");
/* harmony import */ var _definehiddencontentproperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_definehiddencontentproperty */ "../src/parsebindings/_processattribute/_definehiddencontentproperty.js");

 // analyzes string and returns only one key which will be actually bound to an attribute

function getBindingKey(_ref) {
  var object = _ref.object,
      text = _ref.text;
  var strictBindingReg = _parserdata__WEBPACK_IMPORTED_MODULE_0__["default"].strictBindingReg,
      bindingReg = _parserdata__WEBPACK_IMPORTED_MODULE_0__["default"].bindingReg;
  var keys = [];
  var execResult;
  var key;
  strictBindingReg.lastIndex = 0;
  bindingReg.lastIndex = 0; // extract keys given in parser brackers
  // '{{x}} {{y}}' -> ['x', 'y']

  while (execResult = bindingReg.exec(text)) {
    keys.push(execResult[1]);
  }

  if (keys.length === 1 && strictBindingReg.test(text)) {
    // if there is only one key and if only binding substring is present in a text
    // in other words '{{x}}' is given instead of '{{x}} {{y}}' or '{{x}}foo'
    // then don't create computable property and use that key (eg 'x') for binding
    key = keys[0];
  } else {
    // create hidden computable property
    key = Object(_definehiddencontentproperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      object: object,
      keys: keys,
      text: text
    });
  }

  return key;
}

/***/ }),

/***/ "../src/parsebindings/_processattribute/index.js":
/*!*******************************************************!*\
  !*** ../src/parsebindings/_processattribute/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processAttribute; });
/* harmony import */ var _getbindingkey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getbindingkey */ "../src/parsebindings/_processattribute/_getbindingkey.js");
/* harmony import */ var _bindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _lookforbinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lookforbinder */ "../src/lookforbinder.js");


 // a binder for instance of Attr

var attributeBinder = {
  setValue: function setValue(value) {
    this.value = value;
  }
}; // adds binding for an attribute
// its logic is much harder than for text node
// check out imported modules for more info

function processAttribute(_ref) {
  var node = _ref.node,
      attribute = _ref.attribute,
      object = _ref.object,
      eventOptions = _ref.eventOptions;
  var name = attribute.name,
      value = attribute.value;
  var type = node.type; // get a key which will be actually bound to an attribute
  // getBindingKey analyzes given value, creates computable property and returns its key

  var key = Object(_getbindingkey__WEBPACK_IMPORTED_MODULE_0__["default"])({
    object: object,
    text: value
  });
  var probablyValueInput = name === 'value' && type !== 'checkbox' && type !== 'radio';
  var probablyCheckableInput = name === 'checked' && (type === 'checkbox' || type === 'radio');
  var defaultBinder;

  if (probablyValueInput || probablyCheckableInput) {
    defaultBinder = Object(_lookforbinder__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  }

  if (defaultBinder) {
    // if deault binder is found then this is default HTML5 form element
    // remove the attribute and use found binder
    node.removeAttribute(name);
    Object(_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, node, defaultBinder, eventOptions);
  } else {
    // simply bind an attribute
    Object(_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, attribute, attributeBinder, eventOptions);
  }
}

/***/ }),

/***/ "../src/parsebindings/_processtextnode.js":
/*!************************************************!*\
  !*** ../src/parsebindings/_processtextnode.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processTextNode; });
/* harmony import */ var _parserdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_parserdata */ "../src/parsebindings/_parserdata.js");
/* harmony import */ var _bindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");



var textNodeBinder = {
  setValue: function setValue(value) {
    this.textContent = typeof value === 'undefined' ? '' : value;
  }
}; // adds binding for text node
// it splits up one text node into "simple text nodes"
// and "bound text nodes" and removes original text node

function processTextNode(_ref) {
  var object = _ref.object,
      node = _ref.node,
      textNode = _ref.textNode,
      eventOptions = _ref.eventOptions;
  var bindingReg = _parserdata__WEBPACK_IMPORTED_MODULE_0__["default"].bindingReg;
  var textContent = textNode.textContent;
  var _window = window,
      document = _window.document;
  bindingReg.lastIndex = 0; // tokens variable contains normal text as odd items
  // and bound keys as even items
  // 'foo{{x}}bar{{y}}baz{{z}}' -> ['foo', 'x', 'bar', 'y', 'baz', 'z', '']

  var tokens = textContent.split(bindingReg); // fragment contains all new text nodes

  var fragment = document.createDocumentFragment();
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(tokens, function (token, index) {
    if (token) {
      var newTextNode = document.createTextNode(token);
      fragment.appendChild(newTextNode); // if tokens item is even then it is a key
      // which needs to be bound to newly created text node

      if (index % 2 !== 0) {
        Object(_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(object, token, newTextNode, textNodeBinder, eventOptions);
      }
    }
  });
  node.insertBefore(fragment, textNode);
  node.removeChild(textNode);
}

/***/ }),

/***/ "../src/parsebindings/index.js":
/*!*************************************!*\
  !*** ../src/parsebindings/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseBindings; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_dom */ "../src/_dom/index.js");
/* harmony import */ var _parserdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_parserdata */ "../src/parsebindings/_parserdata.js");
/* harmony import */ var _processtextnode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_processtextnode */ "../src/parsebindings/_processtextnode.js");
/* harmony import */ var _processattribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_processattribute */ "../src/parsebindings/_processattribute/index.js");
/* harmony import */ var _bindnode_getnodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindnode/_getnodes */ "../src/bindnode/_getnodes.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");








 // makes parsing of given node (node, $(nodes), selector, HTML)
// and initializes bindings for attributes and text nodes which contain things like {{foo}}

function parseBindings(object, givenNodes, eventOptions) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    eventOptions = givenNodes;
    givenNodes = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__["default"])(object, 'parseBindings');
  }

  var extendedEventOptions = {
    // useExactBinder is little optimization
    // without this option used binder is extended by default binder
    useExactBinder: true,
    fromParser: true,
    setValueOnBind: true
  };

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(eventOptions) === 'object') {
    Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_8__["default"])(extendedEventOptions, eventOptions);
  }

  var nodes;
  var allNodes = []; // extract all needed data from parserData
  // check out what is parserData in its module

  var leftBracket = _parserdata__WEBPACK_IMPORTED_MODULE_3__["default"].leftBracket,
      bindingReg = _parserdata__WEBPACK_IMPORTED_MODULE_3__["default"].bindingReg;

  if (typeof givenNodes === 'string') {
    if (~givenNodes.indexOf('<')) {
      // this is HTML
      nodes = _dom__WEBPACK_IMPORTED_MODULE_2__["default"].$.parseHTML(givenNodes);

      if (!~givenNodes.indexOf(leftBracket)) {
        // if it doesn't include parser bracket then we don't need to check
        // their existence for all included nodes in cycle below
        return nodes;
      }
    } else {
      // this is a selector
      nodes = Object(_bindnode_getnodes__WEBPACK_IMPORTED_MODULE_6__["default"])(object, givenNodes);
    }
  } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenNodes) === 'object') {
    // this is a node, nodeList or something else (eg array, jQuery instance etc)
    nodes = _dom__WEBPACK_IMPORTED_MODULE_2__["default"].$(givenNodes);
  } // to make possible to not use recursion we're collecting all nodes to allNodes array


  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_7__["default"])(nodes, function (node) {
    return allNodes.push(node);
  }); // on every cycle of array we're adding new descendants to allNodes
  // increasing # of needed iterations

  var _loop = function _loop(i) {
    var node = allNodes[i];
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3; // allow to parse elements only

    if (node.nodeType !== ELEMENT_NODE) {
      return "continue";
    }

    var outerHTML = node.outerHTML,
        innerHTML = node.innerHTML,
        childNodes = node.childNodes,
        attributes = node.attributes; // if outerHTML does't contain left bracket, then this node doesn't need to be parsed
    // we may need to check outerHTML existence for older browsers
    // we may need to add !~outerHTML.indexOf(encodeURI(leftBracket) to support old FF

    if (!~outerHTML.indexOf(leftBracket)) {
      return "continue";
    } // initialize bindings for attributes if they appear


    if (attributes.length) {
      // fixes Firefox issue: attributes.length can be changed by processAttribute
      var attrs = attributes.length > 1 ? Array.prototype.slice.call(attributes) : attributes;
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_7__["default"])(attrs, function (attribute) {
        if (bindingReg.test(attribute.value)) {
          Object(_processattribute__WEBPACK_IMPORTED_MODULE_5__["default"])({
            node: node,
            attribute: attribute,
            object: object,
            eventOptions: extendedEventOptions
          });
        }
      });
    } // if innerHTML does't contain left bracket,
    // then children of this node don't need to be parsed
    // we may need to add !~innerHTML.indexOf(encodeURI(leftBracket) to support old FF


    if (!~innerHTML.indexOf(leftBracket)) {
      return "continue";
    }

    for (var j = 0; j < childNodes.length; j++) {
      var childNode = childNodes[j];
      var nodeType = childNode.nodeType,
          textContent = childNode.textContent;

      if (nodeType === ELEMENT_NODE) {
        // if childNode is HTML element then add it to the end of allNodes array
        // to check everything on next outer cycle iterations
        allNodes.push(childNode);
      } else if (nodeType === TEXT_NODE) {
        // if childNode is text node which contains things like {{x}}
        // then initialize bindings for this node
        if (bindingReg.test(textContent)) {
          Object(_processtextnode__WEBPACK_IMPORTED_MODULE_4__["default"])({
            object: object,
            node: node,
            textNode: childNode,
            eventOptions: extendedEventOptions
          });
        }
      }
    }
  };

  for (var i = 0; i < allNodes.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return nodes;
}

/***/ }),

/***/ "../src/parserbrackets.js":
/*!********************************!*\
  !*** ../src/parserbrackets.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// brackets for bindings parser
/* harmony default export */ __webpack_exports__["default"] = ({
  left: '{{',
  right: '}}'
});

/***/ }),

/***/ "../src/remove.js":
/*!************************!*\
  !*** ../src/remove.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return remove; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unbindnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unbindnode */ "../src/unbindnode/index.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _off_removelistener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./off/_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // removes a property, its bindings and its events
// TODO: remove function does not correctly removes delegated events, bindings, tree listeners etc

function remove(object, givenKey, eventOptions) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    eventOptions = givenKey;
    givenKey = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_6__["default"])(object, 'remove');
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_5__["default"].get(object);
  var _eventOptions = eventOptions,
      silent = _eventOptions.silent; // allow to pass single key or an array of keys

  var keys = givenKey instanceof Array ? givenKey : [givenKey];

  var _loop = function _loop(i) {
    var key = keys[i]; // if non-string is passed as a key

    if (typeof key !== 'string') {
      throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_7__["default"])('remove:key_type', {
        key: key
      });
    }

    var props = def && def.props;
    var propDef = props && props[key]; // if no object definition then simply delete the property

    if (!propDef) {
      delete object[key];
      return "continue";
    }

    var value = propDef.value; // remove all bindings

    Object(_unbindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(object, key); // TODO: Manual listing of event prefixes may cause problems in future

    var removeEventPrefies = ['_change:deps', '_change:bindings', '_change:delegated', '_change:tree', 'change', 'beforechange', 'bind', 'unbind']; // remove all events

    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_8__["default"])(removeEventPrefies, function (prefix) {
      return Object(_off_removelistener__WEBPACK_IMPORTED_MODULE_4__["default"])(object, "".concat(prefix, ":").concat(key));
    }); // delete property definition

    delete props[key]; // delete the property itself

    delete object[key];

    var extendedEventOptions = _objectSpread({
      key: key,
      value: value
    }, eventOptions); // trigger delegated events logic removal for asterisk events (*.*.*@foo)


    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, '_delete:delegated', extendedEventOptions); // fire events if "silent" is not true

    if (!silent) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, 'delete', extendedEventOptions);
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, "delete:".concat(key), extendedEventOptions);
    }
  };

  for (var i = 0; i < keys.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }
}

/***/ }),

/***/ "../src/seemple/_afterinit.js":
/*!************************************!*\
  !*** ../src/seemple/_afterinit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return afterSeempleInit; });
// Seemple initializer
function afterSeempleInit() {
  this.nodes = {};
  this.$nodes = {};
}

/***/ }),

/***/ "../src/seemple/_prototype.js":
/*!************************************!*\
  !*** ../src/seemple/_prototype.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _universalmethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_universalmethods */ "../src/seemple/_universalmethods.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");
/* harmony import */ var _afterinit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_afterinit */ "../src/seemple/_afterinit.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_1__["default"])({
  _afterInit: _afterinit__WEBPACK_IMPORTED_MODULE_2__["default"],
  isSeemple: true,
  $: _universalmethods__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
}, _universalmethods__WEBPACK_IMPORTED_MODULE_0__));

/***/ }),

/***/ "../src/seemple/_staticmembers.js":
/*!****************************************!*\
  !*** ../src/seemple/_staticmembers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultbinders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultbinders */ "../src/defaultbinders.js");
/* harmony import */ var _lookforbinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lookforbinder */ "../src/lookforbinder.js");
/* harmony import */ var _parserbrackets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parserbrackets */ "../src/parserbrackets.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class */ "../src/class.js");
/* harmony import */ var _toseemple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toseemple */ "../src/toseemple.js");
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../binders */ "../src/binders/index.js");
/* harmony import */ var _universalmethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_universalmethods */ "../src/seemple/_universalmethods.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");
/* harmony import */ var _usedomlibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../usedomlibrary */ "../src/usedomlibrary.js");
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chain */ "../src/chain.js");










/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_7__["default"])({
  Class: _class__WEBPACK_IMPORTED_MODULE_3__["default"],
  defaultBinders: _defaultbinders__WEBPACK_IMPORTED_MODULE_0__["default"],
  lookForBinder: _lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"],
  binders: _binders__WEBPACK_IMPORTED_MODULE_5__,
  parserBrackers: _parserbrackets__WEBPACK_IMPORTED_MODULE_2__["default"],
  toSeemple: _toseemple__WEBPACK_IMPORTED_MODULE_4__["default"],
  useDOMLibrary: _usedomlibrary__WEBPACK_IMPORTED_MODULE_8__["default"],
  chain: _chain__WEBPACK_IMPORTED_MODULE_9__["default"]
}, _universalmethods__WEBPACK_IMPORTED_MODULE_6__));

/***/ }),

/***/ "../src/seemple/_universalmethods.js":
/*!*******************************************!*\
  !*** ../src/seemple/_universalmethods.js ***!
  \*******************************************/
/*! exports provided: on, once, onDebounce, off, trigger, calc, bindNode, unbindNode, bindOptionalNode, bindSandbox, parseBindings, select, selectAll, set, remove, instantiate, mediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../on */ "../src/on/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _on__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _once__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../once */ "../src/once.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _once__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ondebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ondebounce */ "../src/ondebounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDebounce", function() { return _ondebounce__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../off */ "../src/off/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "off", function() { return _off__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trigger */ "../src/trigger/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _trigger__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calc */ "../src/calc/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return _calc__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _bindnode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindnode */ "../src/bindnode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNode", function() { return _bindnode__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _unbindnode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../unbindnode */ "../src/unbindnode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unbindNode", function() { return _unbindnode__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _bindoptionalnode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bindoptionalnode */ "../src/bindoptionalnode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindOptionalNode", function() { return _bindoptionalnode__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _bindsandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bindsandbox */ "../src/bindsandbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindSandbox", function() { return _bindsandbox__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _parsebindings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parsebindings */ "../src/parsebindings/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseBindings", function() { return _parsebindings__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../select */ "../src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _selectall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../selectall */ "../src/selectall.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectall__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../set */ "../src/set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _set__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../remove */ "../src/remove.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _remove__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _instantiate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../instantiate */ "../src/instantiate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instantiate", function() { return _instantiate__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _mediate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../mediate */ "../src/mediate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediate", function() { return _mediate__WEBPACK_IMPORTED_MODULE_16__["default"]; });

















 // the following methods can be used as static methods and as instance methods



/***/ }),

/***/ "../src/seemple/index.js":
/*!*******************************!*\
  !*** ../src/seemple/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ "../src/class.js");
/* harmony import */ var _staticmembers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_staticmembers */ "../src/seemple/_staticmembers.js");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_prototype */ "../src/seemple/_prototype.js");
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");






_prototype__WEBPACK_IMPORTED_MODULE_2__["default"].constructor = function Seemple() {
  if (!(this instanceof Seemple)) {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__["default"])('common:call_class');
  }

  Object(_core_init__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
};

var Seemple = Object(_class__WEBPACK_IMPORTED_MODULE_0__["default"])(_prototype__WEBPACK_IMPORTED_MODULE_2__["default"], _staticmembers__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Seemple);

/***/ }),

/***/ "../src/select.js":
/*!************************!*\
  !*** ../src/select.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return select; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _bindnode_selectnodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindnode/_selectnodes */ "../src/bindnode/_selectnodes.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");




var customSelectorTestReg = /:sandbox|:bound\(([^(]*)\)/; // selects one node based on given selector

function select(object, selector) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    selector = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__["default"])(object, 'select');
  } // the selector includes "custom" things like :sandbox or :bound(KEY)


  if (customSelectorTestReg.test(selector)) {
    return Object(_bindnode_selectnodes__WEBPACK_IMPORTED_MODULE_2__["default"])(object, selector)[0] || null;
  }

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(object);

  if (!def || typeof selector !== 'string') {
    return null;
  }

  var propDef = def.props.sandbox;

  if (!propDef) {
    return null;
  }

  var bindings = propDef.bindings;

  if (bindings) {
    // iterate over all bound nodes trying to find a descendant matched given selector
    for (var i = 0; i < bindings.length; i++) {
      var node = bindings[i].node;
      var selected = node.querySelector(selector);

      if (selected) {
        return selected;
      }
    }
  }

  return null;
}

/***/ }),

/***/ "../src/selectall.js":
/*!***************************!*\
  !*** ../src/selectall.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectAll; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_dom */ "../src/_dom/index.js");
/* harmony import */ var _bindnode_selectnodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bindnode/_selectnodes */ "../src/bindnode/_selectnodes.js");
/* harmony import */ var _helpers_toarray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/toarray */ "../src/_helpers/toarray.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");







var customSelectorTestReg = /:sandbox|:bound\(([^(]*)\)/; // selects nodes based on given selector

function selectAll(object, selector) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    selector = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_5__["default"])(object, 'selectAll or $');
  } // the selector includes "custom" things like :sandbox or :bound(KEY)


  if (customSelectorTestReg.test(selector)) {
    return Object(_bindnode_selectnodes__WEBPACK_IMPORTED_MODULE_3__["default"])(object, selector);
  }

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(object);
  var result = _dom__WEBPACK_IMPORTED_MODULE_2__["default"].$();

  if (!def || typeof selector !== 'string') {
    return result;
  }

  var propDef = def.props.sandbox;

  if (!propDef) {
    return result;
  }

  var bindings = propDef.bindings;

  if (bindings) {
    // iterate over all bindings and add found nodes
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_6__["default"])(bindings, function (_ref) {
      var node = _ref.node;
      var selected = node.querySelectorAll(selector);
      result = result.add(Object(_helpers_toarray__WEBPACK_IMPORTED_MODULE_4__["default"])(selected));
    });
  }

  return result;
}

/***/ }),

/***/ "../src/set.js":
/*!*********************!*\
  !*** ../src/set.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return set; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/is */ "../src/_helpers/is.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // the function sets new value for a property
// since its performance is very critical we're checking events existence manually

function set(object, key, value, eventOptions) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    eventOptions = value;
    value = key;
    key = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_4__["default"])(object, 'set');
  } // if no key or falsy key is given


  if (!key) {
    return object;
  } // allow to use key-value object as another method variation


  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(key) === 'object') {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(key, function (objVal, objKey) {
      return set(object, objKey, objVal, value);
    });
    return object;
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_2__["default"].get(object); // if no object definition then make simple assignment

  if (!def) {
    object[key] = value;
    return object;
  }

  var props = def.props,
      events = def.events;
  var propDef = props[key]; // if no property definition then make simple assignment

  if (!propDef) {
    object[key] = value;
    return object;
  }

  var previousValue = propDef.value,
      mediator = propDef.mediator; // possible flags, all of them are falsy by default

  var _eventOptions = eventOptions,
      skipMediator = _eventOptions.skipMediator,
      fromMediator = _eventOptions.fromMediator,
      force = _eventOptions.force,
      forceHTML = _eventOptions.forceHTML,
      silent = _eventOptions.silent,
      silentHTML = _eventOptions.silentHTML,
      skipCalc = _eventOptions.skipCalc;
  var newValue;

  if (mediator && !Object(_helpers_is__WEBPACK_IMPORTED_MODULE_5__["default"])(value, previousValue) && !skipMediator && !fromMediator) {
    newValue = mediator(value);
  } else {
    newValue = value;
  }

  var isChanged = !Object(_helpers_is__WEBPACK_IMPORTED_MODULE_5__["default"])(newValue, previousValue); // add to eventOptions object some useful properties
  // we override default eventOptions because some of the properties need to have actual values,
  // not inherited ones (eg when calc is used)

  var extendedEventOptions = _objectSpread({}, eventOptions, {
    value: newValue,
    self: object,
    previousValue: previousValue,
    key: key,
    isChanged: isChanged
  });

  var triggerChange = (isChanged || force) && !silent; // trigger beforechange:KEY and beforechange events

  if (triggerChange) {
    var beforechangeStr = 'beforechange';
    var beforechangeEventName = "".concat(beforechangeStr, ":").concat(key);

    if (events[beforechangeEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, beforechangeEventName, extendedEventOptions);
    }

    if (events[beforechangeStr]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, beforechangeStr, extendedEventOptions);
    }
  }

  propDef.value = newValue; // triger bindings

  if (!silentHTML && (isChanged || forceHTML)) {
    var changeBindingsEventName = "_change:bindings:".concat(key);

    if (events[changeBindingsEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeBindingsEventName, extendedEventOptions);
    }
  } // trigger change:KEY and change events


  if (triggerChange) {
    var changeStr = 'change';
    var changeEventName = "".concat(changeStr, ":").concat(key);

    if (events[changeEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeEventName, extendedEventOptions);
    }

    if (events[changeStr]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeStr, extendedEventOptions);
    }
  } // trigger dependencies made by calc method


  if ((isChanged || force) && !skipCalc) {
    var changeDepsEventName = "_change:deps:".concat(key);

    if (events[changeDepsEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeDepsEventName, extendedEventOptions);
    }
  }

  if (isChanged) {
    // trigger common delegated events logic
    var changeDelegatedKeyEventName = "_change:delegated:".concat(key);

    if (events[changeDelegatedKeyEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeDelegatedKeyEventName, extendedEventOptions);
    } // trigger tree change events logic


    var changeTreeEventName = "_change:tree:".concat(key);

    if (events[changeTreeEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeTreeEventName, extendedEventOptions);
    } // trigger other internal change events


    var changeCommonEventName = "_change:common:".concat(key);

    if (events[changeCommonEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeCommonEventName, extendedEventOptions);
    } // trigger delegated logic for asterisk events (*.*.*@foo)
    // TODO: Confusing events names ("_change:delegated", "_change:common:KEY" etc)


    var changeDelegatedEventName = '_change:delegated';

    if (events[changeDelegatedEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeDelegatedEventName, extendedEventOptions);
    }
  }

  return object;
}

/***/ }),

/***/ "../src/toseemple.js":
/*!***************************!*\
  !*** ../src/toseemple.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toSeemple; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");


 // recursively converts objects and arrays to Seemple.Object and Seemple.Array instances

function toSeemple(data) {
  // fix circular ref issue
  var SeempleObject = __webpack_require__(/*! ./object */ "../src/object/index.js")["default"];

  var SeempleArray = __webpack_require__(/*! ./array */ "../src/array/index.js")["default"]; // convert only objects


  if (data && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(data) === 'object') {
    if ('length' in data) {
      // if length is given convert it to Seemple.Array instance
      var arrayItems = Array(data.length);
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_1__["default"])(data, function (item, index) {
        arrayItems[index] = toSeemple(item);
      });
      return new SeempleArray().recreate(arrayItems);
    } // if length is not given convert it to Seemple.Object instance


    var object = {};
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_2__["default"])(data, function (value, key) {
      object[key] = toSeemple(value);
    });
    return new SeempleObject(object);
  } // for all non-objects just return passed data


  return data;
}

/***/ }),

/***/ "../src/trigger/_triggerdomevent.js":
/*!******************************************!*\
  !*** ../src/trigger/_triggerdomevent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return triggerDOMEvent; });
/* harmony import */ var _triggeronedomevent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_triggeronedomevent */ "../src/trigger/_triggeronedomevent.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");


 // triggers DOM event on bound nodes

function triggerDOMEvent(object, key, eventName, selector, triggerArgs) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(object);

  if (!def) {
    return;
  }

  var props = def.props;
  var propDef = props[key];

  if (!propDef) {
    return;
  }

  var bindings = propDef.bindings;

  if (!bindings) {
    return;
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(bindings, function (_ref) {
    var node = _ref.node;

    if (selector) {
      // if selector is given trigger an event on all node descendants
      var descendants = node.querySelectorAll(selector);
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(descendants, function (descendant) {
        Object(_triggeronedomevent__WEBPACK_IMPORTED_MODULE_0__["default"])({
          node: descendant,
          eventName: eventName,
          triggerArgs: triggerArgs
        });
      });
    } else {
      // trigger an event for single node
      Object(_triggeronedomevent__WEBPACK_IMPORTED_MODULE_0__["default"])({
        node: node,
        eventName: eventName,
        triggerArgs: triggerArgs
      });
    }
  });
}

/***/ }),

/***/ "../src/trigger/_triggerone.js":
/*!*************************************!*\
  !*** ../src/trigger/_triggerone.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return triggerOne; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/apply */ "../src/_helpers/apply.js");

 // triggers one event

function triggerOne(object, name, triggerArgs) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object);
  var events = def && def.events[name];

  if (events) {
    var l = events.length;
    var i = 0; // allow to pass both array of args and single arg as triggerArgs

    if (triggerArgs instanceof Array) {
      while (i < l) {
        var event = triggerOne.latestEvent = events[i];
        var callback = event.callback,
            ctx = event.ctx;
        Object(_helpers_apply__WEBPACK_IMPORTED_MODULE_1__["default"])(callback, ctx, triggerArgs);
        i += 1;
      }
    } else {
      while (i < l) {
        var _event = triggerOne.latestEvent = events[i];

        var _callback = _event.callback,
            _ctx = _event.ctx;

        _callback.call(_ctx, triggerArgs);

        i += 1;
      }
    }
  }
} // latestEvent is used as required hack in somemethods

triggerOne.latestEvent = {
  info: {},
  name: null
};

/***/ }),

/***/ "../src/trigger/_triggeronedomevent.js":
/*!*********************************************!*\
  !*** ../src/trigger/_triggeronedomevent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return triggerOneDOMEvent; });
// triggers given DOM event on given node
function triggerOneDOMEvent(_ref) {
  var node = _ref.node,
      eventName = _ref.eventName,
      triggerArgs = _ref.triggerArgs;
  var _window = window,
      document = _window.document,
      Event = _window.Event;
  var event; // polyfill for older browsers

  if (document.createEvent) {
    /* istanbul ignore next */
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  } else if (typeof Event !== 'undefined') {
    event = new Event(eventName, {
      bubbles: true,
      cancelable: true
    });
  } // seempleTriggerArgs will be used in a handler created by addDOMListener


  event.seempleTriggerArgs = triggerArgs;
  node.dispatchEvent(event);
}

/***/ }),

/***/ "../src/trigger/index.js":
/*!*******************************!*\
  !*** ../src/trigger/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trigger; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _on_domeventregexp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../on/_domeventregexp */ "../src/on/_domeventregexp.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/seempleerror */ "../src/_helpers/seempleerror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _on_splitbyspaceregexp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../on/_splitbyspaceregexp */ "../src/on/_splitbyspaceregexp.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _triggerone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _triggerdomevent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_triggerdomevent */ "../src/trigger/_triggerdomevent.js");









 // triggers an event

function trigger() {
  var object;
  var givenNames;
  var triggerArgs;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args
    givenNames = args[0];
    triggerArgs = args.slice(1);
    object = this;
  } else {
    object = args[0];
    givenNames = args[1];
    triggerArgs = args.slice(2);
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__["default"])(object, 'trigger');
  }

  var names; // allow to use strings only as event name

  if (typeof givenNames === 'string') {
    names = givenNames.split(_on_splitbyspaceregexp__WEBPACK_IMPORTED_MODULE_6__["default"]);
  } else {
    throw Object(_helpers_seempleerror__WEBPACK_IMPORTED_MODULE_4__["default"])('trigger:names_type', {
      names: givenNames
    });
  }

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_7__["default"].get(object); // if no definition do nothing

  if (!def) {
    return object;
  }

  var allEvents = def.events;

  if (!allEvents) {
    return object;
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(names, function (name) {
    var domEvtExecResult = _on_domeventregexp__WEBPACK_IMPORTED_MODULE_2__["default"].exec(name);

    if (domEvtExecResult) {
      // if EVT::KEY(SELECTOR) ia passed as event name then trigger DOM event
      var _domEvtExecResult = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(domEvtExecResult, 4),
          eventName = _domEvtExecResult[1],
          _domEvtExecResult$ = _domEvtExecResult[2],
          key = _domEvtExecResult$ === void 0 ? 'sandbox' : _domEvtExecResult$,
          selector = _domEvtExecResult[3];

      Object(_triggerdomevent__WEBPACK_IMPORTED_MODULE_9__["default"])(object, key, eventName, selector, triggerArgs);
    } else {
      // trigger ordinary event
      Object(_triggerone__WEBPACK_IMPORTED_MODULE_8__["default"])(object, name, triggerArgs);
    }
  });
  return object;
}

/***/ }),

/***/ "../src/unbindnode/_removebinding.js":
/*!*******************************************!*\
  !*** ../src/unbindnode/_removebinding.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeBinding; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _off_removelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../off/_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var spaceReg = /\s+/; // the function removes single binding for single object
// called by unbindNode

function removeBinding(_ref) {
  var object = _ref.object,
      key = _ref.key,
      eventOptions = _ref.eventOptions,
      binding = _ref.binding;
  var bindingOptions = binding.bindingOptions,
      binder = binding.binder,
      node = binding.node,
      nodeHandler = binding.nodeHandler,
      objectHandler = binding.objectHandler;
  var destroy = binder.destroy,
      on = binder.on;
  var silent = eventOptions.silent; // if "on" is a function then disable it
  // we cannot "turn off" custom listener defined by a programmer
  // programmer needs to remove custom listener maually inside binder.destroy

  if (typeof on === 'function') {
    nodeHandler.disabled = true;
  } else if (typeof on === 'string') {
    // remove DOM event listener
    // removeEventListener is faster than "on" method from any DOM library
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(on.split(spaceReg), function (evtName) {
      return node.removeEventListener(evtName, nodeHandler);
    });
  } // remove object event listener


  Object(_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, "_change:bindings:".concat(key), objectHandler); // if binder.destroy is given call it

  if (destroy) {
    destroy.call(node, bindingOptions);
  } // fire events


  if (!silent) {
    var extendedEventOptions = _objectSpread({
      key: key,
      node: node
    }, eventOptions);

    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "unbind:".concat(key), extendedEventOptions);
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'unbind', extendedEventOptions);
  }
}

/***/ }),

/***/ "../src/unbindnode/index.js":
/*!**********************************!*\
  !*** ../src/unbindnode/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unbindNode; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _bindnode_getnodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindnode/_getnodes */ "../src/bindnode/_getnodes.js");
/* harmony import */ var _off_removetreelistener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../off/_removetreelistener */ "../src/off/_removetreelistener.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");
/* harmony import */ var _removebinding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_removebinding */ "../src/unbindnode/_removebinding.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_dom */ "../src/_dom/index.js");









 // unbinds a node

function unbindNode(object, key, node, eventOptions) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' && this.isSeemple) {
    // when context is Seemple instance, use this as an object and shift other args

    /* eslint-disable no-param-reassign */
    eventOptions = node;
    node = key;
    key = object;
    object = this;
    /* eslint-enable no-param-reassign */
  } else {
    // throw error when object type is wrong
    Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__["default"])(object, 'unbindNode');
  }

  if (key instanceof Array) {
    if (typeof key[0] === 'string') {
      /*
       * accept array of keys
       * this.unbindNode(['a', 'b', 'c'], node)
       */
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(key, function (itemKey) {
        return unbindNode(object, itemKey, node, eventOptions);
      });
    } else {
      /*
       * acept array of objects
       * this.unbindNode([{ key, node, binder, event }], { silent: true });
       */
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(key, function (_ref) {
        var itemKey = _ref.key,
            itemNode = _ref.node,
            itemEventOptions = _ref.event;
        var commonEventOptions = node;
        var mergedEventOptions = {};

        if (commonEventOptions) {
          // extend event object by "global" event
          Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_7__["default"])(mergedEventOptions, commonEventOptions);
        }

        if (itemEventOptions) {
          // extend event object by "local" event ("event" key of an object)
          Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_7__["default"])(mergedEventOptions, itemEventOptions);
        }

        unbindNode(object, itemKey, itemNode, mergedEventOptions);
      });
    }

    return object;
  }

  if (key && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(key) === 'object') {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(key, function (keyObjValue, keyObjKey) {
      if (keyObjValue.constructor === Object && 'node' in keyObjValue) {
        // this.unbindNode({ key: { node: $(), binder } ) }, { silent: true });
        unbindNode(object, keyObjKey, keyObjValue.node, node);
      } else if (keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
        // this.unbindNode({ key: [{ node: $(), binder }] ) }, { silent: true });
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(keyObjValue, function (keyObjValueItem) {
          unbindNode(object, keyObjKey, keyObjValueItem.node, node);
        });
      } else {
        // this.unbindNode({ key: $() }, { silent: true });
        unbindNode(object, keyObjKey, keyObjValue, node);
      }
    });
    return object;
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var _eventOptions = eventOptions,
      deep = _eventOptions.deep;
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_2__["default"].get(object);

  if (!def) {
    return object;
  }

  var props = def.props; // allow to pass null or undefined as key
  // if passed then remove bindings of all keys for given object

  if (key === null || typeof key === 'undefined') {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(props, function (propsItem, propsKey) {
      unbindNode(object, propsKey, null, eventOptions);
    });
    return object;
  } // remove delegated binding


  if (deep !== false) {
    var deepPath = key.split('.');
    var deepPathLength = deepPath.length;

    if (deepPathLength > 1) {
      var target = object;

      for (var i = 0; i < deepPathLength - 1; i++) {
        // TODO: Do we need to throw an error when a target is falsy?
        target = target[deepPath[i]];
      } // TODO: Potential bug! This may undelegate listener for all bindings with the same path
      // ...(cannot reproduce)


      Object(_off_removetreelistener__WEBPACK_IMPORTED_MODULE_4__["default"])(object, deepPath.slice(0, deepPathLength - 2));
      unbindNode(target, deepPath[deepPathLength - 1], node, eventOptions);
      return object;
    }
  }

  var propDef = props[key]; // when no propdef do nothing

  if (!propDef) {
    return object;
  }

  var bindings = propDef.bindings; // if the property doesn't have any bindings do nothing

  if (!bindings) {
    return object;
  } // if no node is pased remove all bindings for given key


  if (!node) {
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(bindings, function (binding) {
      Object(_removebinding__WEBPACK_IMPORTED_MODULE_8__["default"])({
        object: object,
        key: key,
        eventOptions: eventOptions,
        binding: binding
      });
    });
    propDef.bindings = null; // update nodes and $nodes for Seemple instance

    if (object.isSeemple) {
      delete object.nodes[key];
      delete object.$nodes[key];
    }

    return object;
  }

  var $nodes = Object(_bindnode_getnodes__WEBPACK_IMPORTED_MODULE_3__["default"])(object, node);
  var retainBindings = [];
  var retainNodes = []; // iterate over all bindngs and compare their node with given nodes

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])($nodes, function (nodesItem) {
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(bindings, function (binding) {
      if (binding.node === nodesItem) {
        Object(_removebinding__WEBPACK_IMPORTED_MODULE_8__["default"])({
          object: object,
          key: key,
          eventOptions: eventOptions,
          binding: binding
        });
      } else {
        retainBindings.push(binding);
        retainNodes.push(nodesItem);
      }
    });
  }); // update nodes and $nodes for Seemple instance

  if (object.isSeemple) {
    if (retainNodes.length) {
      object.nodes[key] = retainNodes[0];
      object.$nodes[key] = _dom__WEBPACK_IMPORTED_MODULE_9__["default"].$(retainNodes);
    } else {
      delete object.nodes[key];
      delete object.$nodes[key];
    }
  } // update bindings object


  if (retainBindings.length) {
    propDef.bindings = retainBindings;
  } else {
    propDef.bindings = null;
  }

  return object;
}

/***/ }),

/***/ "../src/usedomlibrary.js":
/*!*******************************!*\
  !*** ../src/usedomlibrary.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDOMLibrary; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_dom */ "../src/_dom/index.js");
/* harmony import */ var _dom_mq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_dom/mq */ "../src/_dom/mq/index.js");

 // forces Matrsahka to use jQuery-like DOM library for internal stuff

function useDOMLibrary(library) {
  if (typeof library === 'function') {
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].$ = library;
  } else {
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].$ = _dom_mq__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

/***/ }),

/***/ "./helpers/createspy.js":
/*!******************************!*\
  !*** ./helpers/createspy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSpy; });
function createSpy() {
  var spy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var spyName = 'function';
  var spyObj = {};
  spyObj[spyName] = spy;
  return spyOn(spyObj, spyName).and.callThrough();
}

/***/ }),

/***/ "./helpers/makeobject.js":
/*!*******************************!*\
  !*** ./helpers/makeobject.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeObject; });
// creates nested object based on path and lastValue
// example: makeObject('a.b.c', 42) -> {a: {b: {c; 42}}}
function makeObject() {
  var givenPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var lastValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var path = givenPath ? givenPath.split('.') : [];
  var result = {};
  var obj = result;
  var key;

  while (path.length > 1) {
    key = path.shift();
    obj = obj[key] = {};
  }

  obj[path.shift()] = lastValue;
  return result;
}

/***/ }),

/***/ "./helpers/simulateclick.js":
/*!**********************************!*\
  !*** ./helpers/simulateclick.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simulateClick; });
// simulates click on a node
function simulateClick(node) {
  var evt = window.document.createEvent('MouseEvent');
  evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  node.dispatchEvent(evt);
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This gets replaced by karma webpack with the updated files on rebuild
var __karmaWebpackManifest__ = []; // require all modules from the
// current directory and all subdirectories

var testsContext = __webpack_require__("./spec sync recursive .*\\.js$");

function inManifest(path) {
  return __karmaWebpackManifest__.indexOf(path) >= 0;
}

var runnable = testsContext.keys().filter(inManifest); // Run all tests if we didn't find any changes

if (!runnable.length) {
  runnable = testsContext.keys();
}

runnable.forEach(testsContext);

var componentsContext = __webpack_require__("../src sync recursive .*\\.js$");

componentsContext.keys().forEach(componentsContext); // TO REPLACE FILE NAMES USE find . -exec rename 's|foo|bar|' {} +

/***/ }),

/***/ "./spec sync recursive .*\\.js$":
/*!***************************!*\
  !*** ./spec sync .*\.js$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bindings/binders_spec.js": "./spec/bindings/binders_spec.js",
	"./bindings/bindings_parser_spec.js": "./spec/bindings/bindings_parser_spec.js",
	"./bindings/bindings_spec.js": "./spec/bindings/bindings_spec.js",
	"./bindings/default_binders_spec.js": "./spec/bindings/default_binders_spec.js",
	"./bindings/existence_binder_spec.js": "./spec/bindings/existence_binder_spec.js",
	"./calc_spec.js": "./spec/calc_spec.js",
	"./chain_spec.js": "./spec/chain_spec.js",
	"./class_spec.js": "./spec/class_spec.js",
	"./events/asterisk_spec.js": "./spec/events/asterisk_spec.js",
	"./events/delegated_spec.js": "./spec/events/delegated_spec.js",
	"./events/events_change_spec.js": "./spec/events/events_change_spec.js",
	"./events/events_core_spec.js": "./spec/events/events_core_spec.js",
	"./events/events_dom_spec.js": "./spec/events/events_dom_spec.js",
	"./events/events_summary_spec.js": "./spec/events/events_summary_spec.js",
	"./events/tree_change_spec.js": "./spec/events/tree_change_spec.js",
	"./instantiate_spec.js": "./spec/instantiate_spec.js",
	"./mediate_spec.js": "./spec/mediate_spec.js",
	"./mq/add_spec.js": "./spec/mq/add_spec.js",
	"./mq/events_spec.js": "./spec/mq/events_spec.js",
	"./mq/init_spec.js": "./spec/mq/init_spec.js",
	"./mq/parsehtml_spec.js": "./spec/mq/parsehtml_spec.js",
	"./remove_spec.js": "./spec/remove_spec.js",
	"./seemple_array/common_spec.js": "./spec/seemple_array/common_spec.js",
	"./seemple_array/iterator_spec.js": "./spec/seemple_array/iterator_spec.js",
	"./seemple_array/mediate_item_spec.js": "./spec/seemple_array/mediate_item_spec.js",
	"./seemple_array/model_spec.js": "./spec/seemple_array/model_spec.js",
	"./seemple_array/native_methods_spec.js": "./spec/seemple_array/native_methods_spec.js",
	"./seemple_array/native_modifying_methods_spec.js": "./spec/seemple_array/native_modifying_methods_spec.js",
	"./seemple_array/orderby_spec.js": "./spec/seemple_array/orderby_spec.js",
	"./seemple_array/pull_spec.js": "./spec/seemple_array/pull_spec.js",
	"./seemple_array/recreate_spec.js": "./spec/seemple_array/recreate_spec.js",
	"./seemple_array/renderer_spec.js": "./spec/seemple_array/renderer_spec.js",
	"./seemple_array/static_methods_spec.js": "./spec/seemple_array/static_methods_spec.js",
	"./seemple_array/tojson_spec.js": "./spec/seemple_array/tojson_spec.js",
	"./seemple_object/common_spec.js": "./spec/seemple_object/common_spec.js",
	"./seemple_object/datakeys_spec.js": "./spec/seemple_object/datakeys_spec.js",
	"./seemple_object/each_spec.js": "./spec/seemple_object/each_spec.js",
	"./seemple_object/iterator_spec.js": "./spec/seemple_object/iterator_spec.js",
	"./seemple_object/tojson_spec.js": "./spec/seemple_object/tojson_spec.js",
	"./seemple_spec.js": "./spec/seemple_spec.js",
	"./set_spec.js": "./spec/set_spec.js",
	"./toseemple_spec.js": "./spec/toseemple_spec.js",
	"./usedomlibrary_spec.js": "./spec/usedomlibrary_spec.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./spec sync recursive .*\\.js$";

/***/ }),

/***/ "./spec/bindings/binders_spec.js":
/*!***************************************!*\
  !*** ./spec/bindings/binders_spec.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_binders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/binders */ "../src/binders/index.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('Binders', function () {
  var noDebounceFlag = {
    debounceSetValue: false,
    debounceGetValue: false
  };

  var mappingFn = function mappingFn(value) {
    return "mapping_".concat(value);
  };

  var obj;
  var node;
  beforeEach(function () {
    obj = {};
    node = window.document.createElement('div');
  });
  it('should bind prop', function () {
    node.someProp = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["prop"])('someProp'), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.someProp).toEqual('bar');
  });
  it('should bind prop and use mapping function', function () {
    node.someProp = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["prop"])('someProp', mappingFn), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.someProp).toEqual('mapping_bar');
  });
  it('should bind attr', function () {
    node.setAttribute('some-attribute', 'foo');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["attr"])('some-attribute'), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.getAttribute('some-attribute')).toEqual('bar');
  });
  it('should bind attr and use mapping function', function () {
    node.setAttribute('some-attribute', 'foo');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["attr"])('some-attribute', mappingFn), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.getAttribute('some-attribute')).toEqual('mapping_bar');
  });
  it('should bind html', function () {
    node.innerHTML = '<i>foo</i>';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["html"])(), noDebounceFlag);
    expect(obj.x).toEqual('<i>foo</i>');
    obj.x = '<b>bar</b>';
    expect(node.innerHTML).toEqual('<b>bar</b>');
  });
  it('should bind html and use mapping function', function () {
    node.innerHTML = '<i>foo</i>';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["html"])(mappingFn), noDebounceFlag);
    expect(obj.x).toEqual('<i>foo</i>');
    obj.x = '<b>bar</b>';
    expect(node.innerHTML).toEqual('mapping_<b>bar</b>');
  });
  it('should bind text', function () {
    node.textContent = '<i>foo</i>';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["text"])(), noDebounceFlag);
    expect(obj.x).toEqual('<i>foo</i>');
    obj.x = '<b>bar</b>';
    expect(node.textContent).toEqual('<b>bar</b>');
  });
  it('should bind text and use mapping function', function () {
    node.textContent = '<i>foo</i>';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["text"])(mappingFn), noDebounceFlag);
    expect(obj.x).toEqual('<i>foo</i>');
    obj.x = '<b>bar</b>';
    expect(node.textContent).toEqual('mapping_<b>bar</b>');
  });
  it('should bind style', function () {
    node.style.textAlign = 'center';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["style"])('textAlign'), noDebounceFlag);
    expect(obj.x).toEqual('center');
    obj.x = 'right';
    expect(node.style.textAlign).toEqual('right');
  });
  it('should bind style and use mapping function', function () {
    node.style.background = 'red';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["style"])('background', function (url) {
      return "url(\"".concat(url, "\")");
    }), noDebounceFlag);
    expect(obj.x).toEqual('red');
    obj.x = 'cats.jpg';
    expect(node.style.background.replace(/"/g, '')).toEqual('url(cats.jpg)');
  });
  it('should bind dataset', function () {
    // @IE9
    node.setAttribute('data-foo', 'bar');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["dataset"])('foo'), noDebounceFlag);
    expect(obj.x).toEqual('bar');
    obj.x = 'baz';
    expect(node.getAttribute('data-foo')).toEqual('baz');
  });
  it('should bind dataset and use mapping function', function () {
    // @IE9
    node.setAttribute('data-foo', 'bar');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["dataset"])('foo', mappingFn), noDebounceFlag);
    expect(obj.x).toEqual('bar');
    obj.x = 'baz';
    expect(node.getAttribute('data-foo')).toEqual('mapping_baz');
  });
  it('should bind display', function () {
    node.style.display = 'none';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["display"])(true), noDebounceFlag);
    expect(obj.x).toEqual(false);
    obj.x = true;
    expect(node.style.display).toEqual('');
    node.style.display = 'none';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'y', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["display"])(false), noDebounceFlag);
    expect(obj.y).toEqual(true);
    obj.y = false;
    expect(node.style.display).toEqual('');
  });
  it('should bind className', function () {
    // @IE9
    node.className = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["className"])('foo'), noDebounceFlag);
    expect(obj.x).toEqual(true);
    obj.x = false;
    expect(node.className).toEqual('');
    node.className = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["className"])('foo', false), noDebounceFlag);
    expect(obj.x).toEqual(false);
    obj.x = true;
    expect(node.className).toEqual('');
  });
});

/***/ }),

/***/ "./spec/bindings/bindings_parser_spec.js":
/*!***********************************************!*\
  !*** ./spec/bindings/bindings_parser_spec.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_parsebindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/parsebindings */ "../src/parsebindings/index.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var src_parserbrackets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/parserbrackets */ "../src/parserbrackets.js");
/* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */



var noDebounceFlag = {
  debounceSetValue: false,
  debounceGetValue: false
};

function parse(html) {
  var node = window.document.createElement('div');
  node.innerHTML = html;
  return node.children[0];
}

describe('Bindings parser', function () {
  it('should parse inner content', function () {
    var node = parse('<span>{{x}}</span>');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    expect(node.textContent).toEqual(obj.x);
  });
  it('should parse inner content with spaces', function () {
    var node = parse('<span>{{  x  }}</span>');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    expect(node.textContent).toEqual(obj.x);
  });
  it('should parse inner content and keep node empty if property value is not given', function () {
    var node = parse('<span>{{x}}</span>');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    expect(node.textContent).toEqual('');
  });
  it('should bind complex inner content', function () {
    var node = parse('<span>{{x}} {{y}}</span>');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    obj.y = 'bar';
    expect(node.textContent).toEqual("".concat(obj.x, " ").concat(obj.y));
  });
  it('should bind attributes', function () {
    var node = parse('<a href="{{x}}"></a>');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'bar';
    expect(node.getAttribute('href')).toEqual(obj.x);
  });
  it('should bind complex attributes', function () {
    var node = parse('<a href="{{ x }}/{{ y }}"></a>');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    obj.y = 'bar';
    expect(node.getAttribute('href')).toEqual("".concat(obj.x, "/").concat(obj.y));
  });
  it('should bind inner content in context of an object which has isSeemple=true property', function () {
    var node = parse('<span>{{x}}</span>');
    var obj = {
      isSeemple: true,
      nodes: {},
      $nodes: {}
    };
    src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj, node, noDebounceFlag);
    obj.x = 'foo';
    expect(node.textContent).toEqual(obj.x);
  });
  it('should bind input value', function () {
    var node = parse('<input value="{{x}}">');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    expect(node.value).toEqual(obj.x);
  });
  it('should bind input value with type=text attribute (bugfix)', function () {
    var node = parse('<input type="text" value="{{x}}">');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    expect(node.value).toEqual(obj.x);
  });
  it('should bind select value (bugfix)', function () {
    var node = parse("<select value=\"{{x}}\">\n            <option selected value=\"bar\">bar</option>\n            <option value=\"foo\">foo</option>\n        </select>");
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    expect(node.value).toEqual(obj.x);
  });
  it('should bind complex input value', function () {
    var node = parse('<input value="{{x}} {{y}}">');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    obj.x = 'bar';
    expect(node.value).toEqual("".concat(obj.x, " ").concat(obj.y));
  });
  it('should bind input=checkbox checked', function () {
    var node = parse('<input type="checkbox" checked="{{x}}">');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = true;
    expect(node.checked).toEqual(obj.x);
  });
  it('should bind input=checkbox is not checked (bugfix)', function () {
    var node = parse('<input type="checkbox" checked="{{x}}">');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = false;
    expect(node.checked).toEqual(obj.x);
  });
  it('should bind textarea value', function () {
    var node = parse('<textarea value="{{x}}"></textarea>');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    expect(node.value).toEqual(obj.x);
  });
  it("shouldnt create additional properties\n        (complex node values require to create hidden computable property)", function () {
    var node = parse('<input value="{{x}} and {{y}}">');
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    obj.y = 'bar';
    expect(node.value).toEqual("".concat(obj.x, " and ").concat(obj.y));
    expect(Object.keys(obj)).toEqual(['x', 'y']);
  });
  it('should bind nested nodes', function () {
    var node = parse("\n            <div>{{x}}\n                <input value=\"{{y}}\">\n                <span>\n                    <span>\n                        <span data-qux=\"hey {{z}}\"></span>\n                    </span>\n                </span>\n            </div>\n        ");
    var obj = {};
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    obj.y = 'bar';
    obj.z = 'baz';
    expect(node.innerHTML.indexOf(obj.x)).toEqual(0);
    expect(node.querySelector('input').value).toEqual(obj.y);
    expect(node.querySelector('[data-qux]').getAttribute('data-qux')).toEqual("hey ".concat(obj.z));
    expect(Object.keys(obj).sort()).toEqual(['x', 'y', 'z']);
  });
  it('should bind nested nodes and nested properties', function () {
    var node = parse("\n            <div>{{a.b}}\n                <input value=\"{{c.d}}\">\n                <span>\n                    <span>\n                        <span data-qux=\"hey {{e.f}}\"></span>\n                    </span>\n                </span>\n            </div>\n        ");
    var obj = {
      a: {
        b: 1
      },
      c: {
        d: 2
      },
      e: {
        f: 2
      }
    };
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.a.b = 'foo';
    obj.c.d = 'bar';
    obj.e.f = 'baz';
    expect(node.innerHTML.indexOf(obj.a.b)).toEqual(0);
    expect(node.querySelector('input').value).toEqual(obj.c.d);
    expect(node.querySelector('[data-qux]').getAttribute('data-qux')).toEqual("hey ".concat(obj.e.f));
  });
  it('works when brackets are redefined', function () {
    var node = parse('<input value="[[x]] bar">');
    var obj = {};
    src_parserbrackets__WEBPACK_IMPORTED_MODULE_2__["default"].left = '[[';
    src_parserbrackets__WEBPACK_IMPORTED_MODULE_2__["default"].right = ']]';
    Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, node, noDebounceFlag);
    obj.x = 'foo';
    expect(node.value).toEqual("".concat(obj.x, " bar"));
    src_parserbrackets__WEBPACK_IMPORTED_MODULE_2__["default"].left = '{{';
    src_parserbrackets__WEBPACK_IMPORTED_MODULE_2__["default"].right = '}}';
  });
  it('accepts HTML', function () {
    var obj = {};
    var result = Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, '<span>{{x}}</span>', noDebounceFlag);
    obj.x = 'foo';
    expect(result[0].textContent).toEqual(obj.x);
  });
  it('accepts selector', function () {
    var obj = {};
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'y', '<span>{{x}}</span>', noDebounceFlag);
    var result = Object(src_parsebindings__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, ':bound(y)', noDebounceFlag);
    obj.x = 'foo';
    expect(result[0].textContent).toEqual(obj.x);
  });
});

/***/ }),

/***/ "./spec/bindings/bindings_spec.js":
/*!****************************************!*\
  !*** ./spec/bindings/bindings_spec.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var src_bindoptionalnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/bindoptionalnode */ "../src/bindoptionalnode.js");
/* harmony import */ var src_bindsandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/bindsandbox */ "../src/bindsandbox.js");
/* harmony import */ var src_unbindnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/unbindnode */ "../src/unbindnode/index.js");
/* harmony import */ var src_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/select */ "../src/select.js");
/* harmony import */ var src_selectall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/selectall */ "../src/selectall.js");
/* harmony import */ var src_on_addlistener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, no-shadow, max-lines, import/extensions */









describe('Bindings', function () {
  var noDebounceFlag = {
    debounceSetValue: false,
    debounceGetValue: false
  };
  var _window = window,
      document = _window.document;
  var obj;
  var node;
  var binder;
  var initializeCall;
  var destroyCall;

  var testSimpleBind = function testSimpleBind() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
    obj[key] = 'foo';
    expect(node.value).toEqual('foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj[key]).toEqual('bar');
    expect(initializeCall).toHaveBeenCalled();
  };

  var testSimpleUnbind = function testSimpleUnbind() {
    obj.x = 'foo';
    expect(node.value).toEqual('');
    node.value = 'baz';
    node.ondummyevent();
    expect(obj.x).toEqual('foo');
    expect(destroyCall).toHaveBeenCalled();
  };

  beforeEach(function () {
    obj = {};
    node = document.createElement('div');
    initializeCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    destroyCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    binder = {
      on: function on(cbc) {
        this.ondummyevent = cbc;
      },
      getValue: function getValue() {
        return this.value;
      },
      setValue: function setValue(value) {
        this.value = value;
      },
      initialize: function initialize() {
        this.value = this.value || '';
        initializeCall();
      },
      destroy: function destroy() {
        destroyCall();
      }
    };
  });
  it('should handle debounceSetValueOnBind=true', function (done) {
    obj.x = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, {
      debounceSetValueOnBind: true
    });
    expect(node.value).toEqual('');
    setTimeout(function () {
      expect(node.value).toEqual('foo');
      done();
    }, 50);
  });
  it('should handle debounceGetValueOnBind=true', function (done) {
    node.value = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, {
      debounceGetValueOnBind: true
    });
    expect(obj.x).toEqual(undefined);
    setTimeout(function () {
      expect(obj.x).toEqual('foo');
      done();
    }, 50);
  });
  it('should handle debounceSetValue=true (use default value)', function (done) {
    obj.x = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder);
    expect(node.value).toEqual('foo');
    obj.x = 'bar';
    expect(node.value).toEqual('foo');
    setTimeout(function () {
      expect(node.value).toEqual('bar');
      done();
    }, 50);
  });
  it('should handle debounceGetValue=true (use default value)', function (done) {
    node.value = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder);
    expect(obj.x).toEqual('foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj.x).toEqual('foo');
    setTimeout(function () {
      expect(obj.x).toEqual('bar');
      done();
    }, 50);
  });
  xit('should bind and use DOM events', function () {});
  xit('handle option setOnBind=true', function () {});
  xit('handle option getOnBind=true', function () {});
  xit('handle option setOnBind=false', function () {});
  xit('handle option getOnBind=false', function () {});
  it('should bind and trigger events', function () {
    var bindCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    var bindKeyCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_6__["default"])(obj, 'bind', bindCall);
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_6__["default"])(obj, 'bind:x', bindKeyCall);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    testSimpleBind();
    expect(bindCall).toHaveBeenCalled();
    expect(bindKeyCall).toHaveBeenCalled();
  });
  it('should unbind and trigger events', function () {
    var unbindCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    var unbindKeyCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_6__["default"])(obj, 'unbind', unbindCall);
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_6__["default"])(obj, 'unbind:x', unbindKeyCall);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', node);
    testSimpleUnbind();
    expect(unbindCall).toHaveBeenCalled();
    expect(unbindKeyCall).toHaveBeenCalled();
  });
  it('should bind using key-node object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: node
    }, binder, noDebounceFlag);
    testSimpleBind();
  });
  it('should bind using key-binding object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: {
        node: node,
        binder: binder
      }
    }, null, noDebounceFlag);
    testSimpleBind();
  });
  it('should bind using key-bindingsarray object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: [{
        node: node,
        binder: binder
      }]
    }, null, noDebounceFlag);
    testSimpleBind();
  });
  it('should bind using key-binding object and use common binder', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: {
        node: node
      }
    }, binder, noDebounceFlag);
    testSimpleBind();
  });
  it('should bind using key-bindingsarray object and use common binder', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: [{
        node: node
      }]
    }, binder, noDebounceFlag);
    testSimpleBind();
  });
  it('should not unbind when wrong node is given', function () {
    var wrongNode = document.createElement('div');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', wrongNode);
    testSimpleBind();
  });
  it('should not unbind when wrong key is given', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'y', node);
    testSimpleBind();
  });
  it('should unbind when node is not given', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x');
    testSimpleUnbind();
  });
  it('should unbind all when neither key nor node is given', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
    testSimpleUnbind();
  });
  it('should unbind using key-node object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: node
    }, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, {
      x: node
    });
    testSimpleUnbind();
  });
  it('should unbind using key-binding object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: {
        node: node,
        binder: binder
      }
    }, null, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, {
      x: {
        node: node,
        binder: binder
      }
    });
    testSimpleUnbind();
  });
  it('should unbind using key-bindingsarray object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: [{
        node: node,
        binder: binder
      }]
    }, null, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, {
      x: [{
        node: node,
        binder: binder
      }]
    });
    testSimpleUnbind();
  });
  it('should bind using an array of objects', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, [{
      key: 'x',
      node: node,
      binder: binder
    }], noDebounceFlag);
    testSimpleBind();
  });
  it('should unbind using an array of objects', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, [{
      key: 'x',
      node: node,
      binder: binder
    }], noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, [{
      key: 'x',
      node: node
    }]);
    testSimpleUnbind();
  });
  it('should bind a property in context object which has isSeemple=true property', function () {
    obj = {
      isSeemple: true,
      nodes: {},
      $nodes: {}
    };
    src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj, 'x', node, binder, noDebounceFlag);
    testSimpleBind();
    expect(obj.nodes.x).toEqual(node);
    expect(Array.from(obj.$nodes.x)).toEqual([node]);
  });
  it('should unbind a property in context object which has isSeemple=true property', function () {
    obj = {
      isSeemple: true,
      nodes: {},
      $nodes: {}
    };
    src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj, 'x', node, binder, noDebounceFlag);
    src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"].call(obj, 'x', node);
    testSimpleUnbind();
    expect(obj.nodes.x).toBeUndefined();
    expect(obj.$nodes.x).toBeUndefined();
  });
  it('should bind delegated target', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_7__["default"])('x.y');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x.y.z', node, binder, noDebounceFlag);
    obj.x.y.z = 'foo';
    expect(node.value).toEqual('foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj.x.y.z).toEqual('bar');
  });
  it('should unbind delegated target', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_7__["default"])('x.y');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x.y.z', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x.y.z', node);
    obj.x.y.z = 'foo';
    expect(node.value).toEqual('');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj.x.y.z).toEqual('foo');
  });
  it('cancels delegated binding when exactKey=true option is passed', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x.y.z', node, binder, Object.assign({
      exactKey: true
    }, noDebounceFlag));
    testSimpleBind('x.y.z');
  });
  it('should rebind delegated target', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_7__["default"])('u.x.y.z', 'go');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'u.x.y.z', node, binder, noDebounceFlag);
    obj.u.x = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_7__["default"])('y.z', 'foo');
    expect(node.value).toEqual('foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj.u.x.y.z).toEqual('bar');
  });
  it('should remove binding if delegated target is reassigned', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_7__["default"])('u.x.y');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'u.x.y.z', node, binder, noDebounceFlag);
    var x = obj.u.x;
    obj.u.x = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_7__["default"])('y.z', 'foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(x.y.z).not.toEqual('bar');
    expect(obj.u.x.y.z).toEqual('bar');
    x.y.z = 'baz';
    expect(node.value).toEqual('bar');
  });
  it('uses custom selectors on current target', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_7__["default"])('x.y', 'foo');
    var childNode = node.appendChild(document.createElement('span'));
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'sandbox', node);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x.y', ':sandbox span', binder, noDebounceFlag);
    expect(childNode.value).toEqual('foo');
    childNode.value = 'bar';
    childNode.ondummyevent();
    expect(obj.x.y).toEqual('bar');
  });
  it('throws error when node is not there', function () {
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x');
    }).toThrow();
  });
  it('does not throw error when node is not there and optional=true is given', function () {
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', undefined, undefined, {
        optional: true
      });
    }).not.toThrow();
  });
  it('doesn\'t throw error with bindOptionalNode method of Seemple when node is missing', function () {
    expect(function () {
      Object(src_bindoptionalnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x');
    }).not.toThrow();
  });
  it('doesn\'t throw error with bindOptionalNode method of' + ' Seemple when node is missing (an object is used)', function () {
    expect(function () {
      Object(src_bindoptionalnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, {
        x: null,
        y: undefined
      });
    }).not.toThrow();
  });
  it('selects children of sandbox', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'sandbox', "<div>\n                <div>\n                    <span attr=\"foo\"></span>\n                </div>\n            </div>\n        ");
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'span').getAttribute('attr')).toEqual('foo');
    expect(Object(src_selectall__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, 'span')[0].getAttribute('attr')).toEqual('foo');
  });
  it('selects nodes with custom selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'sandbox', "<div>\n                <div>\n                    <span attr=\"foo\"></span>\n                </div>\n            </div>\n        ");
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, ':sandbox span').getAttribute('attr')).toEqual('foo');
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, ':bound(sandbox) span').getAttribute('attr')).toEqual('foo');
    expect(Object(src_selectall__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(sandbox) span')[0].getAttribute('attr')).toEqual('foo');
    expect(Object(src_selectall__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':sandbox span')[0].getAttribute('attr')).toEqual('foo');
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, ':sandbox table')).toEqual(null);
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, ':bound(sandbox) table')).toEqual(null);
    expect(Array.from(Object(src_selectall__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(sandbox) table'))).toEqual([]);
    expect(Array.from(Object(src_selectall__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':sandbox table'))).toEqual([]);
  });
  it('allows to bind and rebind sandbox via bindSandbox', function () {
    var obj = {
      isSeemple: true,
      nodes: {},
      $nodes: {}
    };
    var anotherNode = document.createElement('div');
    src_bindsandbox__WEBPACK_IMPORTED_MODULE_2__["default"].call(obj, node, noDebounceFlag);
    src_bindsandbox__WEBPACK_IMPORTED_MODULE_2__["default"].call(obj, anotherNode, noDebounceFlag);
    expect(Array.from(Object(src_selectall__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(sandbox)'))).toEqual([anotherNode]);
  });
  it('bindSandbox throws an error when node is missing', function () {
    var obj = {
      isSeemple: true,
      nodes: {},
      $nodes: {}
    };
    expect(function () {
      src_bindsandbox__WEBPACK_IMPORTED_MODULE_2__["default"].call(obj);
    }).toThrow();
  });
  it('does not allow to bind more than two nodes to "sandbox"', function () {
    var obj = {};
    var node1 = document.createElement('div');
    var node2 = document.createElement('div');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'sandbox', node1);
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'sandbox', node2);
    }).toThrow();
  });
  it("does not allow to bind more than two nodes to \"container\"\n        when an object has a property isSeempleArray=true", function () {
    var obj = {
      isSeempleArray: true
    };
    var node1 = document.createElement('div');
    var node2 = document.createElement('div');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'container', node1);
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'container', node2);
    }).toThrow();
  });
});

/***/ }),

/***/ "./spec/bindings/default_binders_spec.js":
/*!***********************************************!*\
  !*** ./spec/bindings/default_binders_spec.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_binders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/binders */ "../src/binders/index.js");
/* harmony import */ var src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lookforbinder */ "../src/lookforbinder.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */



describe('Default binders', function () {
  var noDebounceFlag = {
    debounceSetValue: false,
    debounceGetValue: false
  };
  var obj;
  beforeEach(function () {
    jasmine.addMatchers({
      bindersEqual: function bindersEqual(util, customEqualityTesters) {
        return {
          compare: function compare(actual, expected) {
            var result = {};
            var pass = result.pass = util.equals(actual.on, expected.on, customEqualityTesters) && util.equals("".concat(actual.getValue), "".concat(expected.getValue), customEqualityTesters) && util.equals("".concat(actual.setValue), "".concat(expected.setValue), customEqualityTesters);
            result.message = pass ? 'Binders are equal' : 'Binders are not equal';
            return result;
          }
        };
      }
    });
    obj = {};
  });
  it('should bind textarea', function () {
    var node = window.document.createElement('textarea');
    node.value = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["textarea"])(), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.value).toEqual('bar');
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["textarea"])());
  });
  it('should bind progress', function () {
    var node = window.document.createElement('progress');
    node.max = 3;
    node.value = 1;
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["progress"])(), noDebounceFlag);
    expect(obj.x).toEqual(1);
    obj.x = 2;
    expect(node.value).toEqual(2);
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["progress"])());
  });
  it('should bind text input', function () {
    var node = window.document.createElement('input');
    node.type = 'text';
    node.value = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["input"])('text'), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.value).toEqual('bar');
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["input"])('text'));
  });
  it('should bind output', function () {
    var node = window.document.createElement('output');
    node.innerHTML = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["output"])(), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.innerHTML).toEqual('bar');
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["output"])());
  });
  it('should bind select', function () {
    var node = window.document.createElement('select');

    for (var i = 0; i < 10; i++) {
      var option = node.appendChild(window.document.createElement('option'));
      option.value = "".concat(i);

      if (i === 1) {
        option.selected = true;
      }
    }

    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["select"])(), noDebounceFlag);
    expect(obj.x).toEqual('1');
    obj.x = '5';
    expect(node.value).toEqual('5');
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["select"])());
  });
  it('should bind select (multiple)', function () {
    var node = window.document.createElement('select');
    node.multiple = true;

    for (var i = 0; i < 10; i++) {
      var option = node.appendChild(window.document.createElement('option'));
      option.value = "".concat(i);

      if (i === 1 || i === 4 || i === 7) {
        option.selected = true;
      }
    }

    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["select"])(true), noDebounceFlag);
    expect(obj.x).toEqual(['1', '4', '7']);
    obj.x = ['2', '5', '8'];

    for (var _i = 0; _i < 10; _i++) {
      expect(node.options[_i].selected).toEqual(_i === 2 || _i === 5 || _i === 8);
    }

    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["select"])(true));
  });
});

/***/ }),

/***/ "./spec/bindings/existence_binder_spec.js":
/*!************************************************!*\
  !*** ./spec/bindings/existence_binder_spec.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var src_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/select */ "../src/select.js");
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var src_binders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/binders */ "../src/binders/index.js");





/* eslint-disable import/no-extraneous-dependencies, import/extensions */




describe('Existence binder', function () {
  var noDebounceFlag = {
    debounceSetValue: false,
    debounceGetValue: false
  };
  var obj;
  var node;
  var parent;
  beforeEach(function () {
    obj = {};
    node = window.document.createElement('div');
    node.innerHTML = '<div><i class="foo" id="foo"></i></div>';
    parent = window.document.createElement('div');
    parent.appendChild(node);
  });
  it('should allow to use exitence binder', function () {
    node.id = 'foo';
    node.className = 'bar baz';
    obj.x = false;
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_7__["existence"])(), noDebounceFlag);
    expect(parent.childNodes.length).toEqual(1);
    expect(parent.childNodes[0].nodeName).toEqual('#comment');
    expect(parent.childNodes[0].nodeValue).toEqual('DIV#foo.bar.baz');
    obj.x = true;
    expect(parent.childNodes.length).toEqual(1);
    expect(parent.childNodes[0].tagName).toEqual('DIV');
    obj.x = false; // try again

    expect(parent.childNodes.length).toEqual(1);
    expect(parent.childNodes[0].nodeName).toEqual('#comment');
    expect(parent.childNodes[0].nodeValue).toEqual('DIV#foo.bar.baz');
    obj.x = true; // try again

    expect(parent.childNodes.length).toEqual(1);
    expect(parent.childNodes[0].tagName).toEqual('DIV');
  });
  it('should allow to use exitence binder with reverse behavior', function () {
    node.id = 'foo';
    node.className = 'bar baz';
    obj.x = false;
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_7__["existence"])(false), noDebounceFlag);
    expect(parent.childNodes.length).toEqual(1);
    expect(parent.childNodes[0].nodeName).toEqual('DIV');
    obj.x = true;
    expect(parent.childNodes.length).toEqual(1);
    expect(parent.childNodes[0].nodeName).toEqual('#comment');
    expect(parent.childNodes[0].nodeValue).toEqual('DIV#foo.bar.baz');
    obj.x = false; // try again

    expect(parent.childNodes.length).toEqual(1);
    expect(parent.childNodes[0].nodeName).toEqual('DIV');
    obj.x = true; // try again

    expect(parent.childNodes.length).toEqual(1);
    expect(parent.childNodes[0].nodeName).toEqual('#comment');
    expect(parent.childNodes[0].nodeValue).toEqual('DIV#foo.bar.baz');
  });
  it('should allow to select nodes inside original element', function () {
    obj.x = false;
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_7__["existence"])(), noDebounceFlag);
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(x)')).toEqual(node);
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(x) .foo').id).toEqual('foo');
    obj.x = true;
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(x)')).toEqual(node);
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(x) .foo').id).toEqual('foo');
    obj.x = false;
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(x)')).toEqual(node);
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, ':bound(x) .foo').id).toEqual('foo');
  });
  it('should be possible to bind array item and manipulate with an array', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_6__["default"]();
    arr.itemRenderer = '<div class="child"></div>';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_4__["default"])(arr, 'sandbox', '<div class="parent"></div>');
    arr.push({
      x: 3,
      exists: true
    }, {
      x: 1,
      exists: false
    }, {
      x: 5,
      exists: true
    }, {
      x: 2,
      exists: false
    }, {
      x: 4,
      exists: true
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        Object(src_bindnode__WEBPACK_IMPORTED_MODULE_4__["default"])(item, 'exists', ':sandbox', Object(src_binders__WEBPACK_IMPORTED_MODULE_7__["existence"])(), noDebounceFlag);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    expect(Array.from(arr.nodes.sandbox.childNodes).map(function (_ref) {
      var nodeName = _ref.nodeName;
      return nodeName;
    })).toEqual(['DIV', '#comment', 'DIV', '#comment', 'DIV']);
    arr.sort(function (a, b) {
      return a.x > b.x ? 1 : -1;
    });
    arr.sort(function (a, b) {
      return a.x > b.x ? 1 : -1;
    });
    expect(Array.from(arr.nodes.sandbox.childNodes).map(function (_ref2) {
      var nodeName = _ref2.nodeName;
      return nodeName;
    })).toEqual(['#comment', '#comment', 'DIV', 'DIV', 'DIV']);
    arr.reverse();
    expect(Array.from(arr.nodes.sandbox.childNodes).map(function (_ref3) {
      var nodeName = _ref3.nodeName;
      return nodeName;
    })).toEqual(['DIV', 'DIV', 'DIV', '#comment', '#comment']);
    arr[0].exists = false;
    arr[4].exists = true;
    expect(Array.from(arr.nodes.sandbox.childNodes).map(function (_ref4) {
      var nodeName = _ref4.nodeName;
      return nodeName;
    })).toEqual(['#comment', 'DIV', 'DIV', '#comment', 'DIV']);
  });
  it('allows to move sandbox across arrays', function () {
    var Arr =
    /*#__PURE__*/
    function (_SeempleArray) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Arr, _SeempleArray);

      function Arr() {
        var _getPrototypeOf2;

        var _this;

        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Arr);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Arr)).call.apply(_getPrototypeOf2, [this].concat(args)))).bindNode('sandbox', '<div data-foo="bar"></div>');

        return _this;
      }

      return Arr;
    }(src_array__WEBPACK_IMPORTED_MODULE_6__["default"]);

    var arr = new Arr();
    var arr2 = new Arr();
    var obj = {
      exists: true
    }; // eslint-disable-line no-shadow

    arr.itemRenderer = arr2.itemRenderer = '<div><span></span></div>';
    arr.push(obj);
    var arrItemNode = arr.nodes.sandbox.childNodes[0];
    expect(arrItemNode.nodeName).toEqual('DIV');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'exists', ':sandbox', Object(src_binders__WEBPACK_IMPORTED_MODULE_7__["existence"])(), noDebounceFlag);
    obj.exists = false;
    var replacedBy = arr.nodes.sandbox.childNodes[0];
    expect(replacedBy.nodeName).toEqual('#comment');
    arr2.push_(obj, {
      moveSandbox: true
    });
    expect(arr2.nodes.sandbox.childNodes[0]).toEqual(replacedBy);
    obj.exists = true;
    expect(arr2.nodes.sandbox.childNodes[0]).toEqual(arrItemNode);
  });
});

/***/ }),

/***/ "./spec/calc_spec.js":
/*!***************************!*\
  !*** ./spec/calc_spec.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/calc */ "../src/calc/index.js");
/* harmony import */ var src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/createspy */ "./helpers/createspy.js");



/* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */




var noDebounceFlag = {
  debounceCalc: false
};

var delay = function delay(duration) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, duration);
  });
};

describe('calc', function () {
  it('adds simple dependency', function () {
    var obj = {
      a: 1,
      b: 2
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, noDebounceFlag);
    expect(obj.c).toEqual(3);
    obj.a = 3;
    expect(obj.c).toEqual(5);
    obj.b = 3;
    expect(obj.c).toEqual(6);
  });
  it('adds simple dependency in context of an object which includes' + ' isSeemple=true property', function () {
    var obj = {
      isSeemple: true,
      a: 1,
      b: 2
    };
    src_calc__WEBPACK_IMPORTED_MODULE_2__["default"].call(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, noDebounceFlag);
    expect(obj.c).toEqual(3);
    obj.a = 3;
    expect(obj.c).toEqual(5);
    obj.b = 3;
    expect(obj.c).toEqual(6);
  });
  it('adds dependency from another object', function () {
    var obj = {
      a: 1,
      b: 2
    };
    var obj2 = {
      c: 4,
      d: 8
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'e', [{
      object: obj,
      key: ['a', 'b']
    }, {
      object: obj2,
      key: ['c', 'd']
    }], function (a, b, c, d) {
      return a + b + c + d;
    }, noDebounceFlag);
    expect(obj.e).toEqual(15);
  });
  it('allows to pass an object of calcs', function () {
    var obj = {
      a: 1,
      b: 2,
      g: 16
    };
    var obj2 = {
      c: 4,
      d: 8
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, {
      e: {
        source: ['a', 'b', {
          object: obj2,
          key: ['c', 'd']
        }],
        handler: function handler(a, b, c, d) {
          return a + b + c + d;
        }
      },
      f: {
        source: 'g'
      },
      g: {
        source: 'f'
      }
    }, noDebounceFlag);
    expect(obj.e).toEqual(15);
    expect(obj.f).toEqual(16);
    expect(obj.g).toEqual(16);
  });
  it('does not set on init via setOnInit=false', function () {
    var obj = {
      a: 1,
      b: 2,
      c: 0
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, {
      setOnInit: false,
      debounceCalc: false
    });
    expect(obj.c).toEqual(0);
  });
  it('protects from cyclical links', function () {
    var obj = {
      a: 1,
      b: 2,
      c: 3
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'a', ['b', 'c'], function (x, y) {
      return x + y;
    }, noDebounceFlag);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'b', ['a', 'c'], function (x, y) {
      return x + y;
    }, noDebounceFlag);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (x, y) {
      return x + y;
    }, noDebounceFlag);
    expect(obj.a).toEqual(27);
  });
  xit('throws error when target is not a string', function () {});
  xit('throws error when source is not an object', function () {});
  xit('throws error when source key is not a string', function () {});
  xit('throws error when source object is not an object', function () {});
  it('allows delegated dependencies', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.c', 1);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'd', 'a.b.c', function (c) {
      return c;
    }, noDebounceFlag);
    expect(obj.d).toEqual(1);
    obj.a.b.c = 2;
    expect(obj.d).toEqual(2);
    var b = obj.a.b;
    obj.a.b = {
      c: 3
    };
    b.c = 'nope';
    expect(obj.d).toEqual(3);
    var a = obj.a;
    obj.a = {
      b: {
        c: 4
      }
    };
    a.b = {
      c: 'nope'
    };
    expect(obj.d).toEqual(4);
  });
  it('allows delegated dependencies from another object', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a', 1);
    var obj2 = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('b.c.d', 2);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'd', {
      object: obj2,
      key: 'b.c.d'
    }, function (c) {
      return c * 2;
    });
    expect(obj.d).toEqual(4);
  });
  it('allows to cancel delegated dependencies by exactKey=true option', function () {
    var obj = {
      'a.b.c': 1,
      'd.e.f': 2
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a.b.c', 'd.e.f'], function (abc, def) {
      return abc + def;
    }, {
      debounceCalc: false,
      exactKey: true
    });
    expect(obj.c).toEqual(3);
    obj['a.b.c'] = 3;
    expect(obj.c).toEqual(5);
    obj['d.e.f'] = 3;
    expect(obj.c).toEqual(6);
  });
  it('uses event options', function () {
    var obj = {};
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])(function (evt) {
      return expect(evt.foo).toEqual('bar');
    });
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, {
      foo: 'bar',
      debounceCalc: false
    });
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:c', handler);
    obj.a = 2;
    obj.b = 3;
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('uses silent=true from event options', function () {
    var obj = {};
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:c', handler);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, {
      silent: true
    });
    obj.a = 2;
    obj.b = 3;
    expect(handler).not.toHaveBeenCalled();
  });
  it('allows to debounce handler via debounceCalc=true (use default value)', function (done) {
    var obj = {
      a: 1,
      b: 2
    };
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
      expect(obj.c).toEqual(firstCall ? 3 : 5);
    });
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:c', handler); // we'e going to handle the first call separately because debounceCalcOnInit is always true

    var firstCall = true;
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    });
    firstCall = false;
    obj.a = 0;
    obj.a = 1;
    obj.a = 2;
    obj.b = 0;
    obj.b = 1;
    obj.b = 2;
    obj.b = 3;
    setTimeout(function () {
      expect(handler).toHaveBeenCalledTimes(2);
      done();
    }, 400);
  });
  it('allows to debounce handler on init via debounceCalcOnInit=true', function (done) {
    var obj = {
      a: 1,
      b: 2
    };
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
      expect(obj.c).toEqual(3);
      done();
    });
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:c', handler);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, {
      debounceCalcOnInit: true
    });
    expect(obj.c).toEqual(undefined);
    expect(handler).not.toHaveBeenCalled();
  });
  it('allows to use promises via promiseCalc',
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(done) {
      var obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              obj = {
                a: 1,
                b: 2
              };
              Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
                return new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(a + b);
                  }, 10);
                });
              }, {
                promiseCalc: true
              });
              expect(obj.c).toEqual(undefined);
              obj.a = 3;
              _context.next = 6;
              return delay(50);

            case 6:
              expect(obj.c).toEqual(5);
              obj.b = 3;
              _context.next = 10;
              return delay(50);

            case 10:
              expect(obj.c).toEqual(6);
              done();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  it('allows to use non-promises when promiseCalc=true',
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(done) {
      var obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              obj = {
                a: 1,
                b: 2
              };
              Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
                return a + b;
              }, {
                promiseCalc: true
              });
              expect(obj.c).toEqual(undefined);
              obj.a = 3;
              _context2.next = 6;
              return delay(50);

            case 6:
              expect(obj.c).toEqual(5);
              obj.b = 3;
              _context2.next = 10;
              return delay(50);

            case 10:
              expect(obj.c).toEqual(6);
              done();

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./spec/chain_spec.js":
/*!****************************!*\
  !*** ./spec/chain_spec.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_chain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/chain */ "../src/chain.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('chain', function () {
  it('has all needed methods', function () {
    var inst = Object(src_chain__WEBPACK_IMPORTED_MODULE_1__["default"])({});
    "on,\n        once,\n        onDebounce,\n        off,\n        trigger,\n        calc,\n        bindNode,\n        unbindNode,\n        bindOptionalNode,\n        bindSandbox,\n        parseBindings,\n        select,\n        selectAll,\n        set,\n        remove,\n        instantiate,\n        mediate".split(/\s*,\s*/).forEach(function (name) {
      expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(inst[name])).toEqual('function');
    });
  });
  it('can call calc and set as proof of chain work', function () {
    var obj = {
      a: 1
    };
    Object(src_chain__WEBPACK_IMPORTED_MODULE_1__["default"])(obj).calc('b', 'a', function (a) {
      return a * 2;
    }, {
      debounceCalc: false
    }).set('a', 2);
    expect(obj.b).toEqual(4);
  });
});

/***/ }),

/***/ "./spec/class_spec.js":
/*!****************************!*\
  !*** ./spec/class_spec.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/class */ "../src/class.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('Class function', function () {
  var symbolIt = typeof Symbol === 'function' ? it : xit;
  it('allows to inherit', function () {
    var A = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({
      a: true
    });
    var B = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({
      b: true,
      "extends": A
    });
    var C = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({
      c: true,
      "extends": B
    });
    var inst = new C();
    expect(inst instanceof A).toBeTruthy();
    expect(inst instanceof B).toBeTruthy();
    expect(inst instanceof C).toBeTruthy();
    expect(inst.a).toBeTruthy();
    expect(inst.b).toBeTruthy();
    expect(inst.c).toBeTruthy();
  });
  symbolIt('allows to inherit symbols', function () {
    var _Class2, _Class3;

    var a = Symbol('a');
    var b = Symbol('b');
    var c = Symbol('c');
    var A = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, a, true));
    var B = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])((_Class2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Class2, b, true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Class2, "extends", A), _Class2));
    var C = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])((_Class3 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Class3, c, true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Class3, "extends", B), _Class3));
    var inst = new C();
    expect(inst[a]).toBeTruthy();
    expect(inst[a]).toBeTruthy();
    expect(inst[c]).toBeTruthy();
  });
  it('allows to pass static props', function () {
    var A = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
      staticProp: true
    });
    expect(A.staticProp).toBeTruthy();
  });
  it('allows to inherit static props', function () {
    var A = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
      staticProp: true
    });
    var B = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({
      "extends": A
    });
    expect(B.staticProp).toBeTruthy();
  });
  symbolIt('allows to pass symbols as static props', function () {
    var staticProp = Symbol('staticProp');
    var A = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, staticProp, true));
    expect(A[staticProp]).toBeTruthy();
  });
  symbolIt('allows to inherit symbols as static props', function () {
    var staticProp = Symbol('staticProp');
    var A = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, staticProp, true));
    var B = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({
      "extends": A
    });
    expect(B[staticProp]).toBeTruthy();
  });
  it('if new Class({}) is called return its instance', function () {
    var inst = new src_class__WEBPACK_IMPORTED_MODULE_1__["default"]({
      a: true
    });
    expect(inst.a).toEqual(true);
    expect(inst instanceof src_class__WEBPACK_IMPORTED_MODULE_1__["default"]).toBeFalsy();
  });
});

/***/ }),

/***/ "./spec/events/asterisk_spec.js":
/*!**************************************!*\
  !*** ./spec/events/asterisk_spec.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* harmony import */ var src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/on/_delegatelistener */ "../src/on/_delegatelistener/index.js");
/* harmony import */ var src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var src_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/trigger */ "../src/trigger/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */






describe('Astrerisk events: delegateListener, undelegateListener', function () {
  it('allows to attatch "*" events to Seemple.Array instance', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.push({});
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj[0], 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('automatically removes "*" delegated event from Seemple.Array instance' + 'if an item is removed', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var item = {};
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.push(item);
    obj.pop();
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(item, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('allows to attatch "*" event to Seemple.Object instance', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.setData('x', {});
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.x, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('automatically removes "*" delegated event from Seemple.Object instance' + ' if an item is removed', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var item = {};
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.setData('x', item);
    obj.remove('x');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(item, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes "*" events from Seemple.Array instance', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.push({});
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, '*', 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj[0], 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes "*" events from Seemple.Object instance', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.setData('x', {});
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, '*', 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.x, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes "*" events from Seemple.Array instance using callback', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.push({});
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, '*', 'someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj[0], 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('does not remove "*" events from Seemple.Array instance when wrong callback is given', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.push({});
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, '*', 'someevent', function () {});
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj[0], 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes "*" events from Seemple.Object instance using callback', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.setData('x', {});
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, '*', 'someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.x, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('does not remove "*" events from Seemple.Object instance when wrong callback is given', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*', 'someevent', handler);
    obj.setData('x', {});
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, '*', 'someevent', function () {});
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.x, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to attatch "*" events to Seemple.Array instance, go deeper (*.a)', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*.a', 'someevent', handler);
    obj.push({
      a: {}
    });
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj[0].a, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to attatch "*" events to Seemple.Object instance, go deeper (*.a)', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*.a', 'someevent', handler);
    obj.setData('x', {
      a: {}
    });
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.x.a, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to attatch "*" events to Seemple.Array instance, go deeper (*.*)', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*.*', 'someevent', handler);
    obj.push(new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]({}));
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj[0][0], 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to attatch "*" events to Seemple.Object instance, go deeper (*.*)', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*.*', 'someevent', handler);
    obj.setData('x', new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]({
      a: {}
    }));
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.x.a, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to attatch "*" events to Seemple.Array instance, go deeper (*.*.a)', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*.*.a', 'someevent', handler);
    obj.push(new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: {}
    }));
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj[0][0].a, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to attatch "*" events to Seemple.Object instance, go deeper (*.*.a)', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, '*.*.a', 'someevent', handler);
    obj.setData('x', new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]({
      y: new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]({
        a: {}
      })
    }));
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.x.y.a, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

/***/ }),

/***/ "./spec/events/delegated_spec.js":
/*!***************************************!*\
  !*** ./spec/events/delegated_spec.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_delegatelistener */ "../src/on/_delegatelistener/index.js");
/* harmony import */ var src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */





describe('Delegated events (delegateListener, undelegateListener)', function () {
  var ctx;
  var handler;
  beforeEach(function () {
    ctx = {};
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
  it('fires (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b, reassign a)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('b');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    obj.a.b = {};
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b.c, reassign a)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('b.c');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b.c, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('c');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b.c, reassign c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a.b.c = {};
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b, reassign a)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    var a = obj.a;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('b');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(a.b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    var b = obj.a.b;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    obj.a.b = {};
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b.c, reassign a)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    var a = obj.a;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('b.c');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b.c, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    var b = obj.a.b;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('c');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b.c, reassign c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    var c = obj.a.c;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a.b.c = {};
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegate (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'someevent');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegate (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('does not remove change event when undelegated (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', function () {});
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'change:c', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent');
    obj.a.b.c = 55;
    expect(handler).toHaveBeenCalled();
  });
  it('undelegates by callback (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegates by callback (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegates by callback and context (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler, ctx);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'someevent', handler, ctx);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegates by callback and context (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler, ctx);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent', handler, ctx);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegates by callback but keeps when callbacks are not same (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'someevent', function () {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('undelegates by callback but keeps when callbacks are not same (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent', function () {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('undelegates by callback but keeps when contexts are not same (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler, {});
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'someevent', handler, {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('undelegates by callback but keeps when contexts are not same (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler, {});
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent', handler, {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('uses correct context for delegated events', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    var bool = false;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', function handle() {
      bool = this === ctx;
    }, ctx);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(bool).toBe(true);
  });
});

/***/ }),

/***/ "./spec/events/events_change_spec.js":
/*!*******************************************!*\
  !*** ./spec/events/events_change_spec.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/on/_delegatelistener */ "../src/on/_delegatelistener/index.js");
/* harmony import */ var src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var src_off_removelistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/off/_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */






describe('Change event (simple and delegated)', function () {
  var handler;
  beforeEach(function () {
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });
  it('fires simple', function () {
    var obj = {
      x: 1
    };
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'change:x', handler);
    obj.x = 2;
    expect(handler).toHaveBeenCalled();
  });
  it('fires delegated (a.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a', 'change:x', handler);
    obj.a.x = 2;
    expect(handler).toHaveBeenCalled();
  });
  it('fires delegated (a.b.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'change:x', handler);
    obj.a.b.x = 2;
    expect(handler).toHaveBeenCalled();
  });
  it('removes simple', function () {
    var obj = {
      x: 1
    };
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'change:x', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:x', handler);
    obj.x = 2;
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated (a.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a', 'change:x', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'a', 'change:x', handler);
    obj.a.x = 2;
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated (a.b.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'change:x', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'a.b', 'change:x', handler);
    obj.a.b.x = 2;
    expect(handler).not.toHaveBeenCalled();
  });
  it('fires delegated (a.b.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'change:x', handler);
    obj.a.b.x = 2;
    expect(handler).toHaveBeenCalled();
  });
  it('accepts null target (a.b.c, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.c.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent', handler);
    expect(function () {
      obj.a.b = null;
    }).not.toThrow();
  });
});

/***/ }),

/***/ "./spec/events/events_core_spec.js":
/*!*****************************************!*\
  !*** ./spec/events/events_core_spec.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off/_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */




describe('Events core (addListener, removeListener, triggerOne)', function () {
  var obj;
  var ctx;
  var handler;
  beforeEach(function () {
    obj = {};
    ctx = {};
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
  it('fires', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('avoids conflicts', function () {
    var i = 0; // eslint-disable-next-line no-return-assign

    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', function () {
      return i += 1e0;
    }); // eslint-disable-next-line no-return-assign

    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', function () {
      return i += 1e1;
    }); // eslint-disable-next-line no-return-assign

    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', function () {
      return i += 1e2;
    });
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(i).toEqual(111);
  });
  it('removes all', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes by name', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes by callback', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes by callback but keeps when callbacks are not same', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent', function () {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('removes by callback and context', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler, ctx);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent', handler, ctx);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes by callback but keeps when contexts are not same', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler, ctx);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent', handler, {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
});

/***/ }),

/***/ "./spec/events/events_dom_spec.js":
/*!****************************************!*\
  !*** ./spec/events/events_dom_spec.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_adddomlistener */ "../src/on/_adddomlistener.js");
/* harmony import */ var src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off/_removedomlistener */ "../src/off/_removedomlistener.js");
/* harmony import */ var src_trigger_triggerdomevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/trigger/_triggerdomevent */ "../src/trigger/_triggerdomevent.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* harmony import */ var _helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");
/* eslint-disable import/no-extraneous-dependencies, no-shadow, import/extensions */






describe('Events core (addDomListener, removeDomListener, triggerDOMListener)', function () {
  var node;
  var obj;
  var handler;
  var childNode;
  var grandchildNode;
  beforeEach(function () {
    obj = {};
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
    node = window.document.body.appendChild(window.document.createElement('div'));
    node.innerHTML = "\n            <div id=\"child\">\n                <div class=\"grandchild\">\n\n                </div>\n            </div>\n        ";
    childNode = node.querySelector('#child');
    grandchildNode = node.querySelector('.grandchild');
  });
  afterEach(function () {
    window.document.body.removeChild(node);
  });
  it('fires with no selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', null, handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(childNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes with no selector', function () {
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', null, handler);
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(childNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('fires using selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('adds using selector and removes with no selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('adds using selector then binds and removes with selector', function () {
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('triggers DOM event', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(function (d1, d2) {
      return expect(d1 + d2).toEqual(3);
    });
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', null, handler);
    Object(src_trigger_triggerdomevent__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', 'click', null, [1, 2]);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('triggers DOM event with specified selector', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(function (d1, d2) {
      return expect(d1 + d2).toEqual(3);
    });
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_trigger_triggerdomevent__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', 'click', '.grandchild', [1, 2]);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('triggers DOM event with specified selector (bubbling test)', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(function (d1, d2) {
      return expect(d1 + d2).toEqual(3);
    });
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', null, handler);
    Object(src_trigger_triggerdomevent__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', 'click', '.grandchild', [1, 2]);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes delegated', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click', '.grandchild');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated and does not remove events from other nodes', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click', '.blah');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

/***/ }),

/***/ "./spec/events/events_summary_spec.js":
/*!********************************************!*\
  !*** ./spec/events/events_summary_spec.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on */ "../src/on/index.js");
/* harmony import */ var src_once__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/once */ "../src/once.js");
/* harmony import */ var src_ondebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/ondebounce */ "../src/ondebounce.js");
/* harmony import */ var src_off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/off */ "../src/off/index.js");
/* harmony import */ var src_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/trigger */ "../src/trigger/index.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");
/* eslint-disable import/no-extraneous-dependencies, no-shadow, max-lines, import/extensions */











describe('Events summary (on, once, onDebounce, off, trigger)', function () {
  var obj;
  var handler;
  var node;
  var childNode;
  var grandchildNode;
  beforeEach(function () {
    obj = {};
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    node = window.document.body.appendChild(window.document.createElement('div'));
    node.innerHTML = "\n            <div id=\"child\">\n                <div class=\"grandchild\">\n\n                </div>\n            </div>\n        ";
    childNode = node.querySelector('#child');
    grandchildNode = node.querySelector('.grandchild');
  });
  afterEach(function () {
    window.document.body.removeChild(node);
  });
  it('fires', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to pass few arguments to trigger', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function (a, b) {
      expect(a).toEqual('foo');
      expect(b).toEqual('bar');
    });
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent', 'foo', 'bar');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('fires work in context of an object which has isSeemple=true property', function () {
    var obj = {
      isSeemple: true
    };
    src_on__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj, 'someevent', handler);
    src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"].call(obj, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes work in context of an object which has isSeemple=true property', function () {
    var obj = {
      isSeemple: true
    };
    src_on__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj, 'someevent', handler);
    src_off__WEBPACK_IMPORTED_MODULE_3__["default"].call(obj, 'someevent');
    src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"].call(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('fires delegated', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_9__["default"])('a.b.c');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c@someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes delegated', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_9__["default"])('a.b.c');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c@someevent', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'a.b.c@someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('fires DOM event with no selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__["default"])(childNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes DOM event with no selector', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'click::x');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, 'x', '#child');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__["default"])(childNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('triggers DOM event using selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x(.grandchild)', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__["default"])(grandchildNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes DOM event using selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x(.grandchild)', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'click::x(.grandchild)');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__["default"])(grandchildNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('triggers DOM event on sandbox using selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, 'sandbox', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::(.grandchild)', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__["default"])(grandchildNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('triggers DOM event via trigger', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function (a, b) {
      return expect(a + b).toEqual(3);
    });
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'click::x', 1, 2);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('fires DOM event using delegated event name', function () {
    var obj = {
      a: {}
    };
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj.a, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a@click::x', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__["default"])(childNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('fires DOM event using asterisk event name', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_6__["default"]({});
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj[0], 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, '*@click::x', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__["default"])(childNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('triggers once', function () {
    Object(src_once__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to pass name-handler object to "once"', function () {
    var handlers = {
      foo: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      bar: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])()
    };
    Object(src_once__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, handlers);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'bar');
    expect(handlers.foo).toHaveBeenCalledTimes(1);
    expect(handlers.bar).toHaveBeenCalledTimes(1);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'bar');
    expect(handlers.foo).toHaveBeenCalledTimes(1);
    expect(handlers.bar).toHaveBeenCalledTimes(1);
  });
  it('triggers once in context of an object which has isSeemple=true property', function () {
    var obj = {
      isSeemple: true
    };
    src_once__WEBPACK_IMPORTED_MODULE_1__["default"].call(obj, 'someevent', handler);
    src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"].call(obj, 'someevent');
    src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"].call(obj, 'someevent');
    src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"].call(obj, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('adds debounced handler via onDebounce', function (done) {
    setTimeout(function () {
      expect(handler).toHaveBeenCalledTimes(1);
      done();
    }, 200);
    Object(src_ondebounce__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
  });
  it('adds debounced handler via onDebounce using context object' + ' which has isSeemple=true property', function (done) {
    var obj = {
      isSeemple: true
    };
    setTimeout(function () {
      expect(handler).toHaveBeenCalledTimes(1);
      done();
    }, 200);
    src_ondebounce__WEBPACK_IMPORTED_MODULE_2__["default"].call(obj, 'someevent', handler);
    src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"].call(obj, 'someevent');
    src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"].call(obj, 'someevent');
    src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"].call(obj, 'someevent');
  });
  it('allows to pass name-handler object to "on" and "off"', function () {
    var handlers = {
      foo: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      bar: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])()
    };
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, handlers);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'bar');
    expect(handlers.foo).toHaveBeenCalledTimes(1);
    expect(handlers.bar).toHaveBeenCalledTimes(1);
    Object(src_off__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, handlers);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'bar');
    expect(handlers.foo).toHaveBeenCalledTimes(1);
    expect(handlers.bar).toHaveBeenCalledTimes(1);
  });
  it('allows to pass name-handler object to "onDebounce"', function (done) {
    var handlers = {
      foo: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      bar: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])()
    };
    setTimeout(function () {
      expect(handlers.foo).toHaveBeenCalledTimes(1);
      expect(handlers.bar).toHaveBeenCalledTimes(1);
      done();
    }, 200);
    Object(src_ondebounce__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, handlers);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'bar');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'bar');
  });
  it('allows to flip context and triggerOnInit (on)', function () {
    var thisArg = {};
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function h() {
      expect(this).toEqual(thisArg);
    });
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'foo', handler, true, thisArg);
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'bar', handler, thisArg, true);
    expect(handler).toHaveBeenCalledTimes(2);
  });
  it('allows to attatch "*" events to Seemple.Array instance', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_6__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, '*@someevent', handler);
    obj.push({});
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj[0], 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to attatch "*" event to Seemple.Object instance', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_7__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, '*@someevent', handler);
    obj.setData('x', {});
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.x, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to pass delay without context to onDebounce instance method', function (done) {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function handler() {
      expect(this).toEqual(obj);
    });
    var obj = {
      isSeemple: true
    };
    setTimeout(function () {
      expect(handler).toHaveBeenCalledTimes(1);
      done();
    }, 200);
    src_ondebounce__WEBPACK_IMPORTED_MODULE_2__["default"].call(obj, 'someevent', handler, 100);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'someevent');
  });
  it('removes all events when off is called with no args', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x', handler);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_5__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'foo', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_10__["default"])(childNode);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'foo');
    expect(handler).not.toHaveBeenCalled();
  });
});

/***/ }),

/***/ "./spec/events/tree_change_spec.js":
/*!*****************************************!*\
  !*** ./spec/events/tree_change_spec.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_addtreelistener */ "../src/on/_addtreelistener.js");
/* harmony import */ var src_off_removetreelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off/_removetreelistener */ "../src/off/_removetreelistener.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */




describe('Tree change events (internal feature)', function () {
  it('should listen tree and should remove listeners from previous subtree', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('a.b.c.d.e');
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c.d.e', handler);
    obj.a.b.c.d.e = {};
    expect(handler).toHaveBeenCalledTimes(1); // once again

    obj.a.b.c.d.e = {};
    expect(handler).toHaveBeenCalledTimes(2);
    var d = obj.a.b.c.d;
    obj.a.b.c.d = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('e');
    d.e = {};
    expect(handler).toHaveBeenCalledTimes(3);
    var c = obj.a.b.c;
    obj.a.b.c = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('d.e');
    c.d = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('e');
    expect(handler).toHaveBeenCalledTimes(4);
    var b = obj.a.b;
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c.d.e');
    b.c = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('d.e');
    expect(handler).toHaveBeenCalledTimes(5);
    var a = obj.a;
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('b.c.d.e');
    a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c.d.e');
    expect(handler).toHaveBeenCalledTimes(6);
    obj.a.b.c.d.e = {};
    expect(handler).toHaveBeenCalledTimes(7);
    obj.a.b.c.d = {};
    expect(handler).toHaveBeenCalledTimes(8);
    obj.a.b.c = {};
    expect(handler).toHaveBeenCalledTimes(9);
    obj.a.b = {};
    expect(handler).toHaveBeenCalledTimes(10);
    obj.a = {};
    expect(handler).toHaveBeenCalledTimes(11);
    obj.a.b = {};
    expect(handler).toHaveBeenCalledTimes(12);
    obj.a.b.c = {};
    expect(handler).toHaveBeenCalledTimes(13);
    obj.a.b.c.d = {};
    expect(handler).toHaveBeenCalledTimes(14);
    obj.a.b.c.d.e = {};
    expect(handler).toHaveBeenCalledTimes(15);
    obj.a = {};
    expect(handler).toHaveBeenCalledTimes(16);
  });
  it('should remove tree listener by callback', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('a.b.c');
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', handler);
    Object(src_off_removetreelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', handler);
    obj.a.b.c = {};
    expect(handler).not.toHaveBeenCalled();
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c');
    expect(handler).not.toHaveBeenCalled();
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('b.c');
    expect(handler).not.toHaveBeenCalled();
  });
  it('should remove tree listener without callback', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('a.b.c');
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', handler);
    Object(src_off_removetreelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c');
    obj.a.b.c = {};
    expect(handler).not.toHaveBeenCalled();
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c');
    expect(handler).not.toHaveBeenCalled();
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('b.c');
    expect(handler).not.toHaveBeenCalled();
  });
  it('should not remove tree listener by wrong callback', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('a.b.c');
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', handler);
    Object(src_off_removetreelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', function () {});
    obj.a.b.c = {};
    expect(handler).toHaveBeenCalledTimes(1);
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c');
    expect(handler).toHaveBeenCalledTimes(2);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('b.c');
    expect(handler).toHaveBeenCalledTimes(3);
  });
});

/***/ }),

/***/ "./spec/instantiate_spec.js":
/*!**********************************!*\
  !*** ./spec/instantiate_spec.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_instantiate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/instantiate */ "../src/instantiate.js");
/* harmony import */ var src_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/class */ "../src/class.js");
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/array */ "../src/array/index.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */




describe('instantiate', function () {
  it('allows to instantiate a property', function () {
    var obj = {
      x: {
        a: 42
      }
    };

    var X = function X(data) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, X);

      this.a = data.a;
    };

    Object(src_instantiate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', X);
    expect(obj.x.constructor).toEqual(X);
    expect(obj.x.a).toEqual(42);
  });
  it('instantiates in context of an object which has isSeemple=true property', function () {
    var obj = {
      isSeemple: true,
      x: {
        a: 42
      }
    };

    var X = function X(data) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, X);

      this.a = data.a;
    };

    src_instantiate__WEBPACK_IMPORTED_MODULE_1__["default"].call(obj, 'x', X);
    expect(obj.x.constructor).toEqual(X);
    expect(obj.x.a).toEqual(42);
  });
  it('allows to pass key-class object', function () {
    var obj = {
      x: {
        a: 1
      },
      y: {
        b: 2
      }
    };

    var X = function X(data) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, X);

      this.a = data.a;
    };

    var Y = function Y(data) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Y);

      this.b = data.b;
    };

    Object(src_instantiate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, {
      x: X,
      y: Y
    });
    expect(obj.x.constructor).toEqual(X);
    expect(obj.x.a).toEqual(1);
    expect(obj.y.constructor).toEqual(Y);
    expect(obj.y.b).toEqual(2);
  });
  it('updates simple object on assignment', function () {
    var obj = {};

    var X = function X() {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, X);
    };

    Object(src_instantiate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', X);
    var x = obj.x;
    obj.x = {
      a: 42
    };
    expect(obj.x).toEqual(x);
    expect(obj.x.a).toEqual(42);
  });
  it('updates Seemple.Object instance on assigment', function () {
    var obj = {
      x: {
        a: 42
      }
    };
    var X = Object(src_class__WEBPACK_IMPORTED_MODULE_2__["default"])({
      "extends": src_object__WEBPACK_IMPORTED_MODULE_3__["default"],
      constructor: function constructor(data) {
        this.setData(data);
      }
    });
    Object(src_instantiate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', X);
    expect(obj.x.constructor).toEqual(X);
    expect(obj.x.a).toEqual(42);
    obj.x = {
      b: 1,
      c: 2
    };
    expect(obj.x.keys()).toEqual(['b', 'c']);
  });
  it('updates Seemple.Array instance on assigment', function () {
    var obj = {
      x: [1, 2, 3, 4, 5]
    };
    var X = Object(src_class__WEBPACK_IMPORTED_MODULE_2__["default"])({
      "extends": src_array__WEBPACK_IMPORTED_MODULE_4__["default"],
      constructor: function constructor(data) {
        this.recreate(data);
      }
    });
    Object(src_instantiate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', X);
    expect(obj.x.constructor).toEqual(X);
    expect(obj.x.toJSON(false)).toEqual([1, 2, 3, 4, 5]);
    obj.x = [6, 7, 8, 9, 0];
    expect(obj.x.toJSON(false)).toEqual([6, 7, 8, 9, 0]);
  });
  it('makes possible to customize update function', function () {
    var obj = {
      x: {
        a: 1
      }
    };

    var X = function X(data) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, X);

      this.a = "".concat(data.a, "foo");
    };

    Object(src_instantiate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', X, function (instance, data) {
      instance.a = "".concat(data.a, "bar");
    });
    expect(obj.x.constructor).toEqual(X);
    expect(obj.x.a).toEqual('1foo');
    obj.x = {
      a: 2
    };
    expect(obj.x.constructor).toEqual(X);
    expect(obj.x.a).toEqual('2bar');
  });
});

/***/ }),

/***/ "./spec/mediate_spec.js":
/*!******************************!*\
  !*** ./spec/mediate_spec.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_mediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/mediate */ "../src/mediate.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('mediate', function () {
  it('mediates', function () {
    var obj = {};
    Object(src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a', function (v) {
      return Number(v);
    });
    Object(src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, ['b', 'c'], function (v) {
      return Number(v);
    });
    obj.a = obj.b = obj.c = '123';
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.a)).toEqual('number');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.b)).toEqual('number');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.c)).toEqual('number');
  });
  it('mediates in context of an object which has isSeemple=true property', function () {
    var obj = {
      isSeemple: true
    };
    src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"].call(obj, 'a', function (v) {
      return Number(v);
    });
    src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"].call(obj, ['b', 'c'], function (v) {
      return Number(v);
    });
    obj.a = obj.b = obj.c = '123';
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.a)).toEqual('number');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.b)).toEqual('number');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.c)).toEqual('number');
  });
  it('mediates using key-mediator object', function () {
    var obj = {};
    Object(src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, {
      a: function a(v) {
        return Number(v);
      },
      b: function b(v) {
        return Number(v);
      }
    });
    obj.a = obj.b = '123';
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.a)).toEqual('number');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.b)).toEqual('number');
  });
});

/***/ }),

/***/ "./spec/mq/add_spec.js":
/*!*****************************!*\
  !*** ./spec/mq/add_spec.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_dom_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_dom/mq */ "../src/_dom/mq/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('mq.fn.add', function () {
  it('adds once', function () {
    var el1 = window.document.createElement('div');
    var el2 = window.document.createElement('div');
    var el3 = window.document.createElement('div');
    var el4 = window.document.createElement('div');
    var el5 = window.document.createElement('div');
    var result = Array.from(Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])([el1, el2, el3]).add([el2, el3, el4, el5]));
    expect(result).toEqual([el1, el2, el3, el4, el5]);
  });
});

/***/ }),

/***/ "./spec/mq/events_spec.js":
/*!********************************!*\
  !*** ./spec/mq/events_spec.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_dom_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_dom/mq */ "../src/_dom/mq/index.js");
/* harmony import */ var _helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('mq events', function () {
  var testSandbox;
  var child1;
  var child2;
  var grandchild1;
  var handler;
  beforeEach(function f() {
    testSandbox = window.document.createElement('div');
    testSandbox.innerHTML = "\n            <div class=\"child1\">\n                <div class=\"grandchild1\"></div>\n            </div>\n            <div class=\"child2\"></div>\n        ";
    child1 = testSandbox.querySelector('.child1');
    child2 = testSandbox.querySelector('.child2');
    grandchild1 = testSandbox.querySelector('.grandchild1');

    this.handler = function () {};

    spyOn(this, 'handler');
    handler = this.handler;
  });
  afterEach(function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])([testSandbox, child1, child2, grandchild1]).off('click');
  });
  it('adds event listener', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).toHaveBeenCalled();
  });
  it('removes event listener (listener is specified)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler).off('click', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes event listener (listener is not specified)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler).off('click');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).not.toHaveBeenCalled();
  });
  it('adds namespaced listener', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click.yo', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).toHaveBeenCalled();
  });
  it('removes namespaced listener (listener is specified)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click.yo', handler).off('click.yo', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes namespaced listener (listener is not specified)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click.yo', handler).off('click.yo');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).not.toHaveBeenCalled();
  });
  it('adds bubbling event listener', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(grandchild1);
    expect(handler).toHaveBeenCalled();
  });
  it('adds delegated event listener', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).toHaveBeenCalled();
  });
  it('adds delegated event listener (click on grandchildren)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(grandchild1);
    expect(handler).toHaveBeenCalled();
  });
  it('does not trigger when clicked on wrong child', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child2', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(grandchild1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated event listener (selector and handler are specified)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler).off('click', '.child1', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated event listener (selector is specified, handler is not specified)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler).off('click', '.child1');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated event listener (selector is not specified, handler is specified)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler).off('click', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated event listener (selector and handler are not specified)', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler).off('click');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('stops propagation', function () {
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler);
    Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(child1).on('click', function (evt) {
      return evt.stopPropagation();
    });
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
});

/***/ }),

/***/ "./spec/mq/init_spec.js":
/*!******************************!*\
  !*** ./spec/mq/init_spec.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_dom_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_dom/mq */ "../src/_dom/mq/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('mq initialization', function () {
  var testSandbox;
  beforeEach(function () {
    testSandbox = window.document.createElement('div');
    testSandbox.innerHTML = "\n            <div class=\"test\">\n                <div class=\"test-1\"></div>\n                <div class=\"test-2\"></div>\n                <div class=\"test-3\"></div>\n            </div>\n        ";
  });
  it('accepts window', function () {
    var result = Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(window);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(window);
  });
  it('accepts document', function () {
    var result = Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(window.document);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(window.document);
  });
  it('parses HTML', function () {
    var result = Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])('<div></div><span></span>');
    expect(result.length).toEqual(2);
    expect(result[0].tagName).toEqual('DIV');
    expect(result[1].tagName).toEqual('SPAN');
  });
  it('converts array-like', function () {
    var children = testSandbox.querySelectorAll('*');
    var result = Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(children);
    expect(children.length).toEqual(result.length);

    for (var i = 0; i < children.length; i++) {
      expect(children[i]).toEqual(result[i]);
    }
  });
  it('converts one element', function () {
    var element = window.document.querySelector('*');
    var result = Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    expect(result.length).toEqual(1);
    expect(element).toEqual(result[0]);
  });
  it('uses context', function () {
    expect(Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])('.test-1', testSandbox).length).toEqual(1);
  });
  it('does not use wrong context', function () {
    expect(Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])('.test-1', '.wrong-context').length).toEqual(0);
  });
  it('allows to pass null', function () {
    expect(Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(null).length).toEqual(0);
  });
  it('allows to pass nothing', function () {
    expect(Object(src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"])().length).toEqual(0);
  });
});

/***/ }),

/***/ "./spec/mq/parsehtml_spec.js":
/*!***********************************!*\
  !*** ./spec/mq/parsehtml_spec.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_dom_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_dom/mq */ "../src/_dom/mq/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('mq.parseHTML', function () {
  it('parses HTML', function () {
    var result = src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"].parseHTML('<div></div><span></span>');
    expect(result.length).toEqual(2);
    expect(result[0].tagName).toEqual('DIV');
    expect(result[1].tagName).toEqual('SPAN');
  });
  it('parses contextual elements', function () {
    var result = src_dom_mq__WEBPACK_IMPORTED_MODULE_0__["default"].parseHTML('<td></td><td></td>');
    expect(result.length).toEqual(2);
    expect(result[0].tagName).toEqual('TD');
    expect(result[1].tagName).toEqual('TD');
  });
});

/***/ }),

/***/ "./spec/remove_spec.js":
/*!*****************************!*\
  !*** ./spec/remove_spec.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/remove */ "../src/remove.js");
/* harmony import */ var src_on__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/on */ "../src/on/index.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var src_trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/trigger */ "../src/trigger/index.js");
/* harmony import */ var src_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/select */ "../src/select.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */






describe('remove', function () {
  it('removes a property', function () {
    var obj = {
      a: 1
    };
    Object(src_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a');
    expect('a' in obj).toBe(false);
  });
  it('removes a property in context of an object which has isSeemple=true property', function () {
    var obj = {
      a: 1,
      isSeemple: true
    };
    src_remove__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj, 'a');
    expect('a' in obj).toBe(false);
  });
  it('removes a property and its events', function () {
    var obj = {
      a: 1
    };
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'change:a', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:a');
    expect(handler).toHaveBeenCalledTimes(1);
    Object(src_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:a');
    expect(handler).toHaveBeenCalledTimes(1);
    expect('a' in obj).toBe(false);
  });
  it('removes a property and its bindings', function () {
    var obj = {
      a: 1
    };
    var node = window.document.createElement('div');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'a', node);
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, ':bound(a)')).toEqual(node);
    Object(src_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a');
    expect(Object(src_select__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, ':bound(a)')).toEqual(null);
    expect('a' in obj).toBe(false);
  });
});

/***/ }),

/***/ "./spec/seemple_array/common_spec.js":
/*!*******************************************!*\
  !*** ./spec/seemple_array/common_spec.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src */ "../src/index.js");
/* harmony import */ var src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */



describe('Seemple.Array class', function () {
  var methodNames = "_afterInit,\n    mediateItem,\n    orderBy,\n    pull,\n    recreate,\n    rerender,\n    restore,\n    toJSON,\n    concat,\n    join,\n    pop,\n    push,\n    reverse,\n    shift,\n    slice,\n    sort,\n    splice,\n    toString,\n    unshift,\n    every,\n    filter,\n    forEach,\n    indexOf,\n    lastIndexOf,\n    map,\n    some,\n    entries,\n    keys,\n    values,\n    copyWithin,\n    fill,\n    includes,\n    find,\n    findIndex,\n    push_,\n    pop_,\n    unshift_,\n    shift_,\n    sort_,\n    reverse_,\n    splice_".split(/\s*,\s*/);
  it('an instance should have isSeemple=true and isSeempleArray=true properties', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_2__["default"]();
    expect(obj.isSeemple).toEqual(true);
    expect(obj.isSeempleArray).toEqual(true);
  });
  it('includes all instance methods', function () {
    var obj = new src_array__WEBPACK_IMPORTED_MODULE_2__["default"]();

    for (var i = 0; i < methodNames.length; i++) {
      var name = methodNames[i];
      expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj[name])).toEqual('function', "".concat(name, " method is missing"));
    }
  });
  it('includes all static methods', function () {
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src_array__WEBPACK_IMPORTED_MODULE_2__["default"].of)).toEqual('function', 'of method is missing');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src_array__WEBPACK_IMPORTED_MODULE_2__["default"].from)).toEqual('function', 'from method is missing');
  });
  it('is a property of Seemple', function () {
    expect(src__WEBPACK_IMPORTED_MODULE_1___default.a.Array).toEqual(src_array__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });
  it('triggers addone and removeone', function () {
    var arr = src_array__WEBPACK_IMPORTED_MODULE_2__["default"].of(1, 2, 3, 4, 5);
    var addOneHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_ref) {
      var addedItem = _ref.addedItem;
      expect(addedItem).toEqual('foo');
    });
    var removeOneHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_ref2) {
      var removedItem = _ref2.removedItem;
      expect(removedItem).toEqual(2);
    });
    arr.on('addone', addOneHandler);
    arr.on('removeone', removeOneHandler);
    arr.push('foo');
    arr.pull(1);
    expect(addOneHandler).toHaveBeenCalledTimes(1);
    expect(removeOneHandler).toHaveBeenCalledTimes(1);
  });
});

/***/ }),

/***/ "./spec/seemple_array/iterator_spec.js":
/*!*********************************************!*\
  !*** ./spec/seemple_array/iterator_spec.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('Seemple.Array iterator', function () {
  var symbolIt = typeof Symbol === 'function' ? it : xit;
  symbolIt('iterates via for..of', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](1, 2, 3);
    var i = 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        expect(item).toEqual(i);
        i += 1;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
});

/***/ }),

/***/ "./spec/seemple_array/mediate_item_spec.js":
/*!*************************************************!*\
  !*** ./spec/seemple_array/mediate_item_spec.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('Seemple.Array mediate item', function () {
  it('allows to set item mediator via mediateItem', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]('foo', 'bar');
    arr.mediateItem(function (value) {
      return "x".concat(value);
    });
    expect(arr.toJSON(false)).toEqual(['xfoo', 'xbar']);
    arr.push('baz');
    expect(arr.toJSON(false)).toEqual(['xfoo', 'xbar', 'xbaz']);
    arr.splice(0, 0, 'qux');
    expect(arr.toJSON(false)).toEqual(['xqux', 'xfoo', 'xbar', 'xbaz']);
  });
});

/***/ }),

/***/ "./spec/seemple_array/model_spec.js":
/*!******************************************!*\
  !*** ./spec/seemple_array/model_spec.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/class */ "../src/class.js");
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */



describe('Seemple.Array Model', function () {
  it('can use Model and Model gets correct arguments', function (done) {
    var item = {};
    var Model = Object(src_class__WEBPACK_IMPORTED_MODULE_0__["default"])({
      constructor: function constructor(data, parent, index) {
        expect(data === item).toBeTruthy();
        expect(index).toEqual(0);
        setTimeout(function () {
          expect(parent === arr).toBeTruthy(); // eslint-disable-line no-use-before-define

          done();
        });
      }
    });
    var SeempleArrayChild = Object(src_class__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "extends": src_array__WEBPACK_IMPORTED_MODULE_1__["default"],

      get Model() {
        return Model;
      },

      constructor: function constructor() {
        this.push(item);
      }
    });
    var arr = new SeempleArrayChild();
    expect(arr[0] instanceof Model).toBeTruthy();
  });
  it('allows to change Model dynamically', function () {
    var item = {};
    var arr = new src_class__WEBPACK_IMPORTED_MODULE_0__["default"]({
      "extends": src_array__WEBPACK_IMPORTED_MODULE_1__["default"],
      constructor: function constructor() {
        this.push({});
      }
    });
    expect(arr[0]).toEqual(item);
    arr.Model = src_object__WEBPACK_IMPORTED_MODULE_2__["default"];
    expect(arr[0] instanceof src_object__WEBPACK_IMPORTED_MODULE_2__["default"]).toBeTruthy();
  });
  it('throws error if Model has wront type', function () {
    expect(function () {
      return new src_class__WEBPACK_IMPORTED_MODULE_0__["default"]({
        "extends": src_array__WEBPACK_IMPORTED_MODULE_1__["default"],
        Model: undefined,
        constructor: function constructor() {
          this.push({});
        }
      });
    }).toThrow();
    expect(function () {
      return new src_class__WEBPACK_IMPORTED_MODULE_0__["default"]({
        "extends": src_array__WEBPACK_IMPORTED_MODULE_1__["default"],
        Model: {},
        constructor: function constructor() {
          this.push({});
        }
      });
    }).toThrow();
  });
});

/***/ }),

/***/ "./spec/seemple_array/native_methods_spec.js":
/*!***************************************************!*\
  !*** ./spec/seemple_array/native_methods_spec.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('Seemple.Array native methods', function () {
  it('supports filter method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3, 4, 5);
    var result = arr.filter(function (item) {
      return item > 3;
    });
    expect(result.toJSON(false)).toEqual([4, 5]);
  });
  it('supports map method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3);
    var result = arr.map(function (item) {
      return item * 2;
    });
    expect(result.toJSON(false)).toEqual([2, 4, 6]);
  });
  it('supports every method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3);
    expect(arr.every(function (item) {
      return item < 4;
    })).toBe(true);
    expect(arr.every(function (item) {
      return item > 4;
    })).toBe(false);
  });
  it('supports some method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3);
    expect(arr.some(function (item) {
      return item === 2;
    })).toBe(true);
    expect(arr.some(function (item) {
      return item === 4;
    })).toBe(false);
  });
  it('supports join method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3);
    expect(arr.join(' ')).toEqual('1 2 3');
  });
  it('supports indexOf method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3, 3, 4, 5);
    expect(arr.indexOf(3)).toEqual(2);
    expect(arr.indexOf(6)).toEqual(-1);
  });
  it('supports lastIndexOf method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3, 3, 4, 5);
    expect(arr.lastIndexOf(3)).toEqual(3);
    expect(arr.lastIndexOf(6)).toEqual(-1);
  });
  it('supports slice method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3);
    expect(arr.slice(1).toJSON(false)).toEqual([2, 3]);
  });
  it('supports forEach method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](1, 2, 3);
    var callback = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    arr.push(1, 2, 3);
    arr.forEach(callback);
    expect(callback).toHaveBeenCalledTimes(arr.length);
  });
  it('supports reduce method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1, 2, 3, 4);
    var result = arr.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }, 5);
    expect(result).toEqual(15);
  });
  it('supports reduceRight method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1, 2, 3, 4);
    var result = arr.reduceRight(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }, 5);
    expect(result).toEqual(15);
  });
  it('supports concat method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](1, 2, 3);
    expect(arr.concat([4, 5, 6]).toJSON(false)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arr.concat(new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](4, 5, 6)).toJSON(false)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('supports keys method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]('foo', 'bar', 'baz');
    expect(arr.keys()).toEqual([0, 1, 2]);
  });
  it('supports values method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]('foo', 'bar', 'baz');
    expect(arr.values()).toEqual(arr.toJSON(false));
  });
  it('supports entries method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]('foo', 'bar', 'baz');
    expect(arr.entries()).toEqual([[0, 'foo'], [1, 'bar'], [2, 'baz']]);
  });
  it('supports includes method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]('foo', 'bar', 'baz');
    expect(arr.includes('bar')).toEqual(true);
    expect(arr.includes('qux')).toEqual(false);
  });
  it('supports find method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]('foo', 'bar', 'baz');
    expect(arr.find(function (item) {
      return item[item.length - 1] === 'r';
    })).toEqual('bar');
  });
  it('supports findIndex method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]('foo', 'bar', 'baz');
    expect(arr.findIndex(function (item) {
      return item[item.length - 1] === 'r';
    })).toEqual(1);
  });
});

/***/ }),

/***/ "./spec/seemple_array/native_modifying_methods_spec.js":
/*!*************************************************************!*\
  !*** ./spec/seemple_array/native_modifying_methods_spec.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */


describe('Seemple.Array native modifying methods (including ones that ending by underscore)' + ' and their events', function () {
  var testFlag = {
    test: 'ok'
  };
  var simpleHandler;
  var testFlagHandler;
  beforeEach(function () {
    simpleHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    testFlagHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])(function (evt) {
      return expect(evt.test).toEqual('ok');
    });
  });
  it('supports push method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.on('push', simpleHandler);
    arr.on('add', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.push('foo', 'bar');
    expect(arr.toJSON(false)).toEqual(['foo', 'bar']);
    expect(arr.length).toEqual(2);
    expect(result).toEqual(2);
    expect(simpleHandler).toHaveBeenCalledTimes(3);
  });
  it('supports push_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.on('push', testFlagHandler);
    arr.on('add', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.push_('foo', 'bar', testFlag);
    expect(arr.toJSON(false)).toEqual(['foo', 'bar']);
    expect(arr.length).toEqual(2);
    expect(result).toEqual(2);
    expect(testFlagHandler).toHaveBeenCalledTimes(3); // test silent only once

    arr.push_('baz', 'qux', {
      silent: true
    });
    expect(testFlagHandler).toHaveBeenCalledTimes(3);
  });
  it('supports pop method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar');
    arr.on('pop', simpleHandler);
    arr.on('remove', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.pop();
    expect(arr.toJSON(false)).toEqual(['foo']);
    expect(arr.length).toEqual(1);
    expect(result).toEqual('bar');
    expect(simpleHandler).toHaveBeenCalledTimes(3);
  });
  it('supports pop_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar');
    arr.on('pop', testFlagHandler);
    arr.on('remove', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.pop_(testFlag);
    expect(arr.toJSON(false)).toEqual(['foo']);
    expect(arr.length).toEqual(1);
    expect(result).toEqual('bar');
    expect(testFlagHandler).toHaveBeenCalledTimes(3);
  });
  it('supports unshift method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar');
    arr.on('unshift', simpleHandler);
    arr.on('add', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.unshift('baz', 'qux');
    expect(arr.toJSON(false)).toEqual(['baz', 'qux', 'foo', 'bar']);
    expect(arr.length).toEqual(4);
    expect(result).toEqual(4);
    expect(simpleHandler).toHaveBeenCalledTimes(3);
  });
  it('supports unshift_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar');
    arr.on('unshift', testFlagHandler);
    arr.on('add', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.unshift_('baz', 'qux', testFlag);
    expect(arr.toJSON(false)).toEqual(['baz', 'qux', 'foo', 'bar']);
    expect(arr.length).toEqual(4);
    expect(result).toEqual(4);
    expect(testFlagHandler).toHaveBeenCalledTimes(3);
  });
  it('supports shift method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar');
    arr.on('shift', simpleHandler);
    arr.on('remove', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.shift();
    expect(arr.length).toEqual(1);
    expect(arr.toJSON(false)).toEqual(['bar']);
    expect(result).toEqual('foo');
    expect(simpleHandler).toHaveBeenCalledTimes(3);
  });
  it('supports shift_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar');
    arr.on('shift', testFlagHandler);
    arr.on('remove', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.shift_(testFlag);
    expect(arr.length).toEqual(1);
    expect(arr.toJSON(false)).toEqual(['bar']);
    expect(result).toEqual('foo');
    expect(testFlagHandler).toHaveBeenCalledTimes(3);
  });
  it('supports splice method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar', 'baz', 'qux');
    arr.on('splice', simpleHandler);
    arr.on('add', simpleHandler);
    arr.on('remove', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.splice(1, 2, 'puk', 'boo', 'lol');
    expect(arr.toJSON(false)).toEqual(['foo', 'puk', 'boo', 'lol', 'qux']);
    expect(result.toJSON(false)).toEqual(['bar', 'baz']);
    expect(simpleHandler).toHaveBeenCalledTimes(4);
  });
  it('supports splice_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar', 'baz', 'qux');
    arr.on('splice', testFlagHandler);
    arr.on('add', testFlagHandler);
    arr.on('remove', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.splice_(1, 2, 'puk', 'boo', 'lol', testFlag);
    expect(arr.toJSON(false)).toEqual(['foo', 'puk', 'boo', 'lol', 'qux']);
    expect(result.toJSON(false)).toEqual(['bar', 'baz']);
    expect(testFlagHandler).toHaveBeenCalledTimes(4);
  });
  it('supports sort method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(2, 3, 1);
    arr.on('sort', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.sort();
    expect(arr.toJSON(false)).toEqual([1, 2, 3]);
    expect(result).toEqual(arr);
    expect(simpleHandler).toHaveBeenCalledTimes(2);
  });
  it('supports sort_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(2, 3, 1);
    arr.on('sort', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.sort_(testFlag);
    expect(arr.toJSON(false)).toEqual([1, 2, 3]);
    expect(result).toEqual(arr);
    expect(testFlagHandler).toHaveBeenCalledTimes(2);
  });
  it('supports reverse method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar', 'baz');
    arr.on('reverse', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.reverse();
    expect(arr.toJSON(false)).toEqual(['baz', 'bar', 'foo']);
    expect(result).toEqual(arr);
    expect(simpleHandler).toHaveBeenCalledTimes(2);
  });
  it('supports reverse_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('foo', 'bar', 'baz');
    arr.on('reverse', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.reverse_(testFlag);
    expect(arr.toJSON(false)).toEqual(['baz', 'bar', 'foo']);
    expect(result).toEqual(arr);
    expect(testFlagHandler).toHaveBeenCalledTimes(2);
  });
  it('supports copyWithin method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3, 4, 5);
    arr.on('copyWithin', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.copyWithin(0, 3);
    expect(arr.length).toEqual(5);
    expect(arr.toJSON(false)).toEqual([4, 5, 3, 4, 5]);
    expect(result).toEqual(arr);
    expect(simpleHandler).toHaveBeenCalledTimes(2);
  });
  it('supports copyWithin_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3, 4, 5);
    arr.on('copyWithin', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.copyWithin_(0, 3, testFlag);
    expect(arr.length).toEqual(5);
    expect(arr.toJSON(false)).toEqual([4, 5, 3, 4, 5]);
    expect(result).toEqual(arr);
    expect(testFlagHandler).toHaveBeenCalledTimes(2);
  });
  it('supports fill method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3);
    arr.on('fill', simpleHandler);
    arr.on('modify', simpleHandler);
    var result = arr.fill(4, -3, -2);
    expect(arr.length).toEqual(3);
    expect(arr.toJSON(false)).toEqual([4, 2, 3]);
    expect(result).toEqual(arr);
    expect(simpleHandler).toHaveBeenCalledTimes(2);
  });
  it('supports fill_ method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push(1, 2, 3);
    arr.on('fill', testFlagHandler);
    arr.on('modify', testFlagHandler);
    var result = arr.fill_(4, 1, 2, testFlag);
    expect(arr.length).toEqual(3);
    expect(arr.toJSON(false)).toEqual([1, 4, 3]);
    expect(result).toEqual(arr);
    expect(testFlagHandler).toHaveBeenCalledTimes(2);
  });
});

/***/ }),

/***/ "./spec/seemple_array/orderby_spec.js":
/*!********************************************!*\
  !*** ./spec/seemple_array/orderby_spec.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "../node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/array */ "../src/array/index.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('Seemple.Array orderBy method', function () {
  // tests partially taken from lodash
  var objects = [{
    a: 'x',
    b: 3
  }, {
    a: 'y',
    b: 4
  }, {
    a: 'x',
    b: 1
  }, {
    a: 'y',
    b: 2
  }];
  it('should sort by a single property by a specified order', function () {
    var arr = _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(src_array__WEBPACK_IMPORTED_MODULE_1__["default"], objects);

    expect(arr.orderBy('a', 'desc').toJSON(false)).toEqual([objects[1], objects[3], objects[0], objects[2]]);
  });
  it('should sort by multiple properties by specified orders', function () {
    var arr = _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(src_array__WEBPACK_IMPORTED_MODULE_1__["default"], objects);

    expect(arr.orderBy(['a', 'b'], ['desc', 'asc']).toJSON(false)).toEqual([objects[3], objects[1], objects[2], objects[0]]);
  });
  it('should sort by a property in ascending order when its order is not specified', function () {
    var arr = _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(src_array__WEBPACK_IMPORTED_MODULE_1__["default"], objects);

    var falsey = ['', 0, false, NaN, null, undefined];
    expect(arr.orderBy(['a', 'b']).toJSON(false)).toEqual([objects[2], objects[0], objects[3], objects[1]]);
    falsey.forEach(function (order, index) {
      var arr = _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(src_array__WEBPACK_IMPORTED_MODULE_1__["default"], objects); // eslint-disable-line no-shadow


      expect(arr.orderBy(['a', 'b'], index ? ['desc', order] : ['desc']).toJSON(false)).toEqual([objects[3], objects[1], objects[2], objects[0]]);
    });
  });
});

/***/ }),

/***/ "./spec/seemple_array/pull_spec.js":
/*!*****************************************!*\
  !*** ./spec/seemple_array/pull_spec.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('Seemple.Array pull method', function () {
  it('pulls', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('a', 'b', 'c');
    var removed = arr.pull(1);
    expect(removed).toEqual('b');
    expect(arr.toJSON(false)).toEqual(['a', 'c']);
  });
  it('pulls by given value', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var object1 = {};
    var object2 = {};
    var object3 = {};
    arr.push(object1, object2, object3);
    var removed = arr.pull(object2);
    expect(removed === object2).toBe(true);
    expect(arr.toJSON(false)).toEqual([object1, object3]);
  });
  it('throws an error if wrong type is passed to pull method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    arr.push('a', 'b', 'c');
    expect(function () {
      return arr.pull('foo');
    }).toThrow();
  });
});

/***/ }),

/***/ "./spec/seemple_array/recreate_spec.js":
/*!*********************************************!*\
  !*** ./spec/seemple_array/recreate_spec.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('Seemple.Array recreate method (including trackBy feature)', function () {
  it('recreates an array via recreate method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var object1 = {};
    var object2 = {};
    var object3 = {};
    arr.recreate([object1, object2, object3]);
    expect(arr.length).toEqual(3);
    expect(arr[0] === object1).toBe(true);
    expect(arr[1] === object2).toBe(true);
    expect(arr[2] === object3).toBe(true);
  });
  it('emptifies an array via recreate method', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var object1 = {};
    var object2 = {};
    var object3 = {};
    arr.recreate([object1, object2, object3]);
    expect(arr.length).toEqual(3);
    arr.recreate();
    expect(arr.length).toEqual(0);
    expect(arr[0] === undefined).toBe(true);
    expect(arr[1] === undefined).toBe(true);
    expect(arr[2] === undefined).toBe(true);
  });
  it('tracks by _id', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var object0 = {
      _id: 0,
      a: 0
    };
    var object1 = {
      _id: 1,
      a: 1
    };
    var object2 = {
      _id: 2,
      a: 2
    };
    var object3 = {
      _id: 0,
      a: 3
    };
    var object4 = {
      _id: 1,
      a: 4
    };
    var object5 = {
      _id: 3,
      a: 5
    };
    arr.trackBy = '_id';
    arr.recreate([object0, object1, object2]);
    expect(arr[0] === object0).toBe(true);
    expect(arr[1] === object1).toBe(true);
    expect(arr[2] === object2).toBe(true);
    arr.recreate([object4, object5, object3]);
    expect(arr[0] === object1).toBe(true);
    expect(arr[1] === object5).toBe(true);
    expect(arr[2] === object0).toBe(true);
    expect(arr[0].a).toEqual(4);
    expect(arr[1].a).toEqual(5);
    expect(arr[2].a).toEqual(3);
  });
  it('tracks by $index', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var object0 = {
      a: 0
    };
    var object1 = {
      a: 1
    };
    var object2 = {
      a: 2
    };
    var object3 = {
      a: 3
    };
    var object4 = {
      a: 4
    };
    var object5 = {
      a: 5
    };
    var object6 = {
      a: 6
    };
    arr.trackBy = '$index';
    arr.recreate([object0, object1, object2]);
    expect(arr[0] === object0).toBe(true);
    expect(arr[1] === object1).toBe(true);
    expect(arr[2] === object2).toBe(true);
    arr.recreate([object3, object4, object5, object6]);
    expect(arr[0] === object0).toBe(true);
    expect(arr[1] === object1).toBe(true);
    expect(arr[2] === object2).toBe(true);
    expect(arr[3] === object6).toBe(true);
    expect(arr[0].a).toEqual(3);
    expect(arr[1].a).toEqual(4);
    expect(arr[2].a).toEqual(5);
    expect(arr[3].a).toEqual(6);
  });
});

/***/ }),

/***/ "./spec/seemple_array/renderer_spec.js":
/*!*********************************************!*\
  !*** ./spec/seemple_array/renderer_spec.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var src_binders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/binders */ "../src/binders/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");






/* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */



 // TODO: Split this file by smaller ones

describe('Seemple.Array renderer', function () {
  var n = 10;

  var Model =
  /*#__PURE__*/
  function (_SeempleObject) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Model, _SeempleObject);

    function Model(obj) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Model);

      (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Model).call(this, obj))).on('render', function () {
        return _this.bindNode('x', ':sandbox span', Object(src_binders__WEBPACK_IMPORTED_MODULE_7__["html"])(), {
          debounceGetValue: false,
          debounceSetValue: false
        });
      });

      return _this;
    }

    return Model;
  }(src_object__WEBPACK_IMPORTED_MODULE_5__["default"]);

  var Arr =
  /*#__PURE__*/
  function (_SeempleArray) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Arr, _SeempleArray);

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(Arr, [{
      key: "Model",
      get: function get() {
        return Model;
      }
    }]);

    function Arr() {
      var _getPrototypeOf2;

      var _this2;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Arr);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Arr)).call.apply(_getPrototypeOf2, [this].concat(args)))).bindNode('sandbox', '<div data-foo="bar"></div>');

      return _this2;
    }

    return Arr;
  }(src_array__WEBPACK_IMPORTED_MODULE_6__["default"]);

  function createArray() {
    return new Arr();
  }

  it('renders', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('throws an error when two nodes are given as render for single item', function () {
    var arr = createArray();

    arr.itemRenderer = function () {
      return '<div></div><div></div>';
    };

    expect(function () {
      arr.push({});
    }).toThrow();
  });
  it('throws an error when trying to insert same rendered node twice', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    expect(function () {
      return arr.push(arr[0]);
    }).toThrow();
    expect(arr.length).toEqual(n + 1);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('renders via recreate', function () {
    var arr = createArray();
    var newItems = [];
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      newItems.push({
        x: i
      });
    }

    arr.recreate(newItems);
    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('throws an error when the same objects are passed to recreate', function () {
    var arr = createArray();
    var newItems = [];
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      newItems.push({
        x: i
      });
    }

    arr.recreate(newItems);
    expect(function () {
      arr.recreate([arr[0], arr[0]]);
    }).toThrow();
    expect(arr.length).toEqual(2);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(1);
  });
  it('allows to rerender and allows to force rerender', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    arr.nodes.sandbox.innerHTML = '';
    arr.rerender();
    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
    arr.rerender({
      forceRerender: true
    });
    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n * 2);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('rerenders when renderer is changed', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });
    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('allows to pass dontRender=true to push and forceRerender=false' + ' setting to itemRenderer', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n / 2; i++) {
      arr.push({
        x: i
      });
    }

    for (var _i = 0; _i < n / 2; _i++) {
      arr.push_({
        x: _i + n / 2
      }, {
        dontRender: true
      });
    }

    expect(arr.itemRenderer).toHaveBeenCalledTimes(n / 2);
    arr.set('itemRenderer', Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    }), {
      forceRerender: false
    });
    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n / 2);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('removes rendered nodes recreate method is used', function () {
    var arr = createArray();

    arr.itemRenderer = function () {
      return '<div><span></span></div>';
    };

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    arr.recreate();
    expect(arr.length).toEqual(0);
    expect(arr.nodes.sandbox.children.length).toEqual(0);
  });
  it('renders if silent=true', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      arr.push_({
        x: i
      }, {
        silent: true
      });
    }

    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('uses bindings parser', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '  <div><span attr="hey {{x}}"></span></div>  ';
    });

    for (var i = 0; i < n; i++) {
      arr.push_({
        x: i
      }, {
        debounce: false
      });
    }

    expect(arr[5].nodes.sandbox.firstChild.getAttribute('attr')).toEqual('hey 5');
    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('allows to use selector as renderer', function () {
    var arr = createArray();
    var div = window.document.createElement('div');
    div.innerHTML = '<span>Hi there <div><span attr="hey {{x}}"></span></div>{{x}}</span>';
    div.className = 'item-renderer';
    arr.nodes.sandbox.appendChild(div);
    arr.itemRenderer = ':sandbox .item-renderer';

    for (var i = 0; i < n; i++) {
      arr.push_({
        x: i
      }, {
        debounce: false
      });
    }

    expect(arr.nodes.sandbox.children[0].tagName).toEqual('DIV'); // the first node is itemrenderer node

    expect(arr.nodes.sandbox.children[1].childNodes[2].textContent).toEqual('0');
    expect(arr.length).toEqual(n);
  });
  it('restores from container via restore method', function () {
    var arr = createArray();
    var HTML = '';

    for (var i = 0; i < n; i++) {
      HTML += '<div><span>Hi there</span></div>';
    }

    arr.nodes.sandbox.innerHTML = HTML;
    arr.restore();
    expect(arr.length).toEqual(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
    expect(arr.nodes.sandbox.children[0].textContent).toEqual('Hi there');
  });
  it('restores from nodes with custom selector', function () {
    var arr = createArray();
    var HTML = '';

    for (var i = 0; i < n; i++) {
      HTML += "<div class=\"".concat(i % 2 ? 'fit' : 'nope', "\"><span>Hi there</span></div>");
    }

    arr.nodes.sandbox.innerHTML = HTML;
    arr.restore(':sandbox .fit');
    expect(arr.length).toEqual(n / 2);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
    expect(arr.nodes.sandbox.children[0].textContent).toEqual('Hi there');
  });
  it('restores from nodes with custom selector when renderer is placed in sandbox', function () {
    var arr = createArray();
    var HTML = '';
    arr.itemRenderer = ':sandbox .renderer';
    HTML += '<script class="renderer"><div></div></script>';

    for (var i = 0; i < n; i++) {
      HTML += "<div class=\"".concat(i >= 5 ? 'fit' : 'nope', "\"><span>Hi there</span></div>");
    }

    arr.nodes.sandbox.innerHTML = HTML;
    arr.restore(':sandbox .fit');
    expect(arr.length).toEqual(5);
    expect(arr.nodes.sandbox.children.length).toEqual(n + 1); // script plus number of divs

    expect(arr.nodes.sandbox.children[1].textContent).toEqual('Hi there');
  });
  it('restores from external node', function () {
    var arr = createArray();
    var div = window.document.createElement('div');
    var HTML = '';
    div.className = 'restore-items';

    for (var i = 0; i < n; i++) {
      HTML += '<div><span>Hi there</span></div>';
    }

    div.innerHTML = HTML;
    window.document.body.appendChild(div);
    arr.restore('.restore-items > div');
    window.document.body.removeChild(div);
    expect(arr.length).toEqual(n);
    expect(arr[0].nodes.sandbox.textContent).toEqual('Hi there');
  });
  it('allows to sort', function () {
    var arr = createArray();
    arr.itemRenderer = '<span><span></span></span>';

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    arr.reverse();
    expect(arr.length).toEqual(n);
    expect(+arr[0].nodes.sandbox.textContent).toEqual(n - 1);
    expect(+arr[n - 1].nodes.sandbox.textContent).toEqual(0);
    expect(+arr.nodes.sandbox.children[0].textContent).toEqual(n - 1);
    expect(+arr.nodes.sandbox.children[n - 1].textContent).toEqual(0);
    arr.sort(function (a, b) {
      return a.x > b.x ? 1 : -1;
    }); // eslint-disable-line no-confusing-arrow

    expect(+arr[0].nodes.sandbox.textContent).toEqual(0);
    expect(+arr[n - 1].nodes.sandbox.textContent).toEqual(n - 1);
    expect(+arr.nodes.sandbox.children[0].textContent).toEqual(0);
    expect(+arr.nodes.sandbox.children[n - 1].textContent).toEqual(n - 1);
  });
  xit('orders by key', function () {
    // detailed test for orderby is
    var arr = createArray();
    arr.itemRenderer = '<span><span></span></span>';

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    arr.orderBy('x', 'desc');
    expect(arr.length).toEqual(n);
    expect(arr[0].sandbox.textContent).toEqual(String(n - 1));
    expect(arr[n - 1].sandbox.textContent).toEqual(String(0));
    expect(arr.sandbox.children[0].textContent).toEqual(String(n - 1));
    expect(arr.sandbox.children[n - 1].textContent).toEqual(String(0));
    arr.orderBy('x', 'asc');
    expect(arr[0].sandbox.textContent).toEqual(String(0));
    expect(arr[n - 1].sandbox.textContent).toEqual(String(n - 1));
    expect(arr.sandbox.children[0].textContent).toEqual(String(0));
    expect(arr.sandbox.children[n - 1].textContent).toEqual(String(n - 1));
  });
  it('allows to unshift', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      arr.unshift({
        x: i
      });
    }

    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
    var index = 0;

    for (var _i2 = 0, _Array$from = Array.from(arr.nodes.sandbox.children); _i2 < _Array$from.length; _i2++) {
      var node = _Array$from[_i2];
      expect(+node.querySelector('span').innerHTML).toEqual(n - index - 1);
      index += 1;
    }
  });
  it('allows to unshift', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });

    for (var i = 0; i < n; i++) {
      arr.unshift({
        x: i
      });
    }

    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
    var index = 0;

    for (var _i3 = 0, _Array$from2 = Array.from(arr.nodes.sandbox.children); _i3 < _Array$from2.length; _i3++) {
      var node = _Array$from2[_i3];
      expect(+node.querySelector('span').innerHTML).toEqual(n - index - 1);
      index += 1;
    }
  });
  it('allows to call pull pop and shift', function () {
    var arr = createArray();
    arr.itemRenderer = '<span><span></span></span>';

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    arr.pull(1);
    expect(arr.length).toEqual(n - 1);
    expect(+arr[1].nodes.sandbox.textContent).toEqual(2);
    arr.pop();
    expect(arr.length).toEqual(n - 2);
    expect(+arr[n - 3].nodes.sandbox.textContent).toEqual(n - 2);
    arr.shift();
    expect(arr.length).toEqual(n - 3);
    expect(+arr[0].nodes.sandbox.textContent).toEqual(2);
  });
  xit('alows to use custom trackBy value', function () {});
  xit('alows to use $index as trackBy value', function () {});
  it('renders on splice', function () {
    var arr = createArray();
    arr.itemRenderer = '<span><span></span></span>';

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    arr.splice(1, 2, {
      x: 'foo'
    }, {
      x: 'bar'
    });
    expect(arr.length).toEqual(n);
    expect(arr[1].nodes.sandbox.textContent).toEqual('foo');
    expect(arr[2].nodes.sandbox.textContent).toEqual('bar');
  });
  it('triggers "afterrender" event', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_6__["default"]();
    var handler;
    var item;
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '<div><span></span></div>';
    });
    arr.bindNode('container', '<div></div>');
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    item = new src_object__WEBPACK_IMPORTED_MODULE_5__["default"]();
    item.on('afterrender', handler);
    arr.push(item);
    expect(handler).toHaveBeenCalledTimes(1);
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    item = new src_object__WEBPACK_IMPORTED_MODULE_5__["default"]();
    item.on('afterrender', handler);
    arr.unshift(item);
    expect(handler).toHaveBeenCalledTimes(1);
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])();
    item = new src_object__WEBPACK_IMPORTED_MODULE_5__["default"]();
    item.on('afterrender', handler);
    arr.splice(0, 0, item);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('trims itemRenderer', function () {
    var arr = createArray();
    arr.itemRenderer = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      return '         <div><span></span></div>            ';
    });

    for (var i = 0; i < n; i++) {
      arr.push({
        x: i
      });
    }

    expect(arr.length).toEqual(n);
    expect(arr.itemRenderer).toHaveBeenCalledTimes(n);
    expect(arr.nodes.sandbox.children.length).toEqual(n);
  });
  it('makes possible to move sandbox via moveSandbox=true event option', function () {
    var arr = createArray();
    var arr2 = createArray();
    arr.itemRenderer = arr2.itemRenderer = '<div><span></span></div>';
    arr.push({});
    var arrItemNode = arr.nodes.sandbox.children[0]; // just in case

    expect(arrItemNode).toBeTruthy();
    arr2.push_(arr[0], {
      moveSandbox: true
    });
    expect(arr2.nodes.sandbox.children[0]).toEqual(arrItemNode);
  });
});

/***/ }),

/***/ "./spec/seemple_array/static_methods_spec.js":
/*!***************************************************!*\
  !*** ./spec/seemple_array/static_methods_spec.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* harmony import */ var src_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/class */ "../src/class.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('Seemple.Array static methods (of and from)', function () {
  it('converts an array to Seemple.Array instance via Seemple.Array.from', function () {
    var items = [1, 2, 3];
    var arr = src_array__WEBPACK_IMPORTED_MODULE_0__["default"].from(items);
    expect(arr instanceof src_array__WEBPACK_IMPORTED_MODULE_0__["default"]).toBe(true);
    expect(arr.toJSON(false)).toEqual(items);
  });
  it('allows to inherit Seemple.Array.from', function () {
    var items = [1, 2, 3];
    var OwnerClass = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({
      "extends": src_array__WEBPACK_IMPORTED_MODULE_0__["default"]
    });
    var arr = OwnerClass.from(items);
    expect(arr instanceof OwnerClass).toBe(true);
    expect(arr.toJSON(false)).toEqual(items);
  });
  it('allows to assign Seemple.Array.from to a variable', function () {
    var items = [1, 2, 3];
    var from = src_array__WEBPACK_IMPORTED_MODULE_0__["default"].from;
    var arr = from(items);
    expect(arr instanceof src_array__WEBPACK_IMPORTED_MODULE_0__["default"]).toBe(true);
    expect(arr.toJSON(false)).toEqual(items);
  });
  it('converts arguments to Seemple.Array instance via Seemple.Array.of', function () {
    var items = [1, 2, 3];
    var arr = src_array__WEBPACK_IMPORTED_MODULE_0__["default"].of.apply(src_array__WEBPACK_IMPORTED_MODULE_0__["default"], items);
    expect(arr instanceof src_array__WEBPACK_IMPORTED_MODULE_0__["default"]).toBe(true);
    expect(arr.toJSON(false)).toEqual(items);
  });
  it('allows to inherit Seemple.Array.of', function () {
    var items = [1, 2, 3];
    var OwnerClass = Object(src_class__WEBPACK_IMPORTED_MODULE_1__["default"])({
      "extends": src_array__WEBPACK_IMPORTED_MODULE_0__["default"]
    });
    var arr = OwnerClass.of.apply(OwnerClass, items);
    expect(arr instanceof OwnerClass).toBe(true);
    expect(arr.toJSON(false)).toEqual(items);
  });
  it('allows to assign Seemple.Array.of to a variable', function () {
    var items = [1, 2, 3];
    var of = src_array__WEBPACK_IMPORTED_MODULE_0__["default"].of;
    var arr = of.apply(void 0, items);
    expect(arr instanceof src_array__WEBPACK_IMPORTED_MODULE_0__["default"]).toBe(true);
    expect(arr.toJSON(false)).toEqual(items);
  });
});

/***/ }),

/***/ "./spec/seemple_array/tojson_spec.js":
/*!*******************************************!*\
  !*** ./spec/seemple_array/tojson_spec.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('Seemple.Array toJSON method', function () {
  it('is converted to JSON', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](1, 2, new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](3, 4));
    expect(arr.toJSON()).toEqual([1, 2, [3, 4]]);
  });
  it('is converted to JSON with recursive=false parameter', function () {
    var arr = new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](1, 2, new src_array__WEBPACK_IMPORTED_MODULE_0__["default"](3, 4));
    expect(arr.toJSON(false)).toEqual([1, 2, arr[2]]);
  });
});

/***/ }),

/***/ "./spec/seemple_object/common_spec.js":
/*!********************************************!*\
  !*** ./spec/seemple_object/common_spec.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src */ "../src/index.js");
/* harmony import */ var src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/object */ "../src/object/index.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('Seemple.Object class', function () {
  var methodNames = "_afterInit,\n    setData,\n    addDataKeys,\n    removeDataKeys,\n    isDataKey,\n    keys,\n    entries,\n    values,\n    keyOf,\n    toJSON,\n    each".split(/\s*,\s*/);
  it('an instance should have isSeemple=true and isSeempleObject=true properties', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_2__["default"]();
    expect(obj.isSeemple).toEqual(true);
    expect(obj.isSeempleObject).toEqual(true);
  });
  it('includes all instance methods', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_2__["default"]();

    for (var i = 0; i < methodNames.length; i++) {
      var name = methodNames[i];
      expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj[name])).toEqual('function', "".concat(name, " method is missing"));
    }

    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.jset)).toEqual('function', 'jset method is missing');
    expect(obj.jset).toEqual(obj.setData);
  });
  it('is a property of Seemple', function () {
    expect(src__WEBPACK_IMPORTED_MODULE_1___default.a.Object).toEqual(src_object__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });
});

/***/ }),

/***/ "./spec/seemple_object/datakeys_spec.js":
/*!**********************************************!*\
  !*** ./spec/seemple_object/datakeys_spec.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('Seemple.Object data keys', function () {
  it('the class accepts an object as an argument', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 1
    });
    expect(obj.keys()).toEqual(['a']);
  });
  it('sets data via setData', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 1
    });
    obj.setData('b', 2);
    expect(obj.a).toEqual(1);
    expect(obj.b).toEqual(2);
    expect(obj.keys()).toEqual(['a', 'b']);
  });
  it('replaces data via setData and replaceData=true', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 1
    });
    obj.setData('b', 2, {
      replaceData: true
    });
    expect(obj.a).toEqual(1);
    expect(obj.b).toEqual(2);
    expect(obj.keys()).toEqual(['b']);
  });
  it('allows to pass key-value object to setData', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 1
    });
    obj.setData({
      b: 2,
      c: 3
    });
    expect(obj.a).toEqual(1);
    expect(obj.b).toEqual(2);
    expect(obj.c).toEqual(3);
    expect(obj.keys()).toEqual(['a', 'b', 'c']);
  });
  it('allows to pass key-value object and replace data via setData and replaceData=true', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 1
    });
    obj.setData({
      b: 2,
      c: 3
    }, {
      replaceData: true
    });
    expect(obj.a).toEqual(1);
    expect(obj.b).toEqual(2);
    expect(obj.c).toEqual(3);
    expect(obj.keys()).toEqual(['b', 'c']);
  });
  it('adds data keys', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 1
    });
    obj.addDataKeys('c', 'd');
    obj.addDataKeys(['e', 'f']);
    expect(obj.keys()).toEqual(['a', 'c', 'd', 'e', 'f']);
  });
  it('removes data keys', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 1
    });
    obj.addDataKeys('c', 'd');
    obj.addDataKeys(['e', 'f']);
    obj.removeDataKeys('c', 'd');
    obj.removeDataKeys(['e', 'f']);
    expect(obj.keys()).toEqual(['a']);
  });
  it('triggers "modify" when data keys are added', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    obj.on('modify', handler);
    obj.addDataKeys('c', 'd');
    expect(handler).toHaveBeenCalledTimes(2);
  });
  it('triggers "modify" and "remove" when data keys are removed', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var modifyHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var removeHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    obj.addDataKeys('c', 'd');
    obj.on('modify', modifyHandler);
    obj.on('remove', removeHandler);
    obj.removeDataKeys('c', 'd');
    expect(modifyHandler).toHaveBeenCalledTimes(2);
    expect(removeHandler).toHaveBeenCalledTimes(2);
  });
  it('does not trigger "modify" and "remove" when data keys are not removed', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    obj.addDataKeys('c', 'd');
    obj.on('modify', handler);
    obj.on('remove', handler);
    obj.removeDataKeys('e', 'f');
    expect(handler).not.toHaveBeenCalled();
  });
  it('triggers "modify" and "set" when data is changed', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var modifyHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var setHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    obj.addDataKeys('a');
    obj.on('modify', modifyHandler);
    obj.on('set', setHandler);
    obj.a = 'foo';
    expect(modifyHandler).toHaveBeenCalledTimes(1);
    expect(setHandler).toHaveBeenCalledTimes(1);
  });
  it('triggers "modify" and "remove" when data is removed', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var modifyHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var removeHandler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    obj.addDataKeys('a');
    obj.on('modify', modifyHandler);
    obj.on('remove', removeHandler);
    obj.remove('a');
    expect(modifyHandler).toHaveBeenCalledTimes(1);
    expect(removeHandler).toHaveBeenCalledTimes(1);
  });
  it('does not trigger "modify" and "remove" when non-data is removed', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 1
    });
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    obj.b = 'foo';
    obj.on('modify', handler);
    obj.on('remove', handler);
    obj.remove('b');
    expect(handler).not.toHaveBeenCalled();
  });
  it('checks is data key by isDataKey method', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]();
    obj.setData('a', 1);
    obj.b = 2;
    expect(obj.isDataKey('a')).toBeTruthy();
    expect(obj.isDataKey('b')).toBeFalsy();
  });
  it('finds a key of an object', function () {
    var toFind = {};
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 42,
      b: toFind,
      c: 'yop'
    });
    expect(obj.keyOf(toFind)).toEqual('b');
  });
  it('allows to use keys, values and entrues methods', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 'foo',
      b: 'bar',
      c: 'baz'
    });
    expect(obj.keys(obj)).toEqual(['a', 'b', 'c']);
    expect(obj.values(obj)).toEqual(['foo', 'bar', 'baz']);
    expect(obj.entries(obj)).toEqual([['a', 'foo'], ['b', 'bar'], ['c', 'baz']]);
  });
});

/***/ }),

/***/ "./spec/seemple_object/each_spec.js":
/*!******************************************!*\
  !*** ./spec/seemple_object/each_spec.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('Seemple.Object each', function () {
  it('is iterated via each', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 'foo',
      b: 'bar',
      c: 'baz'
    });
    var keys = ['a', 'b', 'c'];
    var values = ['foo', 'bar', 'baz'];
    var context = {};
    var i = 0;
    var callback = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_1__["default"])(function iterate(value, key, itSelf) {
      expect(value).toEqual(values[i]);
      expect(key).toEqual(keys[i]);
      expect(itSelf).toEqual(obj);
      expect(this).toEqual(context);
      i += 1;
    });
    obj.each(callback, context);
    expect(callback).toHaveBeenCalledTimes(3);
  });
});

/***/ }),

/***/ "./spec/seemple_object/iterator_spec.js":
/*!**********************************************!*\
  !*** ./spec/seemple_object/iterator_spec.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/class */ "../src/class.js");
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('Seemple.Object iterator', function () {
  var symbolIt = typeof Symbol === 'function' ? it : xit;
  symbolIt('allows to iterate an instance via for..of', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_1__["default"]({
      a: 'foo',
      b: 'bar',
      c: 'baz'
    });
    var values = ['foo', 'bar', 'baz'];
    var i = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        expect(item).toEqual(values[i]);
        i += 1;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  symbolIt('allows to iterate an instance of inherited class via for..of', function () {
    var Child = Object(src_class__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "extends": src_object__WEBPACK_IMPORTED_MODULE_1__["default"],
      constructor: function constructor(data) {
        this.setData(data);
      }
    });
    var obj = new Child({
      a: 'foo',
      b: 'bar',
      c: 'baz'
    });
    var values = ['foo', 'bar', 'baz'];
    var i = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = obj[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;
        expect(item).toEqual(values[i]);
        i += 1;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
});

/***/ }),

/***/ "./spec/seemple_object/tojson_spec.js":
/*!********************************************!*\
  !*** ./spec/seemple_object/tojson_spec.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('Seemple.Object toJSON method', function () {
  it('is converted to JSON object', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 42,
      b: 'yop',
      c: new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
        d: 'ya'
      })
    });
    var result = obj.toJSON();
    expect(Object.keys(result)).toEqual(['a', 'b', 'c']);
    expect(result.a).toEqual(42);
    expect(result.b).toEqual('yop');
    expect(result.c.d).toEqual('ya');
    expect(result.c).not.toEqual(obj.c);
  });
  it('is converted to JSON with recursive=false parameter', function () {
    var obj = new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
      a: 42,
      b: 'yop',
      c: new src_object__WEBPACK_IMPORTED_MODULE_0__["default"]({
        d: 'ya'
      })
    });
    var result = obj.toJSON(false);
    expect(Object.keys(result)).toEqual(['a', 'b', 'c']);
    expect(result.a).toEqual(42);
    expect(result.b).toEqual('yop');
    expect(result.c.d).toEqual('ya');
    expect(result.c).toEqual(obj.c);
  });
});

/***/ }),

/***/ "./spec/seemple_spec.js":
/*!******************************!*\
  !*** ./spec/seemple_spec.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src */ "../src/index.js");
/* harmony import */ var src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_seemple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/seemple */ "../src/seemple/index.js");
/* harmony import */ var src_core_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_core/init */ "../src/_core/init.js");
/* harmony import */ var src_core_defineprop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_core/defineprop */ "../src/_core/defineprop.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */




describe('Seemple class', function () {
  var universalMethodsNames = "on,\n        once,\n        onDebounce,\n        off,\n        trigger,\n        calc,\n        bindNode,\n        unbindNode,\n        bindOptionalNode,\n        bindSandbox,\n        parseBindings,\n        select,\n        selectAll,\n        set,\n        remove,\n        instantiate,\n        mediate".split(/\s*,\s*/);
  it('an instance should have isSeemple=true property', function () {
    var obj = new src__WEBPACK_IMPORTED_MODULE_1___default.a();
    expect(obj.isSeemple).toEqual(true);
  });
  it('an instance should have nodes and $nodes properties', function () {
    var obj = new src__WEBPACK_IMPORTED_MODULE_1___default.a();
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.nodes)).toEqual('object');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.$nodes)).toEqual('object');
  });
  it('includes all instance methods', function () {
    var obj = new src__WEBPACK_IMPORTED_MODULE_1___default.a();

    for (var i = 0; i < universalMethodsNames.length; i++) {
      var name = universalMethodsNames[i];
      expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj[name])).toEqual('function');
    }

    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj._afterInit)).toEqual('function'); // test selectAll alias

    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.$)).toEqual('function');
    expect(obj.$).toEqual(obj.selectAll);
  });
  it('includes all static members', function () {
    for (var i = 0; i < universalMethodsNames.length; i++) {
      var name = universalMethodsNames[i];
      expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a[name])).toEqual('function');
    }

    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.binders)).toEqual('object');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.parserBrackers)).toEqual('object');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.defaultBinders)).toEqual('object');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.lookForBinder)).toEqual('function');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.Class)).toEqual('function');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.Array)).toEqual('function');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.Object)).toEqual('function');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.toSeemple)).toEqual('function');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.useDOMLibrary)).toEqual('function');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src__WEBPACK_IMPORTED_MODULE_1___default.a.chain)).toEqual('function');
  });
  it('exports the same thing from index.js and seemple/index.js', function () {
    expect(src__WEBPACK_IMPORTED_MODULE_1___default.a).toEqual(src_seemple__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });
  it('does not allow to get and set "sandbox" property', function () {
    var obj = {};
    Object(src_core_init__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
    Object(src_core_defineprop__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'sandbox');
    expect(function () {
      obj.sandbox; // eslint-disable-line no-unused-expressions
    }).toThrow();
    expect(function () {
      obj.sandbox = 'foo';
    }).toThrow();
  });
  it("does not allow to get and set \"container\" property\n        when an object has a property isSeempleArray=true", function () {
    var obj = {
      isSeempleArray: true
    };
    Object(src_core_init__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
    Object(src_core_defineprop__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'container');
    expect(function () {
      obj.container; // eslint-disable-line no-unused-expressions
    }).toThrow();
    expect(function () {
      obj.container = 'foo';
    }).toThrow();
  });
});

/***/ }),

/***/ "./spec/set_spec.js":
/*!**************************!*\
  !*** ./spec/set_spec.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/set */ "../src/set.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('set', function () {
  it('sets', function () {
    var obj = {};
    Object(src_set__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 42);
    expect(obj.x).toEqual(42);
    Object(src_set__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      y: 1,
      z: 2
    });
    expect(obj.y).toEqual(1);
    expect(obj.z).toEqual(2);
  });
  it('sets a property in context of an object which has isSeemple=true property', function () {
    var obj = {
      isSeemple: true
    };
    src_set__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj, 'x', 42);
    expect(obj.x).toEqual(42);
    src_set__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj, {
      y: 1,
      z: 2
    });
    expect(obj.y).toEqual(1);
    expect(obj.z).toEqual(2);
  });
});

/***/ }),

/***/ "./spec/toseemple_spec.js":
/*!********************************!*\
  !*** ./spec/toseemple_spec.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_toseemple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/toseemple */ "../src/toseemple.js");
/* harmony import */ var src_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/object */ "../src/object/index.js");
/* harmony import */ var src_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/array */ "../src/array/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */



describe('toSeemple function', function () {
  it('converts to Seemple via Seemple.toSeemple', function () {
    var obj = Object(src_toseemple__WEBPACK_IMPORTED_MODULE_0__["default"])({
      a: 1,
      b: [1, 2, 3, {
        foo: 'bar'
      }]
    });
    expect(obj.constructor).toEqual(src_object__WEBPACK_IMPORTED_MODULE_1__["default"]);
    expect(obj.b.constructor).toEqual(src_array__WEBPACK_IMPORTED_MODULE_2__["default"]);
    expect(obj.b[3].constructor).toEqual(src_object__WEBPACK_IMPORTED_MODULE_1__["default"]);
    expect(obj.a).toEqual(1);
    expect(obj.b[0]).toEqual(1);
    expect(obj.b[1]).toEqual(2);
    expect(obj.b[2]).toEqual(3);
    expect(obj.b[3].foo).toEqual('bar');
  });
});

/***/ }),

/***/ "./spec/usedomlibrary_spec.js":
/*!************************************!*\
  !*** ./spec/usedomlibrary_spec.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_dom */ "../src/_dom/index.js");
/* harmony import */ var src_dom_mq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_dom/mq */ "../src/_dom/mq/index.js");
/* harmony import */ var src_usedomlibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/usedomlibrary */ "../src/usedomlibrary.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */



describe('useDOMLibrary function', function () {
  it('allows to change DOM library', function () {
    var dummyLibrary = function dummyLibrary() {};

    Object(src_usedomlibrary__WEBPACK_IMPORTED_MODULE_2__["default"])(dummyLibrary);
    expect(src_dom__WEBPACK_IMPORTED_MODULE_0__["default"].$).toEqual(dummyLibrary);
    Object(src_usedomlibrary__WEBPACK_IMPORTED_MODULE_2__["default"])(null);
  });
  it('sets mq as DOM library when falsy is passed', function () {
    Object(src_usedomlibrary__WEBPACK_IMPORTED_MODULE_2__["default"])(null);
    expect(src_dom__WEBPACK_IMPORTED_MODULE_0__["default"].$).toEqual(src_dom_mq__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
});

/***/ }),

/***/ 0:
/*!*********************!*\
  !*** multi ./index ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map