export default function arrayIncludesWith(array, target, comparator) {
	if (array == null) {
		return false;
	}

	for (const value of array) {
		if (comparator(target, value)) {
			return true;
		}
	}
	return false;
}
