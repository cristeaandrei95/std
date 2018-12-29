import { test } from "tap";
import { isArrayLike } from "./index.js";

test("isArrayLike", ({ equal, end }) => {
	equal(isArrayLike(true), false, "false");
	equal(isArrayLike(false), false, "false");

	equal(isArrayLike(null), false, "null");
	equal(isArrayLike(undefined), false, "undefined");

	equal(isArrayLike(0), false, "0");
	equal(isArrayLike(1), false, "1");
	equal(isArrayLike(1.0), false, "1.0");
	equal(isArrayLike(NaN), false, "NaN");
	equal(isArrayLike(Infinity), false, "Infinity");

	equal(isArrayLike("sample"), true, "string");
	equal(isArrayLike(""), true, "empty string");

	equal(isArrayLike({}), false, "{}");
	equal(isArrayLike([]), true, "[]");
	equal(isArrayLike(function() {}), false, "function () {}");
	equal(isArrayLike(function*() {}), false, "function * () {}");
	equal(isArrayLike(() => {}), false, "() => {}");

	equal(isArrayLike(new Date()), false, "new Date()");
	equal(isArrayLike(new Error("sample")), false, "new Error()");
	equal(isArrayLike(/sample/g), false, "/sample/g");

	end();
});
