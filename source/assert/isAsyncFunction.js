export default function isAsyncFunction(source) {
	return (
		source != null &&
		source.constructor &&
		source.constructor.name === "AsyncFunction"
	);
}
