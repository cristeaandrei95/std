import { test } from "tap";
import { isTruthy } from "./index.js";

test("isTruthy", ({ equal, end }) => {
	equal(isTruthy(true), true, "true");
	equal(isTruthy(false), false, "false");

	equal(isTruthy(null), false, "null");
	equal(isTruthy(undefined), false, "undefined");
	equal(isTruthy(void 0), false, "void 0");

	equal(isTruthy(0), false, "0");
	equal(isTruthy(1), true, "1");
	equal(isTruthy(1.0), true, "1.0");
	equal(isTruthy(NaN), false, "NaN");
	equal(isTruthy(Infinity), true, "Infinity");

	equal(isTruthy("sample"), true, "string");
	equal(isTruthy(""), false, "empty string");

	equal(isTruthy({}), true, "{}");
	equal(isTruthy([]), true, "[]");
	equal(isTruthy(function() {}), true, "function () {}");
	equal(isTruthy(function*() {}), true, "function * () {}");
	equal(isTruthy(() => {}), true, "() => {}");

	equal(isTruthy(new Date()), true, "new Date()");
	equal(isTruthy(new Error("sample")), true, "new Error()");
	equal(isTruthy(/sample/g), true, "/sample/g");

	end();
});
