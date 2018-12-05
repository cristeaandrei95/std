import { isString } from "../assert";
import { ArgumentError } from "../error";

const replace = "".replace;
const CHARS = /[&<>'"]/g;

const map = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#39;",
	'"': "&quot;",
};

export default function escape(source) {
	if (!isString(source)) {
		throw new ArgumentError("source", "string", source);
	}

	return replace.call(source, CHARS, char => map[char]);
}
