import { test } from "tap";
import { isPrimitive } from "./index.js";

test("isPrimitive", ({ equal, end }) => {
	equal(isPrimitive(true), true, "true");
	equal(isPrimitive(false), true, "false");

	equal(isPrimitive(null), true, "null");
	equal(isPrimitive(undefined), true, "undefined");
	equal(isPrimitive(void 0), true, "void 0");

	equal(isPrimitive(0), true, "0");
	equal(isPrimitive(1), true, "1");
	equal(isPrimitive(1.0), true, "1.0");
	equal(isPrimitive(NaN), true, "NaN");
	equal(isPrimitive(Infinity), true, "Infinity");

	equal(isPrimitive("sample"), true, "string");
	equal(isPrimitive(""), true, "empty string");

	equal(isPrimitive({}), false, "{}");
	equal(isPrimitive([]), false, "[]");
	equal(isPrimitive(function() {}), false, "function () {}");
	equal(isPrimitive(function*() {}), false, "function * () {}");
	equal(isPrimitive(() => {}), false, "() => {}");

	equal(isPrimitive(new Date()), false, "new Date()");
	equal(isPrimitive(new Error("sample")), false, "new Error()");
	equal(isPrimitive(/sample/g), false, "/sample/g");
	equal(isPrimitive(Symbol("foo")), true, "Symbol('foo')");

	end();
});
