---
name: pick
menu: object
route: /object/pick
tags:
  - pick
---

Creates an object composed of the picked object properties.

`pick(keys, source)`

- `keys` — an array of properties that will be selected from the source object
- `source` — the source object

```js
import { pick } from "@nore/std/object";

const person = {
	fistName: "John",
	lastName: "Doe",
	age: "30",
	location: "earth",
};

pick(["age", "location"], person);

// -> { age: "30", location: "earth" }
```
