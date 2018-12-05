---
name: union
menu: array
route: /array/union
tags:
  - array
  - union
---

Creates an array of unique values, in order, from all given arrays.

`union(...lists)`

- arguments must be arrays

```js
import { union } from "@nore/std/array";

union(["a", "b", "e"], ["a", "d"], ["c"]);
// => ['a', 'b', 'c', 'd', 'e']
```
