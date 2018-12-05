import { test } from "tap";
import itExists from "./itExists.js";

test("itExists", async ({ ok, notOk, end }) => {
	ok(await itExists(`${__dirname}/itExists.js`));
	notOk(await itExists(`${__dirname}/itExists`));

	end();
});
