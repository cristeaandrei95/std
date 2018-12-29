import { test } from "tap";
import { chunk } from "./index.js";

test("chunk", ({ same, end }) => {
	const array = [1, 2, 3, 4];
	const result = [[1, 2],[3, 4]];

	same(chunk(array, 2), result);

	end();
});
