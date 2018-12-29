--- 
name: isArrayLikeObject
menu: assert
route: /assert/isArrayLikeObject
tags:
  - assert
  - validate
  - array
  - object
---

This method is like `isArrayLike` except that it also checks if `value` is an object.

```js
import { isArrayLikeObject } from "@nore/std/assert";

isArrayLikeObject([1, 2, 3]);
// => true

isArrayLikeObject(document.body.children);
// => true

isArrayLikeObject('abc');
// => false

isArrayLikeObject(Function);
// => false
```
