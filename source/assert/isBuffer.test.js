import { test } from "tap";
import { isBuffer } from "./index.js";

test("isBuffer", ({ equal, end }) => {
	equal(isBuffer(true), false, "true");
	equal(isBuffer(false), false, "false");

	equal(isBuffer(null), false, "null");
	equal(isBuffer(undefined), false, "undefined");

	equal(isBuffer(0), false, "0");
	equal(isBuffer(1), false, "1");
	equal(isBuffer(1.0), false, "1.0");
	equal(isBuffer(NaN), false, "NaN");
	equal(isBuffer(Infinity), false, "Infinity");

	equal(isBuffer("sample"), false, "string");
	equal(isBuffer(""), false, "empty string");

	equal(isBuffer({}), false, "{}");
	equal(isBuffer([]), false, "[]");
	equal(isBuffer(function() {}), false, "function () {}");
	equal(isBuffer(function*() {}), false, "function * () {}");
	equal(isBuffer(() => {}), false, "() => {}");

	equal(isBuffer(new Date()), false, "new Date()");
	equal(isBuffer(new Error("sample")), false, "new Error()");
	equal(isBuffer(/sample/g), false, "/sample/g");

	equal(isBuffer(Buffer.alloc(4)), true, "Buffer.alloc(4)");
	equal(isBuffer({ isBuffer: null }), false, "{ isBuffer: null }");
	equal(
		isBuffer(Buffer.allocUnsafeSlow(100)),
		true,
		"Buffer.allocUnsafeSlow(100)"
	);
	equal(
		isBuffer({
			isBuffer: function() {
				throw new Error();
			}
		}),
		false,
		"{ isBuffer: function () { throw new Error() } }"
	);

	end();
});
