import { test } from "tap";
import { isNumber } from "./index.js";

test("isNumber", ({ equal, end }) => {
	equal(isNumber(true), false, "true");
	equal(isNumber(false), false, "false");

	equal(isNumber(null), false, "null");
	equal(isNumber(undefined), false, "undefined");

	equal(isNumber(0), true, "0");
	equal(isNumber(1), true, "1");
	equal(isNumber(1.0), true, "1.0");
	equal(isNumber(0xff), true, "0xFF");
	equal(isNumber(NaN), false, "NaN");
	equal(isNumber(Infinity), true, "Infinity");

	equal(isNumber("sample"), false, "string");
	equal(isNumber(""), false, "empty string");

	equal(isNumber({}), false, "{}");
	equal(isNumber([]), false, "[]");
	equal(isNumber(function() {}), false, "function () {}");
	equal(isNumber(function*() {}), false, "function * () {}");
	equal(isNumber(() => {}), false, "() => {}");

	equal(isNumber(new Date()), false, "new Date()");
	equal(isNumber(new Error("sample")), false, "new Error()");
	equal(isNumber(/sample/g), false, "/sample/g");

	end();
});
