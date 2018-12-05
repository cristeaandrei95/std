import { test } from "tap";
import firstKey from "./firstKey.js";

test("get first key from an object", ({ end, equal }) => {
	equal(firstKey({ foo: 123, bar: 321 }), "foo");
	equal(firstKey({ bar: 321 }), "bar");
	equal(firstKey({ [(dynamic = "dynamic")]: 321 }), "dynamic");

	end();
});
