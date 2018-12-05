---
name: SystemError
menu: error
route: /error/SystemError
tags:
  - error
  - system
---

Occurs when we encounter a system fault.

`new SystemError({ type, code, cause, message })`

- `type` — the system where the fault happened (ex. `file_system`)
- `code` — a programmatically identifiable error code (ex. `socket_hangup`)
- `cause` — the original `error` (optional)
- `message` — a message to be displayed to the user (optional)

```js
import { SystemError } from "@nore/std/error";

function readFile(path) {
	// ...
	if (error.code === "ENOENT") {
		throw new SystemError({
			type: "file_system",
			code: "file_not_found",
			cause: error,
		});
	}
}
```
