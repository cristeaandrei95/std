export default function shuffle(source) {
	const list = source.slice();

	let index = list.length;

	while (index > 0) {
		const random = Math.floor(Math.random() * index--);
		const current = list[index];

		list[index] = list[random];
		list[random] = current;
	}

	return list;
}
