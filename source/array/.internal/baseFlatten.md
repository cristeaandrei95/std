---
name: baseFlatten
menu: array
route: /array/.internal/baseFlatten
tags:
  - array
  - internal
  - baseFlatten
---

The base implementation of `flatten` with support for restricting flattening

`baseFlatten(array, depth, predicate, isStrict, result)`

- `array` - the array to flatten
- `depth` - the maximum recursion depth
- `predicate` - the function invoked per iteration
- `isStrict` - restrict the values that pass the predicate check
- `result` - the initial result value
