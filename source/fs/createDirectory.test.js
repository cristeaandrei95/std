import os from "os";
import fs from "fs";
import { test } from "tap";
import createDirectory from "./createDirectory.js";

function genString() {
	return Math.floor(Math.random() * Math.pow(4 * 4, 4)).toString(16);
}

function randomPath(length) {
	return Array.from({ length }, () => genString()).join("/");
}

function genPath() {
	return os.tmpdir() + "/" + randomPath(4);
}

const _0777 = parseInt("0777", 8);
const _0755 = parseInt("0755", 8);

test("createDirectory", async ({ end, ok, equal }) => {
	const path = genPath();

	const result = await createDirectory(path, "0755");
	const stat = fs.statSync(path);

	ok(stat.isDirectory());
	equal(result, path);
	equal(stat.mode & _0777, _0755);

	end();
});

test("createDirectory - permission denied", async ({ end, ok, equal }) => {
	const path = `/etc/${genString()}`;

	try {
		await createDirectory(path);
		throw false;
	} catch (error) {
		equal(error.code, "EACCES");
		ok(1, "try to make a directory in `/etc`");
	}

	end();
});
