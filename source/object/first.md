---
name: first
menu: object
route: /object/first
tags:
  - first
---

Returns the first element of an object.

`first(source)`

- `source` — the source object

```js
import { first } from "@nore/std/object";

const person = {
	fistName: "John",
	lastName: "Doe",
	age: "30",
};

first(person);
// -> "John"
```
