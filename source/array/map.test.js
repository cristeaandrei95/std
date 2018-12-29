import { test } from "tap";
import { map } from "./index.js";

test("map", ({ same, end }) => {
	const list = [4, 8];
	const result = [16, 64];

	function square(n) {
		return n * n;
	}

	same(map(list, square), result);

	end();
});
