---
name: isRelative
menu: path
route: /path/isRelative
tags:
  - path
  - relative
---

Check if the path is a relative path.

`isRelative(path)`

- `path` — a string to test against it

```js
import { isRelative } from "@nore/std/path";

isRelative("/path/to/file");
// => true
```
