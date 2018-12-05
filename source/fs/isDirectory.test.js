import { test } from "tap";
import isDirectory from "./isDirectory.js";

test("isDirectory - existing path", async ({ ok, end }) => {
	ok(await isDirectory(__dirname));
	end();
});

test("isDirectory - non-existing path", async ({ notOk, end }) => {
	notOk(await isDirectory("non-existing"));
	end();
});
