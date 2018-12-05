---
name: typeOf
menu: utils
route: /utils/typeOf
tags:
  - utils
  - type
  - typeof
---

Returns a string indicating the type of the value.

```js
import { typeOf } from "@nore/std";

typeOf(undefined); // 'undefined'
typeOf(null); // 'null'
typeOf(true); // 'boolean'
typeOf(false); // 'boolean'
typeOf(new Buffer("")); // 'buffer'
typeOf(42); // 'number'
typeOf("str"); // 'string'
typeOf(arguments); // 'arguments'
typeOf({}); // 'object'
typeOf(Object.create(null)); // 'object'
typeOf(new Test()); // 'object'
typeOf(new Date()); // 'date'
typeOf([1, 2, 3]); // 'array'
typeOf(/foo/); // 'regexp'
typeOf(new RegExp("foo")); // 'regexp'
typeOf(new Error("error")); // 'error'
typeOf(function() {}); // 'function'
typeOf(function*() {}); // 'generatorfunction'
typeOf(Symbol("str")); // 'symbol'
typeOf(new Map()); // 'map'
typeOf(new WeakMap()); // 'weakmap'
typeOf(new Set()); // 'set'
typeOf(new WeakSet()); // 'weakset'
typeOf(new Int8Array()); // 'int8array'
typeOf(new Uint8Array()); // 'uint8array'
typeOf(new Uint8ClampedArray()); // 'uint8clampedarray'
typeOf(new Int16Array()); // 'int16array'
typeOf(new Uint16Array()); // 'uint16array'
typeOf(new Int32Array()); // 'int32array'
typeOf(new Uint32Array()); // 'uint32array'
typeOf(new Float32Array()); // 'float32array'
typeOf(new Float64Array()); // 'float64array'
```
