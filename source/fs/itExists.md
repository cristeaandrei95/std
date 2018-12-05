---
name: itExists
menu: fs
route: /fs/itExists
tags:
  - file system
  - directory
---

Checks if path exists on the system.

`itExists(path)`

- `path` — a string containing an absolute path

```js
import { itExists } from "@nore/std/fs";

await itExists("/path/to/file"); // => true
```
