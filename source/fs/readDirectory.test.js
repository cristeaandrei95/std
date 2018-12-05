import { test } from "tap";
import readDirectory from "./readDirectory.js";

test("readDirectory - existing path", async ({ ok, end }) => {
	const files = await readDirectory(__dirname);

	ok(files.includes(__filename));
	end();
});

test("readDirectory - invalid or missing path", ({ rejects, end }) => {
	rejects(readDirectory());

	rejects(readDirectory({}));

	rejects(readDirectory("non-existing"));

	end();
});
