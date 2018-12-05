import { test } from "tap";
import flatten from "./flatten.js";

const NOOP = function() {};

test("flattened arrays are unchanged", ({ same, end }) => {
	const list = [1, 2, 3, 4, 5];

	same(flatten(list), list);

	end();
});

test("unflattened arrays are flattened", ({ same, end }) => {
	const list = [1, [false, { a: 0 }], [NOOP, [5, 6], []], 8];
	const result = [1, false, { a: 0 }, NOOP, 5, 6, 8];

	same(flatten(list), result);

	end();
});
