import { test } from "tap";
import getFileStatus from "./getFileStatus.js";

test("getFileStatus - existing path", async ({ ok, notOk, end }) => {
	const stats = await getFileStatus(__filename);

	ok(stats.isFile());
	notOk(stats.isDirectory());

	end();
});
