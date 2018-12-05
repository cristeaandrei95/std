import { test } from "tap";
import { isFunction } from "./index.js";

test("isFunction", ({ equal, end }) => {
	equal(isFunction(true), false, "true");
	equal(isFunction(false), false, "false");

	equal(isFunction(null), false, "null");
	equal(isFunction(undefined), false, "undefined");

	equal(isFunction(0), false, "0");
	equal(isFunction(1), false, "1");
	equal(isFunction(1.0), false, "1.0");
	equal(isFunction(NaN), false, "NaN");
	equal(isFunction(Infinity), false, "Infinity");

	equal(isFunction("sample"), false, "string");
	equal(isFunction(""), false, "empty string");

	equal(isFunction({}), false, "{}");
	equal(isFunction([]), false, "[]");
	equal(isFunction(function() {}), true, "function () {}");
	equal(isFunction(function*() {}), true, "function * () {}");
	equal(isFunction(() => {}), true, "() => {}");

	equal(isFunction(new Date()), false, "new Date()");
	equal(isFunction(new Error("sample")), false, "new Error()");
	equal(isFunction(/sample/g), false, "/sample/g");

	end();
});
