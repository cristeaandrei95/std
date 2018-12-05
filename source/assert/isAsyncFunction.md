---
name: isAsyncFunction
menu: assert
route: /assert/isAsyncFunction
tags:
  - assert
  - validate
  - function
  - async
  - generator
---

Returns `true` if the _source_ is an [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function%2A).

```js
import { isAsyncFunction } from "@nore/std/assert";

isAsyncFunction(async function() {});
isAsyncFunction(async () => {});
// => true
```
