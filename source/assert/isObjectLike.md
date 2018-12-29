---
name: isObjectLike
menu: assert
route: /assert/isObjectLike
tags:
  - assert
  - validate
  - object
---

Checks if `value` is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".

```js
import { isObjectLike } from "@nore/std/assert";

isObjectLike({});
// => true

isObjectLike([1, 2, 3]);
// => true

isObjectLike(Function);
// => false

isObjectLike(null);
// => false
```
