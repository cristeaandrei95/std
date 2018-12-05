import { test } from "tap";
import union from "./union.js";

test("union all elements in the given arrays", ({ end, same }) => {
	same(
		union(["a"], ["b", "c"], ["d", "e", "f"]),
		["a", "b", "c", "d", "e", "f"].sort()
	);

	same(
		union(["a", "b", "c"], ["b", "c"], ["a"], ["b", "c"], ["d", "e", "f"]),
		["a", "b", "c", "d", "e", "f"].sort()
	);

	end();
});

test("ignore falsey values", ({ end, same }) => {
	same(union(["a"], undefined, ["d", "e", "f"]), ["a", "d", "e", "f"].sort());

	end();
});
