export default function pickRandom(source) {
	const index = ~~(Math.random() * source.length);

	return source[index];
}
