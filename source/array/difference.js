import { isArrayLikeObject } from "../assert";
import baseDifference from "./.internal/baseDifference";
import baseFlatten from "./.internal/baseFlatten";

export default function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : []
}
