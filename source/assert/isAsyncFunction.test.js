import { test } from "tap";
import { isAsyncFunction } from "./index.js";

test("isAsyncFunction", ({ equal, end }) => {
	equal(isAsyncFunction(true), false, "true");
	equal(isAsyncFunction(false), false, "false");

	equal(isAsyncFunction(null), false, "null");
	equal(isAsyncFunction(undefined), false, "undefined");

	equal(isAsyncFunction(0), false, "0");
	equal(isAsyncFunction(1), false, "1");
	equal(isAsyncFunction(1.0), false, "1.0");
	equal(isAsyncFunction(NaN), false, "NaN");
	equal(isAsyncFunction(Infinity), false, "Infinity");

	equal(isAsyncFunction("sample"), false, "string");
	equal(isAsyncFunction(""), false, "empty string");

	equal(isAsyncFunction({}), false, "{}");
	equal(isAsyncFunction([]), false, "[]");
	equal(isAsyncFunction(function() {}), false, "function () {}");
	equal(isAsyncFunction(function*() {}), false, "function * () {}");
	equal(isAsyncFunction(async function() {}), true, "async function () {}");
	equal(isAsyncFunction(async () => {}), true, "async () => {}");
	equal(isAsyncFunction(() => {}), false, "() => {}");

	equal(isAsyncFunction(new Date()), false, "new Date()");
	equal(isAsyncFunction(new Error("sample")), false, "new Error()");
	equal(isAsyncFunction(/sample/g), false, "/sample/g");

	end();
});
