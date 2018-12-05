import { test } from "tap";
import pickRandom from "./pickRandom.js";

test("pickRandom", ({ end, ok }) => {
	const source = [1, 2, 3, 4];

	const r1 = pickRandom(source);
	const r2 = pickRandom(source);
	const r3 = pickRandom(source);

	ok(source.includes(r1));
	ok(source.includes(r2));
	ok(source.includes(r3));

	end();
});
