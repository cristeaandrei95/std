import isObject from "./isObject.js";
import isFunction from "./isFunction.js";

export default function isGeneratorObject(source) {
	return (
		isObject(source) &&
		isFunction(source.throw) &&
		isFunction(source.return) &&
		isFunction(source.next)
	);
}
