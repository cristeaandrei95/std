---
name: set
menu: object
route: /object/set
tags:
  - set
---

Mutates a deep path on an object.

`set(path, value, target)`

- `path` — an array with the nested path to set
- `value` — the value to set
- `target` – the target object

```js
import { set } from "@nore/std/object";

const person = {
	name: {
		fist: "john",
		last: "doe",
	},
};

set(["name", "first"], "jane", person);

// person.name.first -> "jane"
```
