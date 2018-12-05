import { isString } from "../assert";
import { ArgumentError } from "../error";

const replace = "".replace;
const CHARS = /&(?:amp|#38|lt|#60|gt|#62|apos|#x27|#39|quot|#34);/g;

const map = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#x27;": "'",
	"&#39;": "'",
	"&quot;": '"',
	"&#34;": '"',
};

export default function unescape(source) {
	if (!isString(source)) {
		throw new ArgumentError("source", "string", source);
	}

	return replace.call(source, CHARS, char => map[char]);
}
