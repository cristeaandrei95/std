import { test } from "tap";
import { isError } from "./index.js";

test("isError", ({ equal, end }) => {
	equal(isError(true), false, "true");
	equal(isError(false), false, "false");

	equal(isError(null), false, "null");
	equal(isError(undefined), false, "undefined");

	equal(isError(0), false, "0");
	equal(isError(1), false, "1");
	equal(isError(1.0), false, "1.0");
	equal(isError(NaN), false, "NaN");
	equal(isError(Infinity), false, "Infinity");

	equal(isError("sample"), false, "string");
	equal(isError(""), false, "empty string");

	equal(isError({}), false, "{}");
	equal(isError([]), false, "[]");
	equal(isError(function() {}), false, "function () {}");
	equal(isError(function*() {}), false, "function * () {}");
	equal(isError(() => {}), false, "() => {}");

	equal(isError(new Date()), false, "new Date()");
	equal(isError(new Error("sample")), true, "new Error()");
	equal(isError(/sample/g), false, "/sample/g");

	end();
});
