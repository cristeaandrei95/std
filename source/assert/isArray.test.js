import { test } from "tap";
import { isArray } from "./index.js";

test("isArray", ({ equal, end }) => {
	equal(isArray(true), false, "true");
	equal(isArray(false), false, "false");

	equal(isArray(null), false, "null");
	equal(isArray(undefined), false, "undefined");

	equal(isArray(0), false, "0");
	equal(isArray(1), false, "1");
	equal(isArray(1.0), false, "1.0");
	equal(isArray(NaN), false, "NaN");
	equal(isArray(Infinity), false, "Infinity");

	equal(isArray("sample"), false, "string");
	equal(isArray(""), false, "empty string");

	equal(isArray({}), false, "{}");
	equal(isArray([]), true, "[]");
	equal(isArray(function() {}), false, "function () {}");
	equal(isArray(function*() {}), false, "function * () {}");
	equal(isArray(() => {}), false, "() => {}");

	equal(isArray(new Date()), false, "new Date()");
	equal(isArray(new Error("sample")), false, "new Error()");
	equal(isArray(/sample/g), false, "/sample/g");

	end();
});
