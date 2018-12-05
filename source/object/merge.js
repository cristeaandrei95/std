import { ArgumentError } from "../error";
import { isObject, isArray } from "../assert";
import { union } from "../array";
import { typeOf, clone } from "../utils";

const { keys } = Object;

export default function merge(...sources) {
	if (sources.length === 0) {
		throw new ArgumentError("source", "object", sources[0]);
	}

	const target = {};

	for (const source of sources) {
		if (!isObject(source)) continue;

		for (const key of keys(source)) {
			const oldValue = target[key];
			const newValue = source[key];

			if (isArray(oldValue)) {
				target[key] = union(oldValue, newValue);
			} else if (isObject(oldValue) && isObject(newValue)) {
				target[key] = merge(oldValue, newValue);
			} else {
				target[key] = clone(newValue);
			}
		}
	}

	return target;
}
