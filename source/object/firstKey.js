import { ArgumentError } from "../error";
import { isObject } from "../assert";

export default function firstKey(source) {
	if (!isObject(source)) {
		throw new ArgumentError("source", "object", source);
	}

	for (const key in source) {
		return key;
	}
}
