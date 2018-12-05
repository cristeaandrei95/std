---
name: readDirectory
menu: fs
route: /fs/readDirectory
tags:
  - file system
  - directory
---

Asynchronous reads the contents of a directory, returns an `array` of absolute paths.

`await readDirectory(path)`

- `path` — a string containing an absolute file path

```js
import { readDirectory } from "@nore/std/fs";

const files = await readDirectory(path);

// files => ["/path/to/file1", "/path/to/file2"]
```
