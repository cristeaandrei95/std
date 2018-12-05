import { ArgumentError } from "../error";
import { isArray, isObject } from "../assert";

export default function pick(keys, source) {
	if (!isArray(keys)) {
		throw new ArgumentError("keys", "array", keys);
	}

	if (!isObject(source)) {
		throw new ArgumentError("source", "object", source);
	}

	const result = {};

	for (const key of keys) {
		if (key in source) {
			result[key] = source[key];
		}
	}

	return result;
}
