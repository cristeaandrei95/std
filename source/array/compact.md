---
name: compact
menu: array
route: /array/compact
tags:
  - compact
---

Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.

`compact(target)`

- `target` - the array to be compacted

```js
import { compact } from "@nore/std/array"

compact([1, "a", null, "", 5, undefined]);
// => [1, "a", 5] 
```
