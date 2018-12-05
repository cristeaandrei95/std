import { writeFile as write } from "fs";
import { isString, isBuffer } from "../assert";
import { ArgumentError, SystemError } from "../error";

export default function writeFile(path, data, options = {}) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			return reject(new ArgumentError("path", "string", path));
		}

		if (!isString(data) && !isBuffer(data)) {
			return reject(new ArgumentError("data", "string|buffer", data));
		}

		// set default encoding to UTF-8
		if (!options.encoding) {
			options.encoding = "utf8";
		}

		// append data to file, throw if it doesn't exist
		if (options.append) {
			options.flag = "a";
		}

		write(path, data, options, (error, data) => {
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
