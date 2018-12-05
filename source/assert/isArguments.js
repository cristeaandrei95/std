export default function isArguments(source) {
	try {
		if (
			typeof source.length === "number" &&
			typeof source.callee === "function"
		) {
			return true;
		}
	} catch (error) {
		if (error.message.indexOf("callee") !== -1) {
			return true;
		}
	}

	return false;
}
