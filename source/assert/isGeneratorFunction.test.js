import { test } from "tap";
import { isGeneratorFunction } from "./index.js";

test("isGeneratorFunction", ({ equal, end }) => {
	equal(isGeneratorFunction(true), false, "true");
	equal(isGeneratorFunction(false), false, "false");

	equal(isGeneratorFunction(null), false, "null");
	equal(isGeneratorFunction(undefined), false, "undefined");

	equal(isGeneratorFunction(0), false, "0");
	equal(isGeneratorFunction(1), false, "1");
	equal(isGeneratorFunction(1.0), false, "1.0");
	equal(isGeneratorFunction(NaN), false, "NaN");
	equal(isGeneratorFunction(Infinity), false, "Infinity");

	equal(isGeneratorFunction("sample"), false, "string");
	equal(isGeneratorFunction(""), false, "empty string");

	equal(isGeneratorFunction({}), false, "{}");
	equal(isGeneratorFunction([]), false, "[]");
	equal(isGeneratorFunction(function() {}), false, "function () {}");
	equal(isGeneratorFunction(function*() {}), true, "function * () {}");
	equal(isGeneratorFunction(() => {}), false, "() => {}");

	equal(isGeneratorFunction(new Date()), false, "new Date()");
	equal(isGeneratorFunction(new Error("sample")), false, "new Error()");
	equal(isGeneratorFunction(/sample/g), false, "/sample/g");

	end();
});
