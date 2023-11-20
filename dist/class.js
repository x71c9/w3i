"use strict";
/**
 *
 * Class module
 *
 * @packageDocumentation
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weights = void 0;
class Weights {
    constructor(defaults) {
        this.defaults = defaults;
        this.config = _deep_clone(this.defaults);
    }
    set(params) {
        if (!params ||
            typeof params !== 'object' ||
            Object.entries(params).length === 0) {
            return;
        }
        this.merge_defaults(this.config, params);
    }
    merge_defaults(defaults, partial) {
        for (const key in partial) {
            if (!partial.hasOwnProperty(key)) {
                delete partial[key];
            }
            if (typeof defaults[key] !== typeof partial[key]) {
                delete partial[key];
            }
            const pk = partial[key];
            if (pk && typeof pk === 'object' && pk !== null) {
                this.merge_defaults(defaults[key], pk);
            }
            else {
                defaults[key] = partial[key];
            }
        }
    }
}
exports.Weights = Weights;
function _deep_clone(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    return JSON.parse(JSON.stringify(obj));
}
//# sourceMappingURL=class.js.map