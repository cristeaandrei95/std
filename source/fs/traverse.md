---
name: traverse
menu: fs
route: /fs/traverse
tags:
  - file system
  - traverse
  - walk
  - tree
---

Traverses a given path returning an `array` of files found while traversing.

`await traverse(path, options)`

- `path` — a string containing an absolute file path
- `options` – (optional object), see below

Options:

- `depth` — the depth of directory traversal, starting from 0

```js
import { traverse } from "@nore/std/fs";

const files = await traverse("/path/to/folder", { depth: 2 });

// files => ['/path/to/file1', '/path/to/file2']
```
