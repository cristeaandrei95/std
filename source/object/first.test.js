import { test } from "tap";
import first from "./first.js";

test("get first key from an object", ({ end, equal }) => {
	equal(first({ foo: 123, bar: 321 }), 123);
	equal(first({ bar: 321 }), 321);
	equal(first({ [(dynamic = "dynamic")]: 321 }), 321);

	end();
});
