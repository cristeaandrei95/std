// source: https://github.com/jonschlinkert/kind-of/blob/master/index.js`
import {
	isGeneratorFunction,
	isGeneratorObject,
	isAsyncFunction,
	isArray,
	isBuffer,
	isArguments,
	isDate,
	isError,
	isRegExp,
} from "../assert";

const toString = Object.prototype.toString;

function getConstructorName(source) {
	return source.constructor ? source.constructor.name : null;
}

export default function typeOf(source) {
	if (source === void 0) return "undefined";
	if (source === null) return "null";

	const type = typeof source;

	if (type === "boolean") return "boolean";
	if (type === "string") return "string";
	if (type === "number") return "number";
	if (type === "symbol") return "symbol";

	if (type === "function") {
		if (isAsyncFunction(source)) {
			return "asyncfunction";
		}

		if (isGeneratorFunction(source)) {
			return "generatorfunction";
		}

		return "function";
	}

	if (isArray(source)) return "array";
	if (isDate(source)) return "date";
	if (isRegExp(source)) return "regexp";
	if (isError(source)) return "error";
	if (isArguments(source)) return "arguments";
	if (isBuffer(source)) return "buffer";

	switch (getConstructorName(source)) {
		case "Promise":
			return "promise";

		// Set, Map, WeakSet, WeakMap
		case "WeakMap":
			return "weakmap";
		case "WeakSet":
			return "weakset";
		case "Map":
			return "map";
		case "Set":
			return "set";

		// 8-bit typed arrays
		case "Int8Array":
			return "int8array";
		case "Uint8Array":
			return "uint8array";
		case "Uint8ClampedArray":
			return "uint8clampedarray";

		// 16-bit typed arrays
		case "Int16Array":
			return "int16array";
		case "Uint16Array":
			return "uint16array";

		// 32-bit typed arrays
		case "Int32Array":
			return "int32array";
		case "Uint32Array":
			return "uint32array";
		case "Float32Array":
			return "float32array";
		case "Float64Array":
			return "float64array";
	}

	if (isGeneratorObject(source)) {
		return "generator";
	}

	// Non-plain objects
	const stringified = toString.call(source);

	switch (stringified) {
		case "[object Object]":
			return "object";
		// iterators
		case "[object Map Iterator]":
			return "mapiterator";
		case "[object Set Iterator]":
			return "setiterator";
		case "[object String Iterator]":
			return "stringiterator";
		case "[object Array Iterator]":
			return "arrayiterator";
	}

	// other
	return stringified
		.slice(8, -1)
		.toLowerCase()
		.replace(/\s/g, "");
}
