---
name: difference
menu: array
route: /array/difference
tags:
  - difference
---

Creates an array of `array` values not included in the other given arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.

`difference(array, [values])`

- `array` - the array to inspect
- `values: array` - the values to exclude

```js
import { difference } from "@nore/std/array";

difference([2, 1], [2, 3]);
// => [1]
```
