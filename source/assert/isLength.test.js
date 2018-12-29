import { test } from "tap";
import { isLength } from "./index.js";

test("isLength", ({ equal, end }) => {
	equal(isLength(true), false, "true");
	equal(isLength(false), false, "false");

	equal(isLength(null), false, "null");
	equal(isLength(undefined), false, "undefined");

	equal(isLength(0), true, "0");
	equal(isLength(1), true, "1");
	equal(isLength(1.0), true, "1.0");
	equal(isLength(NaN), false, "NaN");
	equal(isLength(Infinity), false, "Infinity");

	equal(isLength("sample"), false, "string");
	equal(isLength(""), false, "empty string");

	equal(isLength({}), false, "{}");
	equal(isLength([]), false, "[]");
	equal(isLength(function() {}), false, "function () {}");
	equal(isLength(function*() {}), false, "function * () {}");
	equal(isLength(() => {}), false, "() => {}");

	equal(isLength(new Date()), false, "new Date()");
	equal(isLength(new Error("sample")), false, "new Error()");
	equal(isLength(/sample/g), false, "/sample/g");

	end();
});
