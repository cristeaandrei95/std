---
name: isPrimitive
menu: assert
route: /assert/isPrimitive
tags:
  - assert
  - validate
  - primitive
---

Returns `true` if the variable is [truthy](https://goo.gl/vVKjcW) in any way.

```js
import { isPrimitive } from "@nore/std/assert";

isPrimitive(Symbol("foo"));
// => true
```
