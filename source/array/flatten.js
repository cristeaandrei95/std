import { ArgumentError } from "../error";
import { isArray } from "../assert";

export default function flatten(list) {
	if (!isArray(list)) {
		throw new ArgumentError("list", "array", list);
	}

	const result = [];

	for (let i = 0; i < list.length; i++) {
		const item = list[i];

		if (isArray(item)) {
			result.push.apply(result, flatten(item));
		} else {
			result.push(item);
		}
	}

	return result;
}
