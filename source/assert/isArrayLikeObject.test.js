import { test } from "tap";
import { isArrayLikeObject } from "./index.js";

test("isArrayLikeObject", ({ equal, end }) => {
	equal(isArrayLikeObject(true), false, "false");
	equal(isArrayLikeObject(false), false, "false");

	equal(isArrayLikeObject(null), false, "null");
	equal(isArrayLikeObject(undefined), false, "undefined");

	equal(isArrayLikeObject(0), false, "0");
	equal(isArrayLikeObject(1), false, "1");
	equal(isArrayLikeObject(1.0), false, "1.0");
	equal(isArrayLikeObject(NaN), false, "NaN");
	equal(isArrayLikeObject(Infinity), false, "Infinity");

	equal(isArrayLikeObject("sample"), false, "string");
	equal(isArrayLikeObject(""), false, "empty string");

	equal(isArrayLikeObject({}), false, "{}");
	equal(isArrayLikeObject([]), true, "[]");
	equal(isArrayLikeObject(function() {}), false, "function () {}");
	equal(isArrayLikeObject(function*() {}), false, "function * () {}");
	equal(isArrayLikeObject(() => {}), false, "() => {}");

	equal(isArrayLikeObject(new Date()), false, "new Date()");
	equal(isArrayLikeObject(new Error("sample")), false, "new Error()");
	equal(isArrayLikeObject(/sample/g), false, "/sample/g");

	end();
});
