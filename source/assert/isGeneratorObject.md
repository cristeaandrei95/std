---
name: isGeneratorObject
menu: assert
route: /assert/isGeneratorObject
tags:
  - assert
  - validate
  - function
  - generator
---

Returns `true` if the _source_ is an [generator object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).

```js
import { isGeneratorObject } from "@nore/std/assert";

const createGenerator = function*() {};
const generator = createGenerator();

const customGenerator = {
	throw() {},
	return() {},
	next() {},
};

isGeneratorObject(generator);
// => true
isGeneratorObject(customGenerator);
// => true
```
