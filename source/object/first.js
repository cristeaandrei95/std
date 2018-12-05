import { ArgumentError } from "../error";
import { isObject } from "../assert";

export default function first(source) {
	if (!isObject(source)) {
		throw new ArgumentError("source", "object", source);
	}

	for (const key in source) {
		return source[key];
	}
}
