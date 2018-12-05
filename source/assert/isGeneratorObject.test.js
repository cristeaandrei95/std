import { test } from "tap";
import { isGeneratorObject } from "./index.js";

test("isGeneratorObject", ({ equal, end }) => {
	equal(isGeneratorObject(true), false, "true");
	equal(isGeneratorObject(false), false, "false");

	equal(isGeneratorObject(null), false, "null");
	equal(isGeneratorObject(undefined), false, "undefined");

	equal(isGeneratorObject(0), false, "0");
	equal(isGeneratorObject(1), false, "1");
	equal(isGeneratorObject(1.0), false, "1.0");
	equal(isGeneratorObject(NaN), false, "NaN");
	equal(isGeneratorObject(Infinity), false, "Infinity");

	equal(isGeneratorObject("sample"), false, "string");
	equal(isGeneratorObject(""), false, "empty string");

	equal(isGeneratorObject({}), false, "{}");
	equal(isGeneratorObject([]), false, "[]");
	equal(isGeneratorObject(function() {}), false, "function () {}");
	equal(isGeneratorObject(function*() {}), false, "function * () {}");
	equal(isGeneratorObject(() => {}), false, "() => {}");

	equal(isGeneratorObject(new Date()), false, "new Date()");
	equal(isGeneratorObject(new Error("sample")), false, "new Error()");
	equal(isGeneratorObject(/sample/g), false, "/sample/g");

	const createGenerator = function*() {};
	const generator = createGenerator();
	const customGenerator = {
		throw() {},
		return() {},
		next() {}
	};

	equal(isGeneratorObject(generator), true, "generator object");
	equal(isGeneratorObject(customGenerator), true, "custom generator object");

	end();
});
