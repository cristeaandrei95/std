import { test } from 'tap';
import { slice } from "./index.js";

test("slice", ({ same, end }) => {
	const list = [1, 2, 3, 4];
	const result = [3, 4];

	same(slice(list, 2), result);

	end();
})
