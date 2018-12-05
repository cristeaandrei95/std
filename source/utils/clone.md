---
name: clone
menu: utils
route: /utils/clone
tags:
  - utils
  - clone
  - duplicate
---

Creates a clone of any given value.

Supports:

- arrays
- objects
- dates
- maps
- sets
- buffers
- symbols
- array buffers
- float32 arrays
- float64 arrays
- int16 arrays
- int32 arrays
- int8 arrays
- uint16 arrays
- uint32 arrays
- uint8clamped arrays
- uint8 arrays
- regular expressions
- errors
- primitives

```js
import { clone } from "@nore/std";

const source = [{ a: 0 }, { b: 1 }];
const cloned = clone(source);
// cloned =>  [{ 'a': 0 }, { 'b': 1 }]

// array is cloned
assert(source !== cloned); // true
```
