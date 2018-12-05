---
name: readFile
menu: fs
route: /fs/readFile
tags:
  - file system
  - read
---

Asynchronous reads the contents of a file.

`await readFile(path, options)`

- `path` — a string containing an absolute file path
- `options` – an optional _options_ object

Options:

- `encoding` – returning encoding format, default `utf8`

```js
import { readFile } from "@nore/std/fs";

const data = await readFile("/path/to/file.ext");
```
