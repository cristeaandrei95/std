function isNaN(source) {
	return source !== source;
}

export default Number.isNaN || isNaN;
