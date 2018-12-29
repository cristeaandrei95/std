import baseFindIndex from "./baseFindIndex.js";
import baseIsNaN from "./baseIsNaN.js";
import strictIndexOf from "./strictIndexOf.js";

export default function baseIndexOf(array, value, fromIndex) {
	return value === value 
		? strictIndexOf(array, value, fromIndex)
		: baseFindIndex(array, baseIsNaN, fromIndex);
}
