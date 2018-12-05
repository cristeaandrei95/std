export default function delay(milliseconds = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, milliseconds);
	});
}
