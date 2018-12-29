import isLength from "./isLength.js";

export default function isArrayLike(value) {
  return value != null && typeof value != 'function' && isLength(value.length);
}
