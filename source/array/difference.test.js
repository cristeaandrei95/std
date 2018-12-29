import { test } from "tap";
import { difference } from "./index.js";

test("difference", ({ same, end }) => {
	const array = [1, 2];
	const values = [2, 3];
	const result = [1];

	same(difference(array, values), result);

	end();
});
