import { access } from "fs";
import { isString } from "../assert";
import { ArgumentError } from "../error";

export default function itExists(path) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			return reject(new ArgumentError("path", "string", path));
		}

		access(path, error => {
			resolve(!error);
		});
	});
}
