import { test } from "tap";
import delay from "./delay.js";

test("delay", async ({ ok, notOk, end }) => {
	const ms = 100;
	const timeStart = Date.now();
	await delay(ms);
	const timeEnd = Date.now();

	ok(timeStart < timeEnd && timeEnd < timeStart + ms + 20);

	end();
});
