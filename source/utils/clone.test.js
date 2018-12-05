import { test } from "tap";
import clone from "./clone.js";

test("clone an array of primitives", ({ end, same }) => {
	same(clone(["alpha", "beta", "gamma"]), ["alpha", "beta", "gamma"]);

	end();
});

test("clone an array with varied elements", ({ end, same }) => {
	const a = [0, "a", {}, [{}], [function() {}], function() {}];
	same(clone(a), a);

	end();
});

test("clone Map", ({ end, notSame }) => {
	const a = new Map([[1, 5]]);
	const b = clone(a);
	a.set(2, 4);
	notSame(a, b);

	end();
});

test("clone Set", ({ end, notSame }) => {
	const a = new Set([2, 1, 3]);
	const b = clone(a);
	a.add(8);
	notSame(a, b);

	end();
});

test("clone arrays", ({ end, same, ok }) => {
	ok(clone([1, 2, 3]) !== [1, 2, 3]);
	same(clone([1, 2, 3]), [1, 2, 3]);

	end();
});

test("clone a regex", ({ end, same, ok }) => {
	ok(clone(/foo/g) !== /foo/g);
	same(clone(/foo/g), /foo/g);

	end();
});

test("clone a date", ({ end, same, ok }) => {
	const date = new Date();
	ok(clone(date) !== date);
	same(clone(date), date);

	end();
});

test("clone objects", ({ end, same }) => {
	same(clone({ a: 1, b: 2, c: 3 }), { a: 1, b: 2, c: 3 });

	end();
});

test("clone an array of objects.", ({ end, same, ok }) => {
	const expected = [{ a: 0 }, { b: 1 }];
	const actual = clone(expected);

	ok(actual !== expected);
	same(actual, expected);
	same(actual[0], expected[0]);

	end();
});

test("clone arrays", ({ end, same }) => {
	same(clone(["alpha", "beta", "gamma"]), ["alpha", "beta", "gamma"]);
	same(clone([1, 2, 3]), [1, 2, 3]);

	const a = [{ a: 0 }, { b: 1 }];
	const b = clone(a);

	same(b, a);
	same(b[0], a[0]);

	const val = [0, "a", {}, [{}], [function() {}], function() {}];
	same(clone(val), val);

	end();
});

test("deeply clone an array", ({ end, ok, same }) => {
	const fixture = [[{ a: "b" }], [{ a: "b" }]];
	const result = clone(fixture);

	ok(fixture !== result);
	ok(fixture[0] !== result[0]);
	ok(fixture[1] !== result[1]);
	same(fixture, result);

	end();
});

test("deeply clone object", ({ end, notSame }) => {
	const one = { a: "b" };
	const two = clone(one);
	two.c = "d";
	notSame(one, two);

	end();
});

test("deeply clone arrays", ({ end, notSame }) => {
	const one = { a: "b" };
	const arr1 = [one];
	const arr2 = clone(arr1);
	one.c = "d";
	notSame(arr1, arr2);

	end();
});

test("deeply clone Map", ({ end, notSame }) => {
	const a = new Map([[1, 5]]);
	const b = clone(a);
	a.set(2, 4);
	notSame(Array.from(a), Array.from(b));

	end();
});

test("deeply clone Set", ({ end, notSame }) => {
	const a = new Set([2, 1, 3]);
	const b = clone(a);
	a.add(8);
	notSame(Array.from(a), Array.from(b));

	end();
});

test("return primitives", ({ end, equal }) => {
	equal(clone(0), 0);
	equal(clone("foo"), "foo");

	end();
});

test("clone a regex", ({ end, same }) => {
	same(clone(/foo/g), /foo/g);

	end();
});

test("clone objects", ({ end, same }) => {
	same(clone({ a: 1, b: 2, c: 3 }), { a: 1, b: 2, c: 3 });

	end();
});

test("deeply clone objects", ({ end, same }) => {
	same(
		clone({
			a: { a: 1, b: 2, c: 3 },
			b: { a: 1, b: 2, c: 3 },
			c: { a: 1, b: 2, c: 3 },
		}),
		{
			a: { a: 1, b: 2, c: 3 },
			b: { a: 1, b: 2, c: 3 },
			c: { a: 1, b: 2, c: 3 },
		}
	);

	end();
});

test("clone instances", ({ end, equal, notEqual, same, notSame }) => {
	function A(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	function B(x) {
		this.x = x;
	}

	const a = new A({ x: 11, y: 12, z: () => "z" }, new B(2), 7);
	const b = clone(a, true);

	same(a, b);

	b.y.x = 1;
	b.z = 2;
	notSame(a, b);

	notEqual(
		a.z,
		b.z,
		"Root property of original object not expected to be changed"
	);

	notEqual(
		a.y.x,
		b.y.x,
		"Nested property of original object not expected to be changed"
	);

	end();
});

test("clone empty objects", ({ end, same }) => {
	const source = { a: Object.create(null), b: Object.create({}), c: {} };

	same(clone(source), { a: {}, b: {}, c: {} });
	end();
});
