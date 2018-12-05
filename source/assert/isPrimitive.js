export default function isPrimitive(source) {
	const type = typeof source;

	return (type !== "object" && type !== "function") || source === null;
}
