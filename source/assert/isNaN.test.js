import { test } from "tap";
import { isNaN } from "./index.js";

test("isNaN", ({ equal, end }) => {
	equal(isNaN(true), false, "true");
	equal(isNaN(false), false, "false");

	equal(isNaN(null), false, "null");
	equal(isNaN(undefined), false, "undefined");

	equal(isNaN(0), false, "0");
	equal(isNaN(1), false, "1");
	equal(isNaN(1.0), false, "1.0");
	equal(isNaN(NaN), true, "NaN");
	equal(isNaN(Infinity), false, "Infinity");

	equal(isNaN("sample"), false, "string");
	equal(isNaN(""), false, "empty string");

	equal(isNaN({}), false, "{}");
	equal(isNaN([]), false, "[]");
	equal(isNaN(function() {}), false, "function () {}");
	equal(isNaN(function*() {}), false, "function * () {}");
	equal(isNaN(() => {}), false, "() => {}");

	equal(isNaN(new Date()), false, "new Date()");
	equal(isNaN(new Error("sample")), false, "new Error()");
	equal(isNaN(/sample/g), false, "/sample/g");

	end();
});
