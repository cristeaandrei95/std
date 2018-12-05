export default function isObject(source) {
	const type = typeof source;

	return source != null && (type === "object" || type === "function");
}
