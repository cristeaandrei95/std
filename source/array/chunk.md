---
name: chunk
menu: array
route: /array/chunk
tags: 
  - chunk 
---

Creates an array of elements split into groups the length of `size`.
If `array` can't be split evenly, the final chunk will be the remaining
elements.

`chunk(array, size)`

```js
import { chunk } from "@nore/std/array";

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'],['c','d']]
```
