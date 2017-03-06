'use strict'

var assert = require('assert')
var qs = require('../')

describe('QueryString', function () {
  describe('parse', function () {
    it('shallow', function () {
      assert.deepEqual(qs.parse('a=1&b=2&c&d[e]=1'), {
        a: '1',
        b: '2',
        c: '',
        'd[e]': '1'
      })
    })

    it('deep', function () {
      assert.deepEqual(qs.parse('a=1&b=2&c&d[e]=1', true), {
        a: '1',
        b: '2',
        c: '',
        d: {
          e: '1'
        }
      })
    })
  })

  describe('stringify', function () {
    it('shallow', function () {
      assert.deepEqual('a=1&b=2&c=&d=%5Bobject%20Object%5D', qs.stringify({
        a: '1',
        b: '2',
        c: '',
        d: {
          e: '1'
        }
      }))
    })

    it('deep', function () {
      assert.deepEqual('a=1&b=2&c=&d%5Be%5D=1', qs.stringify({
        a: '1',
        b: '2',
        c: '',
        d: {
          e: '1'
        }
      }, true))
    })
  })
})
