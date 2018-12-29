import { test } from "tap";
import { isObjectLike } from "./index.js";

test("isObjectLike", ({ equal, end }) => {
	equal(isObjectLike(true), false, "true");
	equal(isObjectLike(false), false, "false");

	equal(isObjectLike(null), false, "null");
	equal(isObjectLike(undefined), false, "undefined");

	equal(isObjectLike(0), false, "0");
	equal(isObjectLike(1), false, "1");
	equal(isObjectLike(1.0), false, "1.0");
	equal(isObjectLike(NaN), false, "NaN");
	equal(isObjectLike(Infinity), false, "Infinity");

	equal(isObjectLike("sample"), false, "string");
	equal(isObjectLike(""), false, "empty string");

	equal(isObjectLike({}), true, "{}");
	equal(isObjectLike([]), true, "[]");
	equal(isObjectLike(function() {}), false, "function () {}");
	equal(isObjectLike(function*() {}), false, "function * () {}");
	equal(isObjectLike(() => {}), false, "() => {}");

	equal(isObjectLike(new Date()), true, "new Date()");
	equal(isObjectLike(new Error("sample")), true, "new Error()");
	equal(isObjectLike(/sample/g), true, "/sample/g");

	end();
});
