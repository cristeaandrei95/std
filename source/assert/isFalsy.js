import isNaN from "./isNaN.js";

// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
export default function isFalsy(source) {
	return (
		source === false ||
		source === undefined ||
		source === null ||
		source === 0 ||
		source === "" ||
		isNaN(source)
	);
}
