---
name: get
menu: object
route: /object/get
tags:
  - get
---

Get value by walking path on object. Returns `undefined` is no value is found.

`get(path, target)`

- `path` — an array with the nested path to get
- `target` – the target object

```js
import { get } from "@nore/std/object";

const person = {
	name: {
		fist: "john",
		last: "doe",
	},
};

get(["name", "first"], person); // -> "john"
```
