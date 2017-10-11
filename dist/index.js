"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var q_flat_1 = require("q-flat");
var q_set_1 = require("q-set");
var parseReg = /([^=?&]+)=?([^&]*)/g;
/**
 * Converts an object to a query string and optionally flattens it.
 *
 * @example
 * stringify({ a: 1 }) === 'a=1'
 * stringify({ a: { b: 1 } }, true) === 'a[b]=1'
 */
function stringify(obj, deep) {
    if (deep) {
        obj = q_flat_1.flatten(obj);
    }
    var keys = Object.keys(obj);
    if (!keys.length) {
        return "";
    }
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        keys[i] = encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    }
    return keys.join("&");
}
exports.stringify = stringify;
/**
 * Parses a query string and optionally unflattens it.
 *
 * @example
 * parse('a=1&b=2&') === "{ a: '1', b: '2' }"
 * parse('a=1&b[c]=2', true) === "{ a: '1', b: { c: '1' } }"
 */
function parse(str, deep) {
    var set = deep ? q_set_1.deep : q_set_1.shallow;
    var result = {};
    for (;;) {
        var part = parseReg.exec(str);
        if (!part) {
            break;
        }
        var prop = part[1], val = part[2];
        set(result, decodeURIComponent(prop), decodeURIComponent(val));
    }
    return result;
}
exports.parse = parse;
//# sourceMappingURL=index.js.map