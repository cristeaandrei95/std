---
name: deleteFile
menu: fs
route: /fs/deleteFile
tags:
  - file system
  - file
  - delete
---

Deletes a file or symbolic link.

`await deleteFile(path)`

- `path` — a string containing an absolute file path

```js
import { deleteFile } from "@nore/std/fs";

await deleteFile("/path/to/file.ext"); // => true
```
