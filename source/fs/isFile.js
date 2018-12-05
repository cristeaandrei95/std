import { stat } from "fs";
import { isString } from "../assert";
import { ArgumentError, SystemError } from "../error";

export default function isFile(path) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			return reject(new ArgumentError("path", "string", path));
		}

		stat(path, (error, stats) => {
			if (error) {
				if (error.code === "ENOENT") {
					resolve(false);
				} else {
					reject(
						new SystemError({
							type: "file_system",
							code: error.code,
							cause: error,
						})
					);
				}
			} else {
				resolve(stats.isFile());
			}
		});
	});
}
