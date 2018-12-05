import { test } from "tap";
import { isString } from "./index.js";

test("isString", ({ equal, end }) => {
	equal(isString(true), false, "true");
	equal(isString(false), false, "false");

	equal(isString(null), false, "null");
	equal(isString(undefined), false, "undefined");

	equal(isString(0), false, "0");
	equal(isString(1), false, "1");
	equal(isString(1.0), false, "1.0");
	equal(isString(NaN), false, "NaN");
	equal(isString(Infinity), false, "Infinity");

	equal(isString("sample"), true, "string");
	equal(isString(""), true, "empty string");

	equal(isString({}), false, "{}");
	equal(isString([]), false, "[]");
	equal(isString(function() {}), false, "function () {}");
	equal(isString(function*() {}), false, "function * () {}");
	equal(isString(() => {}), false, "() => {}");

	equal(isString(new Date()), false, "new Date()");
	equal(isString(new Error("sample")), false, "new Error()");
	equal(isString(/sample/g), false, "/sample/g");

	end();
});
