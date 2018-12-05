import { isString } from "@nore/std/assert";
import { ArgumentError, SystemError } from "@nore/std/error";
import { stat, lstat } from "fs";

export default function getFileStatus(path, options = {}) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			reject(new ArgumentError("path", "string", path));
		}

		const method = options.symlink ? lstat : stat;

		method(path, (error, status) => {
			if (error) {
				reject(
					new SystemError({
						type: "file_system",
						code: error.code,
						cause: error,
					})
				);
			} else {
				resolve(status);
			}
		});
	});
}
