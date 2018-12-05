import { test } from "tap";
import shuffle from "./shuffle.js";

test("shuffle", ({ end, notSame }) => {
	const source = [1, 2, 3, 4];

	notSame(source, shuffle(source));
	notSame(source, shuffle(source));
	notSame(source, shuffle(source));
	notSame(shuffle(source), shuffle(source));

	end();
});
