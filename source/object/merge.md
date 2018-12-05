---
name: merge
menu: object
route: /object/merge
tags:
  - object
  - merge
  - assign
  - compose
  - duplicate
---

Created a new object with all the **source** objects combined.

`merge(...sources)`

- `...sources` — the objects to copy the attribute values of

```js
import { merge } from "@nore/std/object";

merge({ john: 1 }, { mike: 2 });
// => { john: 1 , mike: 2 }
```
