---
name: readJSONFile
menu: fs
route: /fs/readJSONFile
tags:
  - file system
  - read
  - json
---

Asynchronous reads the contents of a JSON file.

`await readJSONFile(path)`

- `path` — a string containing an absolute file path

```js
import { readJSONFile } from "@nore/std/fs";

const json = await readJSONFile("/path/to/file.json");
```
