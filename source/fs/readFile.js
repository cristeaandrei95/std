import { readFile as $readFile } from "fs";
import { ArgumentError, SystemError } from "../error";
import { isString } from "../assert";

export default function readFile(path, options = {}) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			return reject(new ArgumentError("path", "string", path));
		}

		// set default encoding to UTF-8
		if (!options.encoding) {
			options.encoding = "utf8";
		}

		$readFile(path, options, (error, data) => {
			if (error) {
				reject(
					new SystemError({
						type: "file_system",
						code: error.code,
						cause: error,
					})
				);
			} else {
				resolve(data);
			}
		});
	});
}
