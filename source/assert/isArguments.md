---
name: isArguments
menu: assert
route: /assert/isArguments
tags:
  - assert
  - validate
  - arguments
---

Returns `true` if the source is an [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object.

```js
import { isArguments } from "@nore/std/assert";

function example() {
	isArguments(arguments);
	// => true
}
```
