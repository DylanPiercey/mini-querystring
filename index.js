'use strict'

var parseReg = /([^=?&]+)=?([^&]*)/g
var qFlat = require('q-flat')
var qSet = require('q-set')

/**
 * Converts an object to a query string and optionally flattens it.
 * @param  {Object} obj - the object to convert.
 * @return {String}
 */
exports.stringify = function stringify (obj, flat) {
  if (flat) obj = qFlat(obj)
  var keys = Object.keys(obj)
  if (!keys.length) return ''

  for (var i = 0, len = keys.length, key; i < len; i++) {
    key = keys[i]
    keys[i] = encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
  }

  return keys.join('&')
}

/**
 * Parses a query string and optionally unflattens it.
 * @param  {String} str - the query string to parse.
 * @param  {Boolean} [deep] - if true the query will be unflattened.
 * @return {Object}
 */
exports.parse = function (str, deep) {
  var set = deep ? qSet : qSet.flat
  var result = {}
  var part

  while ((part = parseReg.exec(str))) {
    set(result, decodeURIComponent(part[1]), decodeURIComponent(part[2]))
  }

  return result
}
