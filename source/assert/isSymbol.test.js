import { test } from "tap";
import { isSymbol } from "./index.js";

test("isSymbol", ({ equal, end }) => {
	equal(isSymbol(true), false, "true");
	equal(isSymbol(false), false, "false");

	equal(isSymbol(null), false, "null");
	equal(isSymbol(undefined), false, "undefined");
	equal(isSymbol(void 0), false, "void 0");

	equal(isSymbol(0), false, "0");
	equal(isSymbol(1), false, "1");
	equal(isSymbol(1.0), false, "1.0");
	equal(isSymbol(NaN), false, "NaN");
	equal(isSymbol(Infinity), false, "Infinity");

	equal(isSymbol("sample"), false, "string");
	equal(isSymbol(""), false, "empty string");

	equal(isSymbol({}), false, "{}");
	equal(isSymbol([]), false, "[]");
	equal(isSymbol(function() {}), false, "function () {}");
	equal(isSymbol(function*() {}), false, "function * () {}");
	equal(isSymbol(() => {}), false, "() => {}");

	equal(isSymbol(new Date()), false, "new Date()");
	equal(isSymbol(new Error("sample")), false, "new Error()");
	equal(isSymbol(/sample/g), false, "/sample/g");
	equal(isSymbol(Symbol("foo")), true, "Symbol('foo')");

	end();
});
