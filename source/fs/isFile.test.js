import { test } from "tap";
import isFile from "./isFile.js";

test("isFile - existing path", async ({ ok, end }) => {
	ok(await isFile(__filename));
	end();
});

test("isFile - non-existing path", async ({ notOk, end }) => {
	notOk(await isFile("non-existing"));
	end();
});
