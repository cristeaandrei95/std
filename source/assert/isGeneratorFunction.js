export default function isGeneratorFunction(source) {
	return (
		source != null &&
		source.constructor &&
		source.constructor.name === "GeneratorFunction"
	);
}
