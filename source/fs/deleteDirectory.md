---
name: deleteDirectory
menu: fs
route: /fs/deleteDirectory
tags:
  - file system
  - directory
  - delete
---

Deletes a directory, a file or symbolic link, works like `rm -rf` from UNIX.

`await deleteDirectory(path)`

- `path` — a string containing an absolute file path

```js
import { deleteDirectory } from "@nore/std/fs";

await deleteDirectory("/path/to/file.ext"); // => true
```
