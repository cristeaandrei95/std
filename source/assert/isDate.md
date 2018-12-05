---
name: isDate
menu: assert
route: /assert/isDate
tags:
  - assert
  - validate
  - date
---

Returns `true` if the _source_ is a date object.

```js
import { isDate } from "@nore/std/assert";

isDate(new Date());
// => true
```
