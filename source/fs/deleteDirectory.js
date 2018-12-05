import { lstat, rmdir, readdir } from "fs";
import { join } from "../path";
import { isString } from "../assert";
import { ArgumentError, SystemError } from "../error";
import deleteFile from "./deleteFile.js";
import readDirectory from "./readDirectory.js";

function deleteFileOrFolder(path) {
	return new Promise((resolve, reject) => {
		lstat(path, (error, stat) => {
			if (error) {
				// if `path` doesn't exist, the desired action is fulfilled
				if (error.code === "ENOENT") {
					resolve(path);
				} else {
					reject(error);
				}
			} else if (stat.isDirectory()) {
				resolve(_deleteDirectory(path));
			} else {
				resolve(deleteFile(path));
			}
		});
	});
}

function deleteDirectoryContent(path) {
	return readDirectory(path).then(files =>
		Promise.all(files.map(file => deleteFileOrFolder(file)))
	);
}

function _deleteDirectory(path) {
	return new Promise((resolve, reject) => {
		rmdir(path, error => {
			if (error) {
				// if `path` doesn't exist, the desired action is fulfilled
				if (error.code === "ENOENT") {
					resolve(path);
				} else if (error.code === "ENOTEMPTY") {
					resolve(
						deleteDirectoryContent(path).then(() => _deleteDirectory(path))
					);
				} else {
					reject(error);
				}
			} else {
				resolve(path);
			}
		});
	});
}

export default function deleteDirectory(path) {
	return new Promise((resolve, reject) => {
		if (!isString(path)) {
			return reject(new ArgumentError("path", "string", path));
		}

		_deleteDirectory(path)
			.then(resolve)
			.catch(error => {
				reject(
					new SystemError({
						type: "file_system",
						code: error.code,
						cause: error,
					})
				);
			});
	});
}
