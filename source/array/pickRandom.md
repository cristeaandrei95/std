---
name: pickRandom
menu: array
route: /array/pickRandom
tags:
  - array
  - pickRandom
---

Pick a random item from an array.

`pickRandom(source)`

- `source` — the target array

```js
import { pickRandom } from "@nore/std/array";

pickRandom(["a", "b", "e"]);
// => "b"
```
