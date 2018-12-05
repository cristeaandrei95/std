import { test } from "tap";
import merge from "./merge.js";

test("simple objects", ({ end, same }) => {
	const foo = { b: 2, c: 3 };
	const bar = { a: 1, d: 4 };
	const expected = { a: 1, b: 2, c: 3, d: 4 };

	same(merge(foo, bar), expected);

	end();
});

test("nested objects", ({ end, same, ok }) => {
	const foo = {
		mode: "development",
		uno: [1, "2"],
		due: {
			dpth: [1, "2", 3, "4"],
			tag: "span",
			css: [{ top: "0" }, { bottom: "0" }],
			baz: false
		}
	};

	const bar = {
		uno: [4.0],
		due: {
			dpth: ["4", 5],
			tag: "div",
			css: [{ left: "0" }, { right: "0" }],
			baz: { is: true }
		},
		$handle: "namespace"
	};

	const expected = {
		mode: "development",
		uno: [1, "2", 4.0],
		due: {
			tag: "div",
			dpth: [1, "2", 3, "4", 5],
			css: [{ top: "0" }, { bottom: "0" }, { left: "0" }, { right: "0" }],
			baz: { is: true }
		},
		$handle: "namespace"
	};

	const result = merge(foo, bar);

	same(result, expected);

	// ensure objects are cloned
	ok(result.uno !== foo.uno && result.uno !== bar.uno);
	ok(result.due.css !== foo.due.css && result.due.css !== bar.due.css);
	ok(result.due.baz !== foo.due.baz && result.due.baz !== bar.due.baz);

	end();
});

test("class instances", ({ end, same }) => {
	class T {
		constructor() {
			this.z = 0;
		}
	}

	const t = new T();

	function A1() {}
	A1.prototype.a = 1;

	function B2() {}
	B2.prototype.b = 2;

	const s1 = new A1();
	const s2 = new B2();

	s1.c = 3;
	s2.d = 4;

	same(merge(t, s1, s2, { e: 5 }), { c: 3, d: 4, e: 5, z: 0 });

	end();
});

test("throw on missing arguments", ({ throws, end }) => {
	throws(() => {
		merge();
	});

	end();
});
