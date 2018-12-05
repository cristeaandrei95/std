import { test } from "tap";
import { isObject } from "./index.js";

test("isObject", ({ equal, end }) => {
	equal(isObject(true), false, "true");
	equal(isObject(false), false, "false");

	equal(isObject(null), false, "null");
	equal(isObject(undefined), false, "undefined");

	equal(isObject(0), false, "0");
	equal(isObject(1), false, "1");
	equal(isObject(1.0), false, "1.0");
	equal(isObject(NaN), false, "NaN");
	equal(isObject(Infinity), false, "Infinity");

	equal(isObject("sample"), false, "string");
	equal(isObject(""), false, "empty string");

	equal(isObject({}), true, "{}");
	equal(isObject([]), true, "[]");
	equal(isObject(function() {}), true, "function () {}");
	equal(isObject(function*() {}), true, "function * () {}");
	equal(isObject(() => {}), true, "() => {}");

	equal(isObject(new Date()), true, "new Date()");
	equal(isObject(new Error("sample")), true, "new Error()");
	equal(isObject(/sample/g), true, "/sample/g");

	end();
});
