---
name: InvalidError
menu: error
route: /error/InvalidError
tags:
  - error
  - object
  - property
  - options
---

Occurs when an object is passed with an invlid or missing attribute.

`new InvalidError({ attribute, expected, value, source, message })`

- `attribute` — the attribute path (ex: 'person.name')
- `expected` — the expected value
- `value` — the value was passed as property
- `source` — the source object (optional)
- `message` — a message to be displayed to the user (optional)

```js
import { InvalidError } from "@nore/std/error";

function bundler(options) {
	if (!isString(options.target)) {
		throw new InvalidError({
			attribute: "options.target",
			source: options,
			expected: "string",
			value: options.target,
		});
	}

	// ...
}
```
