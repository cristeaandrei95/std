import { test } from "tap";
import readFile from "./readFile.js";

test("readFile - default", async ({ ok, end }) => {
	const data = await readFile(__filename);

	ok(data.includes("await readFile(__filename)"));
	end();
});

test("readFile - option.encoding", async ({ ok, end }) => {
	const data = await readFile(__filename, { encoding: null });

	ok(Buffer.isBuffer(data));
	end();
});
