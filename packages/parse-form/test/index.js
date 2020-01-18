const Jasmine = require('jasmine');
const { JSDOM } = require('jsdom');
const { SpecReporter } = require('jasmine-spec-reporter');
const { addAlias } = require('module-alias');
const path = require('path');
const { execSync } = require('child_process')
const jasmine = new Jasmine();

global.window = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost'
}).window;

global.document = global.window.document;

execSync('npm run npm-compile', {
  cwd: path.resolve(__dirname, '../../seemple')
})

jasmine.loadConfig({
    spec_dir: 'test/spec',
    spec_files: [
        '**/**_spec.js'
    ]
});

addAlias('seemple', path.resolve(__dirname, '../../seemple/npm'))

jasmine.execute();
