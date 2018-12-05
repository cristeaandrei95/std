---
name: Home
route: /
---

## `@nore/std`

Nore standard library for JavaScript.

### Install

```sh
$ npm install @nore/std
```

### Guidelines

Use proper naming, for example the `tail(list)` function in many programming languages returns the last item of a list, but in real life “tail” does not represent the last part of something. A more intuitive function name would be `last(list)`, as “last” means last in every context.

All function implementation should not have side effects (where applicable), this means for a given input it must always return the same output.

Source file structure:

- `source/[collection]/[name].js` — implementation file
- `source/[collection]/[name].test.js` — implementation test
- `source/[collection]/index.js` — the file that exports the functionality
