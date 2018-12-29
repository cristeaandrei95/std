import isArguments from "../../assert/isArguments.js";

export default function isFlattenable(value) {
	return Array.isArray(value) || isArguments(value) || !!(value && value[spreadableSymbol]);
}
