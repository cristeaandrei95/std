---
name: createDirectory
menu: fs
route: /fs/createDirectory
tags:
  - file system
  - directory
---

Creates a directory.

`await createDirectory(path, mode)`

- `path` — a string containing an absolute file path
- `mode` — (optional) an integer describing the file system permissions (optional)

```js
import { createDirectory } from "@nore/std/fs";

const path = "/path/to/create";

await createDirectory(path);
```
