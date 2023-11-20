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
            foo: new Date(),
        },
    },
};
const weights = new index_js_1.Weights(default_config);
weights.set({
    param1: 'A',
});
console.log(weights.params.param1, weights.params.param2);
//# sourceMappingURL=run.js.map