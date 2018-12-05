---
name: isSymbol
menu: assert
route: /assert/isSymbol
tags:
  - assert
  - validate
  - symbol
---

Returns `true` if the source is a [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

```js
import { isSymbol } from "@nore/std/assert";

isSymbol(Symbol("foo"));
// => true
```
