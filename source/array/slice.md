---
name: slice
menu: array
route: /array/slice
tags:
  - array
  - slice 
--- 

Creates a slice of `array` from `start` up to, but not including, `end`.

**Note:** This method is used instead of
[`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
returned.

`slice(array, start, end)`

- `array` - The array to slice
- `start: number` - The start position. A negative index will be treated as an offset from the end
- `end: number` - The end position. A negative index will be treated as an offset from the end

```js
import { slice } from "@nore/std/slice";

slice(["a", "b", "c", "d"], 2);
// => ["c", "d"]
```
