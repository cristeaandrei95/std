export default function isRelative(path) {
	const charAt0 = path.charAt(0);
	const charAt1 = path.charAt(1);

	return charAt0 === "." && (charAt1 === "/" || charAt1 === ".");
}
