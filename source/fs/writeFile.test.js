import { test } from "tap";
import os from "os";
import writeFile from "./writeFile.js";
import readFile from "./readFile.js";

function tmpFile() {
	const random = Math.floor(100000 + Math.random() * 900000);

	return `${os.tmpdir()}/std_writefile_test_${random}`;
}

test("writeFile - default", async ({ end, equal }) => {
	const file = tmpFile();

	// write data
	const toWrite = "write";
	await writeFile(file, toWrite);
	equal("write", await readFile(file));

	// append data
	const toAppend = "append";
	await writeFile(file, toAppend, { append: true });
	equal("writeappend", await readFile(file));

	end();
});

test("writeFile - buffer", async ({ end, equal }) => {
	const file = tmpFile();

	// write data
	const toWrite = Buffer.from("write");
	await writeFile(file, toWrite, { encoding: "buffer" });
	equal("write", await readFile(file));

	end();
});

test("writeFile - throw on invalid format", async ({ end, ok }) => {
	const file = tmpFile();

	try {
		await writeFile(null, "sample");
		throw false;
	} catch (error) {
		ok(1, "writeFile should not invalid path");
	}

	try {
		await writeFile("", "sample");
		throw false;
	} catch (error) {
		ok(1, "writeFile should not invalid path");
	}

	try {
		await writeFile(file, null);
		throw false;
	} catch (error) {
		ok(1, "writeFile should not accept `null` as data");
	}

	try {
		await writeFile(file, {});
		throw false;
	} catch (error) {
		ok(1, "writeFile should not accept `{}` as data");
	}

	try {
		await writeFile(file, 12345);
		throw false;
	} catch (error) {
		ok(1, "writeFile should not accept `12345` as data");
	}

	end();
});
