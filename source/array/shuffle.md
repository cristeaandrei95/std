---
name: shuffle
menu: array
route: /array/shuffle
tags:
  - array
  - shuffle
---

Returns a new array with the items shuffled.

`shuffle(target)`

- `target` — the target array

```js
import { shuffle } from "@nore/std/array";

shuffle(["a", "b", "c", "d"]);
// => ["b", "d", "c", "a"]
```
