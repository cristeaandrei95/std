import { ArgumentError, SystemError } from "../error";
import { isString } from "../assert";
import readFile from "./readFile.js";

export default async function readJSONFile(path) {
	if (!isString(path)) {
		return reject(new ArgumentError("path", "string", path));
	}

	const data = await readFile(path);

	try {
		return JSON.parse(data);
	} catch (error) {
		throw new SystemError({
			type: "file_system",
			code: error.code,
			cause: error,
		});
	}
}
