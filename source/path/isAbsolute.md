---
name: isAbsolute
menu: path
route: /path/isAbsolute
tags:
  - path
  - absolute
---

Check if the path is an absolute path.

`isAbsolute(path)`

- `path` — a string to test against it

```js
import { isAbsolute } from "@nore/std/path";

isAbsolute("/path/to/file");
// => true
```
