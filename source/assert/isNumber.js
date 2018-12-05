import isNaN from "./isNaN.js";

export default function isNumber(source) {
	return typeof source === "number" && !isNaN(source);
}
