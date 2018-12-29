---
name: isLength 
menu: assert
route: /assert/isLength
tags:
  - assert
  - validate
---

Checks if `value` is a valid array-like length.

```js
import { isLength } from "@nore/std/assert";

isLength(3);
// => true

isLength(Number.MIN_VALUE);
// => false

isLength(Infinity);
// => false

isLength('3');
// => false
 ```
