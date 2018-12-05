---
name: `ArgumentError`
menu: error
route: /error/ArgumentError
tags:
  - error
  - argument
---

An `ArgumentError` is thrown when invalid arguments are passed to a function.

`new ArgumentError(argument, expected, value, message)`

- `argument` — the argument name
- `expected` — the expected value
- `value` — the value was passed as argument
- `message` — a message to be displayed to the user (optional)

Default error message:

- "name" expected: "string" passed: "undefined"

```js
import { ArgumentError } from "@nore/std/error";

function readFile(path) {
	if (!isString(path)) {
		throw new ArgumentError("path", "string", path);
	}

	// ...
}
```
