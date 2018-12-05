---
name: writeFile
menu: fs
route: /fs/writeFile
tags:
  - file system
  - write
---

Asynchronous writes data to a file.

`await writeFile(path, data, options)`

- `path` — a string containing an absolute file path
- `data` — a string or buffer to write to the file
- `options` – (optional object), see below

Options:

- `encoding` – returning encoding format, default `utf8`
- `append` – append data insted of write, default `false`

```js
import { writeFile } from "@nore/std/fs";

const file = "/path/to/file";
const data = "string to write";

await writeFile(file, data);
```
