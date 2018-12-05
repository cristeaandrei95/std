import { test } from "tap";
import { isArguments } from "./index.js";

test("isArguments", ({ equal, end }) => {
	equal(isArguments(true), false, "true");
	equal(isArguments(false), false, "false");

	equal(isArguments(null), false, "null");
	equal(isArguments(undefined), false, "undefined");

	equal(isArguments(0), false, "0");
	equal(isArguments(1), false, "1");
	equal(isArguments(1.0), false, "1.0");
	equal(isArguments(NaN), false, "NaN");
	equal(isArguments(Infinity), false, "Infinity");

	equal(isArguments("sample"), false, "string");
	equal(isArguments(""), false, "empty string");

	equal(isArguments({}), false, "{}");
	equal(isArguments([]), false, "[]");
	equal(isArguments(function() {}), false, "function () {}");
	equal(isArguments(function*() {}), false, "function * () {}");
	equal(isArguments(() => {}), false, "() => {}");

	equal(isArguments(new Date()), true, "new Date()");
	equal(isArguments(new Error("sample")), false, "new Error()");
	equal(isArguments(/sample/g), false, "/sample/g");

	function example() {
		equal(isArguments(arguments), true);
	}
	example();

	end();
});
