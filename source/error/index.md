---
name: Guidelines
menu: error
route: /error/guidelines
---

## Errors types

`ArgumentError` — is thrown when invalid arguments are passed to a function

- missing argument — `undefined`
- invalid argument
  - wrong type — ex. not a string (`TypeError`)
  - wrong format — ex. empty string / too large

`SystemError` — Occurs when we encounter a system fault.

- `type` — the system where the fault happened (ex. `file_system`)
- `code` — a programmatically identifiable error code (ex. `socket_hangup`)
- `cause` — the original `error` (optional)
- `message` — a message to be displayed to the user (optional)
