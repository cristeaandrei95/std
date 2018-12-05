import { isString } from "../assert";
import { ArgumentError } from "../error";
import readDirectory from "./readDirectory.js";
import isDirectory from "./isDirectory.js";

export default async function traverse(path, options = {}) {
	if (!isString(path)) {
		return reject(new ArgumentError("path", "string", path));
	}

	let level = 0;
	let paths = [path];

	const result = [];

	while (paths) {
		const directories = [];

		for (let path of paths) {
			const files = await readDirectory(path);

			for (let file of files) {
				if (await isDirectory(file)) {
					directories.push(file);
				} else {
					result.push(file);
				}
			}
		}

		if (options.depth !== undefined && options.depth === level) {
			paths = null;
		} else if (!directories.length) {
			paths = null;
		} else {
			level += 1;
			paths = directories;
		}
	}

	return result;
}
