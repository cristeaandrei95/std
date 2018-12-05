---
name: isGeneratorFunction
menu: assert
route: /assert/isGeneratorFunction
tags:
  - assert
  - validate
  - function
  - generator
---

Returns `true` if the _source_ is an [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function%2A).

```js
import { isGeneratorFunction } from "@nore/std/assert";

isGeneratorFunction(function*() {});
// => true
```
