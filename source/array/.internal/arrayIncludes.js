import baseIndexOf from "./baseIndexOf.js";

export default function arrayIncludes(array, value) {
	const length = array == null ? 0 : array.length;
	return !!length && baseIndexOf(array, value, 0) > -1;
}
