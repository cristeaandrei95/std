import { test } from "tap";
import set from "./set.js";

test("add simple key:value", ({ end, equal }) => {
	const target = { foo: "bar" };

	set(["foo"], "baz", target);

	equal(target.foo, "baz");

	end();
});

test("mutates nested data", ({ end, equal }) => {
	const target = { foo: { bar: { baz: "lorem" }, bim: null, bor: undefined } };

	set(["foo", "bar", "baz"], "ipsum", target);
	equal(target.foo.bar.baz, "ipsum");

	set(["foo", "bim", "baz"], "ipsum", target);
	equal(target.foo.bim.baz, "ipsum");

	set(["foo", "bor", "baz"], "ipsum", target);
	equal(target.foo.bor.baz, "ipsum");

	end();
});

test("adds nested data", ({ end, same }) => {
	const target = { beep: "boop" };
	const expected = { beep: "boop", foo: { bar: { baz: "ipsum" } } };

	set(["foo", "bar", "baz"], "ipsum", target);
	same(target, expected);

	end();
});

test("throws if finds string or number on path", ({ end, throws }) => {
	throws(() => {
		set(["foo", "bar", "baz"], "ipsum", { foo: "bar" });
	});

	throws(() => {
		set(["foo", "bar", "baz"], "ipsum", { foo: 0 });
	});

	end();
});
