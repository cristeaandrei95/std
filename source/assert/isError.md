---
name: isError
menu: assert
route: /assert/isError
tags:
  - assert
  - validate
  - error
---

Returns `true` if the _source_ is an error.

```js
import { isError } from "@nore/std/assert";

isError(Error);
// => true
```
