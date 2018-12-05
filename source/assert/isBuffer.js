export default function isBuffer(source) {
	return typeof Buffer === "function" && Buffer.isBuffer(source);
}
