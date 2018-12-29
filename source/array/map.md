---
name: map
menu: array
route: /array/map
tags:
  - array
  - map
---

Creates an array of values by running each element of `array` thru `iteratee`. The iteratee is invoked with three arguments: (value, index, array)

`map(array, iteratee)`

- `array` - the array to iterate over
- `iteratee` - the function invoked per iteration

```js
import { map } from "@nore/std/array";

function square(n) {
	return n * n;
}

map([4, 8], square);
// => [16, 64];
```

