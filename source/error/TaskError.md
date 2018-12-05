---
name: TaskError
menu: error
route: /error/TaskError
tags:
  - error
  - task
---

Occurs when a task could not be completed.

In order to promote a multilingual system, we make it more obvious to use an _error code_ and map it to a specific _error message_.

`new TaskError({ code, cause, message })`

- `code` – a code to programatically identify the task
- `cause` — the original `error`
- `data` – contains aditional information about the error (optional)
- `message` — a message to be displayed to the user (optional)

```js
import { TaskError } from "@nore/std/error";
import { readFile } from "@nore/std/fs";

try {
  const file = await readFile("/path/to/file.js");
} catch (error) {
  if (error.code === "ENOENT") {
    throw new TaskError({
      code: "FILE_NOT_FOUND",
      cause: error,
      message: "The path does not exist on the file system.",
    });
  }
}
```
