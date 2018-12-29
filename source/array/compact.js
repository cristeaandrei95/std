export default function compact(array) {
	const length = array == null ? 0 : array.length;
	let index = -1;
	let resIndex = 0;
	let result = [];

	while (++index < length) {
		let value = array[index];
		if (value) {
			result[resIndex++] = value;
		}
	}

	return result;
}
