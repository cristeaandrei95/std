import { test } from "tap";
import get from "./get.js";

test("get value by single key", ({ end, equal }) => {
	const source = { foo: "bar" };
	const value = get(["foo"], source);

	equal(value, "bar");
	end();
});

test("get value by deep path", ({ end, equal }) => {
	const source = { foo: { bar: { baz: "lorem" } } };
	const value = get(["foo", "bar", "baz"], source);

	equal(value, "lorem");
	end();
});

test("get mixed values (array and objects)", ({ end, equal, same }) => {
	const source = {
		a: { locals: { name: { first: "Brian" } } },
		b: { locals: { name: { last: "Woodward" } } },
		c: { locals: { paths: ["a.txt", "b.js", "c.hbs"] } },
	};

	same(get(["a", "locals", "name"], source), { first: "Brian" });
	same(get(["b", "locals", "name"], source), { last: "Woodward" });
	equal(get(["b", "locals", "name", "last"], source), "Woodward");
	equal(get(["c", "locals", "paths", "0"], source), "a.txt");
	equal(get(["c", "locals", "paths", "1"], source), "b.js");
	equal(get(["c", "locals", "paths", "2"], source), "c.hbs");

	end();
});

test("return undefine if no value on path", ({ end, equal }) => {
	const source = { foo: { bar: "baz" } };

	equal(get([], source), undefined);
	equal(get(["foo", "boom"], source), undefined);
	equal(get(["foo", "bar", "boom"], source), undefined);
	end();
});
