import isFalsy from "./isFalsy.js";

/*
	https://developer.mozilla.org/en-US/docs/Glossary/Truthy

	All values are truthy unless they are defined as falsy
	(i.e., except for false, 0, "", null, undefined, and NaN).
*/
export default function isTruthy(source) {
	return !isFalsy(source);
}
