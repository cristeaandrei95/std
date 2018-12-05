---
name: isSymbolicLink
menu: fs
route: /fs/isSymbolicLink
tags:
  - file system
  - symbolic link
  - assert
---

Checks if the file is a symbolic link.

`await isSymbolicLink(path)`

- `path` — a string containing an absolute file path

```js
import { isSymbolicLink } from "@nore/std/fs";

await isSymbolicLink("/path/to/folder"); // => true
```
