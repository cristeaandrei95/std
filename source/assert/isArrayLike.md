--- 
name: isArrayLike
menu: assert
route: /assert/isArrayLike
tags:
  - assert
  - validate
  - array
  - object
---

Checks if `value` is array-like. A value is considered array-like if it's not a function and has a `value.length` that's an integer greater than or equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.

```js
import { isArrayLike } from "@nore/std/assert";

isArrayLike([1, 2, 3]);
// => true

isArrayLike(document.body.children);
// => true

isArrayLike('abc');
// => false

isArrayLike(Function);
// => false
```
