import { isArray } from "../assert";

export default function union(...sources) {
	const result = [];

	for (let source of sources) {
		if (!isArray(source)) continue;

		for (let i = 0; i < source.length; i++) {
			const item = source[i];

			if (result.indexOf(item) === -1) {
				result.push(item);
			}
		}
	}

	return result.sort();
}
