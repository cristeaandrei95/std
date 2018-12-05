import { test } from "tap";
import insertAt from "./insertAt.js";

test("insertAt", ({ same, end }) => {
	const list = [1, 2, 6, 7];
	const items = [3, 4, 5];
	const result = [1, 2, 3, 4, 5, 6, 7];

	same(insertAt(list, 2, items), result);

	end();
});

test("insertAt", ({ throws, end }) => {
	throws(function() {
		insertAt([], 1);
	});

	end();
});
