---
name: isDirectory
menu: fs
route: /fs/isDirectory
tags:
  - file system
  - directory
  - assert
---

Checks if the path exists and is a directory.

`await isDirectory(path)`

- `path` — a string containing an absolute file path

```js
import { isDirectory } from "@nore/std/fs";

await isDirectory("/path/to/folder"); // => true
```
