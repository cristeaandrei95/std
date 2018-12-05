import { test } from "tap";
import { isNull } from "./index.js";

test("isNull", ({ equal, end }) => {
	equal(isNull(true), false, "true");
	equal(isNull(false), false, "false");

	equal(isNull(null), true, "null");
	equal(isNull(undefined), false, "undefined");

	equal(isNull(0), false, "0");
	equal(isNull(1), false, "1");
	equal(isNull(1.0), false, "1.0");
	equal(isNull(NaN), false, "NaN");
	equal(isNull(Infinity), false, "Infinity");

	equal(isNull("sample"), false, "string");
	equal(isNull(""), false, "empty string");

	equal(isNull({}), false, "{}");
	equal(isNull([]), false, "[]");
	equal(isNull(function() {}), false, "function () {}");
	equal(isNull(function*() {}), false, "function * () {}");
	equal(isNull(() => {}), false, "() => {}");

	equal(isNull(new Date()), false, "new Date()");
	equal(isNull(new Error("sample")), false, "new Error()");
	equal(isNull(/sample/g), false, "/sample/g");

	end();
});
