<h1 align="center">
  <!-- Logo -->
  <br/>
  Mini-QueryString
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Prettier -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- Travis build -->
  <a href="https://travis-ci.org/DylanPiercey/mini-querystring">
  <img src="https://img.shields.io/travis/DylanPiercey/mini-querystring.svg" alt="Build status"/>
  </a>
  <!-- Coveralls coverage -->
  <a href="https://coveralls.io/github/DylanPiercey/mini-querystring">
    <img src="https://img.shields.io/coveralls/DylanPiercey/mini-querystring.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/mini-querystring">
    <img src="https://img.shields.io/npm/v/mini-querystring.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/mini-querystring">
    <img src="https://img.shields.io/npm/dm/mini-querystring.svg" alt="Downloads"/>
  </a>
  <!-- Size -->
  <a href="https://npmjs.org/package/mini-querystring">
    <img src="https://img.shields.io/badge/size-418b-green.svg" alt="Browser Bundle Size"/>
  </a>
</h1>

Light weight, universal, query string parser for node and the browser with support for nested properties.

Checkout [q-set](https://github.com/DylanPiercey/q-set) and [q-flat](https://github.com/DylanPiercey/q-flat) (used internally) for more info on nested query string parsing and stringifying.

# Installation

```console
npm install mini-querystring
```

# Example

```javascript
import { parse, stringify } from 'mini-querystring'

// Parse standard query string.
parse('a=1&b=2&') /* { a: '1', b: '2' } */

// Parse nested query string.
parse('a=1&b[c]=2', true) /* { a: '1', b: { c: '1' } } */

// Stringify standard object.
stringify({ a: 1 }) /* 'a=1' */

// Stringify nested object.
stringify({ a: { b: 1 } }, true) /* 'a[b]=1'
```

### Contributions

* Use `npm test` to build and run tests.

Please feel free to create a PR!
