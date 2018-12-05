import { ArgumentError } from "../error";
import { isArray, isString, isObject } from "../assert";

export default function get(path, target) {
	if (!isArray(path)) {
		throw new ArgumentError("path", "array", path);
	}

	if (!isObject(target)) {
		throw new ArgumentError("target", "object", target);
	}

	for (let i = 0, node = target; i < path.length; ++i) {
		const isLast = i === path.length - 1;
		const key = path[i];

		if (node === undefined) {
			return undefined;
		}

		if (isLast) {
			return node[key];
		} else {
			node = node[key];

			if (!isObject(node)) {
				return undefined;
			}
		}
	}
}
