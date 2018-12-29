import isArrayLike from "./isArrayLike.js";
import isObjectLike from "./isObjectLike.js";

export default function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
