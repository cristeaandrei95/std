import { test } from "tap";
import { isDate } from "./index.js";

test("isDate", ({ equal, end }) => {
	equal(isDate(true), false, "true");
	equal(isDate(false), false, "false");

	equal(isDate(null), false, "null");
	equal(isDate(undefined), false, "undefined");

	equal(isDate(0), false, "0");
	equal(isDate(1), false, "1");
	equal(isDate(1.0), false, "1.0");
	equal(isDate(NaN), false, "NaN");
	equal(isDate(Infinity), false, "Infinity");

	equal(isDate("sample"), false, "string");
	equal(isDate(""), false, "empty string");

	equal(isDate({}), false, "{}");
	equal(isDate([]), false, "[]");
	equal(isDate(function() {}), false, "function () {}");
	equal(isDate(function*() {}), false, "function * () {}");
	equal(isDate(() => {}), false, "() => {}");

	equal(isDate(new Date()), true, "new Date()");
	equal(isDate(new Error("sample")), false, "new Error()");
	equal(isDate(/sample/g), false, "/sample/g");

	end();
});
