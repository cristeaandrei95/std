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

### Motivation

We needed a standard JavaScript library that follows the guidelines:

- implemented in ES6 module format
- implemented as pure functions (where applicable)
- implemented using async functions or Promises (where applicable)
- exported functions must do only one thing
- exported functions must be well tested
- exported functions must follow a consistent set of naming conventions

Covers

- utilities — format, validate, date, numbers, strings, etc
- data structures — tress, graphs, immutable lists, etc
- algorithms — levenshtein, ID generators, etc
- performance articles

Related projects

- [stdlib-js](https://github.com/stdlib-js/stdlib)
- [lodash](https://lodash.com) — has [a version](https://www.npmjs.com/package/lodash-es) exported as ES modules

### Guidelines

Use proper naming, for example the `tail(list)` function in many programming languages returns the last item of a list, but in real life “tail” does not represent the last part of something. A more intuitive function name would be `last(list)`, as “last” means last in every context.

All function implementation should not have side effects (where applicable), this means for a given input it must always return the same output.

Source file structure:

- `source/[collection]/[name].js` — implementation file
- `source/[collection]/[name].test.js` — implementation test
- `source/[collection]/index.js` — the file that exports the functionality
