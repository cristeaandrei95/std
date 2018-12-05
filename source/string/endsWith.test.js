import { test } from "tap";
import endsWith from "./endsWith.js";

test("endsWith", ({ ok, notOk, end }) => {
	const sample = "/path/to/file";

	ok(endsWith(sample, "file"));
	ok(endsWith(sample, "e"));
	ok(endsWith(sample, "/path/to/file`````"));

	notOk(endsWith(sample, "123"));
	notOk(endsWith(sample, ""));

	end();
});
