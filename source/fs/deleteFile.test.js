import os from "os";
import fs from "fs";
import { test } from "tap";
import deleteFile from "./deleteFile.js";

function genPath() {
	const n = 12;
	const word = Math.floor(Math.random() * Math.pow(n * n, n)).toString(16);

	return os.tmpdir() + "/" + word;
}

test("deleteFile", async ({ end, ok, equal }) => {
	const path = genPath();

	// create temporary file
	fs.writeFileSync(path, "test");

	// delete the file
	await deleteFile(path);

	// check if it exists
	try {
		fs.statSync(path);
	} catch (error) {
		equal(error.code, "ENOENT");
	}

	end();
});

test("deleteFile - fail on directory", async ({ end, ok, equal }) => {
	const path = genPath();

	// create temporary directory
	fs.mkdirSync(path);

	// delete the file
	try {
		await deleteFile(path);
	} catch (error) {
		equal(error.code, "EPERM");
	}

	end();
});

test("deleteFile - fail on invalid path", async ({ end, ok, equal }) => {
	const path = genPath();

	// delete the file
	try {
		await deleteFile(path);
	} catch (error) {
		equal(error.code, "ENOENT");
	}

	end();
});
