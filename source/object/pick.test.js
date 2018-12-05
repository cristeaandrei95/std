import { test } from "tap";
import pick from "./pick.js";

test("pick a property from an object", ({ end, same }) => {
	same(pick(["a"], { a: "a", b: "b" }), { a: "a" });

	end();
});

test("pick getter properties", ({ end, equal, ok }) => {
	const source = new Array(1, 2, 3);
	const keys = ["map", "filter", "includes"];
	const result = pick(keys, source);

	ok(result.hasOwnProperty("map"));
	ok(result.hasOwnProperty("includes"));
	ok(result.hasOwnProperty("filter"));
	equal(source.map, result.map);

	end();
});

test("pick a property from a function", ({ end, same }) => {
	function fn() {}
	fn.a = "foo";
	fn.b = "bar";
	same(pick(["a"], fn), { a: "foo" });

	end();
});

test("pick multiple properties", ({ end, same }) => {
	same(pick(["a", "b"], { a: "a", b: "b", c: "c" }), { a: "a", b: "b" });

	same(pick(["foo", "bar"], { foo: "foo", bar: "bar", baz: "baz" }), {
		foo: "foo",
		bar: "bar",
	});

	end();
});

test("ignore keys that do not exist", ({ end, same }) => {
	same(pick(["a", "b", "foo"], { a: "a", b: "b", c: "c" }), { a: "a", b: "b" });
	same(pick(["foo", "bar", "abc"], { foo: "foo", bar: "bar", baz: "baz" }), {
		foo: "foo",
		bar: "bar",
	});

	end();
});

test("throws arguments are invalid", ({ end, throws }) => {
	throws(() => {
		pick(null, "a");
	});
	throws(() => {
		pick(false, "a");
	});
	throws(() => {
		pick("", "a");
	});
	throws(() => {
		pick("a", { a: 1 });
	});

	end();
});
