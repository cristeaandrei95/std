import { test } from "tap";
import { compact } from "./index.js";

test("remove falsy values", ({ same, end }) => {
	const list = [1, "a", null, "", 5, undefined];
	const result = [1, "a", 5];
	
	same(compact(list), result);

	end();
});
