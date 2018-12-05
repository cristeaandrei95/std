import { ArgumentError } from "../error";
import { isArray, isString, isObject } from "../assert";

export default function set(path, value, target) {
	if (!isArray(path)) {
		throw new ArgumentError("path", "array", path);
	}

	if (!isObject(target)) {
		throw new ArgumentError("target", "object", target);
	}

	for (let i = 0, node = target; i < path.length; ++i) {
		const isLast = i === path.length - 1;
		const key = path[i];

		// add value on leaf
		if (isLast) {
			node[key] = value;
		} else {
			let value = node[key];

			// create nested objects if not available
			if (value == null) {
				node[key] = value = {};
			} else if (!isObject(value)) {
				const where = path.slice(0, i).join(".");

				throw new Error(
					`set(): path on object encountered a ${key} "${value}" on "${where}" last:${isLast}  i:${i} l:${
						path.length
					}`
				);
			}

			node = value;
		}
	}
}
