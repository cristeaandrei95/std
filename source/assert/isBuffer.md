---
name: isBuffer
menu: assert
route: /assert/isBuffer
tags:
  - assert
  - validate
  - buffer
---

Returns `true` if the _source_ is a buffer.

```js
import { isBuffer } from "@nore/std/assert";

isBuffer(new Buffer());
// => true
```
