import { test } from "tap";
import { isRegExp } from "./index.js";

test("isRegExp", ({ equal, end }) => {
	equal(isRegExp(true), false, "true");
	equal(isRegExp(false), false, "false");

	equal(isRegExp(null), false, "null");
	equal(isRegExp(undefined), false, "undefined");

	equal(isRegExp(0), false, "0");
	equal(isRegExp(1), false, "1");
	equal(isRegExp(1.0), false, "1.0");
	equal(isRegExp(NaN), false, "NaN");
	equal(isRegExp(Infinity), false, "Infinity");

	equal(isRegExp("sample"), false, "string");
	equal(isRegExp(""), false, "empty string");

	equal(isRegExp({}), false, "{}");
	equal(isRegExp([]), false, "[]");
	equal(isRegExp(function() {}), false, "function () {}");
	equal(isRegExp(function*() {}), false, "function * () {}");
	equal(isRegExp(() => {}), false, "() => {}");

	equal(isRegExp(new Date()), false, "new Date()");
	equal(isRegExp(new Error("sample")), false, "new Error()");
	equal(isRegExp(/sample/g), true, "/sample/g");

	end();
});
