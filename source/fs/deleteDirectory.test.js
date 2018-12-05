import os from "os";
import fs from "fs";
import { test } from "tap";
import writeFile from "./writeFile.js";
import createDirectory from "./createDirectory.js";
import deleteDirectory from "./deleteDirectory.js";

function genString() {
	return Math.floor(Math.random() * Math.pow(4 * 4, 4)).toString(16);
}

function genPath(path) {
	return (path || os.tmpdir()) + "/" + genString();
}

// generates a directory with files and subdirectories
// subdirectories are populated based on the level count
async function createSampleDir(onPath, level) {
	const dirs = [genPath(onPath), genPath(onPath)];
	const files = [genPath(onPath), genPath(onPath), genPath(onPath)];

	await createDirectory(onPath);

	for (const dir of dirs) {
		await createDirectory(dir);

		if (level) {
			await createSampleDir(dir, level - 1);
		}
	}

	for (const file of files) {
		await writeFile(file, genString());
	}
}

test("deleteDirectory", async ({ end, ok, equal }) => {
	const path = genPath();

	await createSampleDir(path, 3);
	const stats = fs.statSync(path);
	const files = fs.readdirSync(path);

	equal(stats.isDirectory(), true, "Sample directory was created");
	equal(files.length, 5, "Files were added to sample directory");

	await deleteDirectory(path);

	try {
		const status = fs.statSync(path);
		console.log("Directory was not deleted:", path);
		throw false;
	} catch (error) {
		equal(error.code, "ENOENT", "Directory was deleted");
	}

	end();
});

test("deleteDirectory - non existing path", async ({ end, ok, equal }) => {
	const path = genPath();

	await deleteDirectory(path);

	try {
		const status = fs.statSync(path);
		console.log("Directory was not deleted:", path);
		throw false;
	} catch (error) {
		equal(error.code, "ENOENT");
	}

	end();
});
