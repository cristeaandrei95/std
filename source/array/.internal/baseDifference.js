import SetCache from "./SetCache.js"
import arrayIncludes from "./arrayIncludes.js"
import arrayIncludesWith from "./arrayIncludesWith.js";
import map from "../map.js";
import cacheHas from "./cacheHas.js";

const LARGE_ARRAY_SIZE = 200;

export default function baseDifference(array, values, iteratee, comparator) {
	let includes = arrayIncludes;
	let isCommon = true;
	const result = [];
	const valuesLength = values.length;

	if (!array.length) {
		return result;
	}
	if (iteratee) {
		values = map(values, (value) => iteratee(value));
	}
	if (comparator) {
		includes = arrayIncludesWith;
		isCommon = false;
	}
	else if (values.length >= LARGE_ARRAY_SIZE) {
		includes = cacheHas;
		isCommon = false;
		values = new SetCache(values);
	}

	outer:
	for (let value of array) {
		const computed = iteratee == null ? value : iteratee(value);

		value = (comparator || value !== 0) ? value : 0;

		if (isCommon && computed === computed) {
			let valuesIndex = valuesLength;

			while (valuesIndex--) {
				if (values[valuesIndex] === computed) continue outer;
			}

			result.push(value);
		}
		else if (!includes(values, computed, comparator)) {
			result.push(value);
		}
	}
	return result;
}
