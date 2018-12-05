---
name: isRegExp
menu: assert
route: /assert/isRegExp
tags:
  - assert
  - validate
  - regexp
  - regex
  - regular expression
---

Returns `true` if the _source_ is a [regular expression](https://goo.gl/4hP8sz).

```js
import { isRegExp } from "@nore/std/assert";

isRegExp(/regex/g);
// => true
```
