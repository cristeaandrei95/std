import { test } from "tap";
import { isBoolean } from "./index.js";

test("isBoolean", ({ equal, end }) => {
	equal(isBoolean(true), true, "true");
	equal(isBoolean(false), true, "false");

	equal(isBoolean(null), false, "null");
	equal(isBoolean(undefined), false, "undefined");

	equal(isBoolean(0), false, "0");
	equal(isBoolean(1), false, "1");
	equal(isBoolean(1.0), false, "1.0");
	equal(isBoolean(NaN), false, "NaN");
	equal(isBoolean(Infinity), false, "Infinity");

	equal(isBoolean("sample"), false, "string");
	equal(isBoolean(""), false, "empty string");

	equal(isBoolean({}), false, "{}");
	equal(isBoolean([]), false, "[]");
	equal(isBoolean(function() {}), false, "function () {}");
	equal(isBoolean(function*() {}), false, "function * () {}");
	equal(isBoolean(() => {}), false, "() => {}");

	equal(isBoolean(new Date()), false, "new Date()");
	equal(isBoolean(new Error("sample")), false, "new Error()");
	equal(isBoolean(/sample/g), false, "/sample/g");

	end();
});
