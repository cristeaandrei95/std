---
name: flatten
menu: array
route: /array/flatten
tags:
  - flatten
---

Turns a nested array structure into a flattened array (one-dimensional), returning the new array.

`flatten(target)`

- `target` — the array to be flatten

```js
import { flatten } from "@nore/std/array";

flatten([1, [2, 3], [4, 5]]);
// => [1, 2, 3, 4, 5]
```
