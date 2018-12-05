import { mkdir, stat } from "fs";
import { getDirectory } from "../path";
import { isString } from "../assert";
import { ArgumentError, SystemError } from "../error";

function $createDirectory(path, mode, callback) {
	mkdir(path, mode, function(error) {
		if (error) {
			if (error.code === "ENOENT") {
				// try to create parent directory of `path`
				$createDirectory(getDirectory(path), mode, error => {
					if (error) {
						callback(error);
					} else {
						$createDirectory(path, mode, callback);
					}
				});
			} else {
				// check if directory already exists, otherwise throw error
				stat(path, ($error, status) => {
					// throw the original error
					if ($error || !status.isDirectory()) {
						callback(error);
					} else {
						callback(null);
					}
				});
			}
		} else {
			callback(null);
		}
	});
}

export default function createDirectory(path, mode) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			return reject(new ArgumentError("path", "string", path));
		}

		// http://bit.ly/2NBchZA
		mode = parseInt(mode || "0777", 8) & ~process.umask();

		$createDirectory(path, mode, error => {
			if (error)
				reject(
					new SystemError({
						type: "file_system",
						code: error.code,
						cause: error,
					})
				);
			else resolve(path);
		});
	});
}
