import { isString } from "@nore/std/assert";
import { ArgumentError, SystemError } from "@nore/std/error";
import { lstat } from "fs";

export default function isSymbolicLink(path) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			reject(new ArgumentError("path", "string", path));
		}

		lstat(path, (error, status) => {
			if (error) {
				reject(
					new SystemError({
						type: "file_system",
						code: error.code,
						cause: error,
					})
				);
			} else {
				resolve(status.isSymbolicLink());
			}
		});
	});
}
