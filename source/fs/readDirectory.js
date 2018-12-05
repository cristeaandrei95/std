import { readdir } from "fs";
import { isString } from "../assert";
import { ArgumentError, SystemError } from "../error";

export default function readDirectory(path, options = {}) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			return reject(new ArgumentError("path", "string", path));
		}

		readdir(path, options, (error, files) => {
			if (error) {
				reject(
					new SystemError({
						type: "file_system",
						code: error.code,
						cause: error,
					})
				);
			} else {
				resolve(files.map(fileName => `${path}/${fileName}`));
			}
		});
	});
}
