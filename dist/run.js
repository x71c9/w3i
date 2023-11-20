"use strict";
/**
 *
 * Run module
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
const default_config = {
    param1: 'a',
    param2: 1,
    param3: {
        nested1: true,
        nested2: [1, 2, 3],
        nested3: {
            foo: new Date()
        }
    }
};
const config = new index_js_1.Weights(default_config);
config.set({
    param1: ''
});
//# sourceMappingURL=run.js.map