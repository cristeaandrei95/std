import { ArgumentError } from "../error";
import { isString } from "../assert";

export default function endsWith(source, search) {
	if (!isString(source)) {
		throw new ArgumentError("source", "string", source);
	}

	if (!isString(search)) {
		throw new ArgumentError("search", "string", search);
	}

	// return false if search string is empty
	if (!search.length) {
		return false;
	}

	const offset = source.length - search.length;
	const index = source.indexOf(search, offset);

	return index !== -1;
}
