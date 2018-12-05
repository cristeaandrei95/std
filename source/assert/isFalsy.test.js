import { test } from "tap";
import { isFalsy } from "./index.js";

/*
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
*/

test("isFalsy", ({ equal, end }) => {
	equal(isFalsy(true), false, "true");
	equal(isFalsy(false), true, "false");

	equal(isFalsy(null), true, "null");
	equal(isFalsy(undefined), true, "undefined");

	equal(isFalsy(0), true, "0");
	equal(isFalsy(1), false, "1");
	equal(isFalsy(1.0), false, "1.0");
	equal(isFalsy(NaN), true, "NaN");
	equal(isFalsy(Infinity), false, "Infinity");

	equal(isFalsy("sample"), false, "string");
	equal(isFalsy(""), true, "empty string");

	equal(isFalsy({}), false, "{}");
	equal(isFalsy([]), false, "[]");
	equal(isFalsy(function() {}), false, "function () {}");
	equal(isFalsy(function*() {}), false, "function * () {}");
	equal(isFalsy(() => {}), false, "() => {}");

	equal(isFalsy(new Date()), false, "new Date()");
	equal(isFalsy(new Error("sample")), false, "new Error()");
	equal(isFalsy(/sample/g), false, "/sample/g");

	end();
});
