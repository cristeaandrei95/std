import { resolve } from "path";
import { test } from "tap";
import traverse from "./traverse.js";

test("traverse", async ({ ok, end }) => {
	const pkg = resolve(`${__dirname}/..`);
	const files = await traverse(pkg);

	ok(files.includes(`${pkg}/fs/traverse.js`));
	ok(files.includes(`${pkg}/fs/traverse.test.js`));

	end();
});

test("traverse - options.depth", async ({ ok, end }) => {
	const pkg = resolve(`${__dirname}/..`);
	const files = await traverse(pkg, { depth: 0 });

	ok(files.includes(`${pkg}/package.json`));
	ok(!files.includes(`${pkg}/fs/traverse.test.js`));

	end();
});

test("traverse - invalid or missing path", ({ rejects, end }) => {
	rejects(traverse());

	rejects(traverse("non-existing"));

	end();
});
