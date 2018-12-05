import { unlink } from "fs";
import { isString } from "../assert";
import { ArgumentError, SystemError } from "../error";

export default function(path) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			return reject(new ArgumentError("path", "string", path));
		}

		unlink(path, error => {
			if (error) {
				reject(
					new SystemError({
						type: "file_system",
						code: error.code,
						cause: error,
					})
				);
			} else {
				resolve(path);
			}
		});
	});
}
