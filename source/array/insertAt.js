import { ArgumentError } from "../error";
import { isArray, isNumber } from "../assert";

export default function insertAt(list, index, items) {
	if (!isArray(list)) {
		throw new ArgumentError("list", "array", list);
	}

	if (!isNumber(index)) {
		throw new ArgumentError("index", "number", index);
	}

	if (!isArray(items)) {
		throw new ArgumentError("items", "array", items);
	}

	list.splice(index, 0, ...items);

	return list;
}
