import { test } from "tap";
import { resolve } from "path";
import readJSONFile from "./readJSONFile.js";

test("readJSONFile - existing path", async ({ ok, end }) => {
	const pkg = await readJSONFile(resolve(__dirname, "../package.json"));

	ok(typeof pkg.name == "string");
	end();
});
