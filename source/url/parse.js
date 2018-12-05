import { isString } from "../assert";
import { ArgumentError } from "../error";

/*
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            href                                             │
├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │        host         │           path            │ hash  │
│          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │   hostname   │ port │ pathname │     search     │       │
│          │  │                     │              │      │          ├─┬──────────────┤       │
│          │  │                     │              │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │   hostname   │ port │          │                │       │
│          │  │          │          ├──────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │        host         │          │                │       │
├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
│   origin    │                     │       origin        │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
│                                            href                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
https://nodejs.org/api/url.html
*/

const PROTOCOL = /([^:/?#]+:)?/.source;
const SLASHES = /(?:\/\/)/.source;
const AUTH = /(?:([^/?#]*:[^@/]+)@)?/.source;
const HOSTNAME = /([^/:?#]+)/.source;
const PORT = /(?:(?::)(\d+))?/.source;
const PATHNAME = /(\/?[^?#]*)?/.source;
const SEARCH = /(\?[^#]*)?/.source;
const HASH = /(#[^\s]*)?/.source;

const PATTERN = new RegExp(
	`${PROTOCOL}(?:${SLASHES}${AUTH}${HOSTNAME}${PORT})?${PATHNAME}${SEARCH}${HASH}`
);

export default function parse(url) {
	if (!isString(url)) {
		throw new ArgumentError("url", "string", url);
	}

	const matched = url.trim().match(PATTERN);

	let [_, protocol, auth, hostname, port, pathname, search, hash] = matched;

	// we always use a path, so set a default one to index
	if (!pathname) pathname = "/";

	const host = hostname ? hostname + (port ? ":" + port : "") : null;
	const origin = protocol ? protocol + "//" + host : null;
	const path = search ? (pathname ? pathname + search : search) : pathname;
	const query = search ? search.substring(1) : null;

	return {
		protocol: protocol || null,
		auth: auth || null,
		origin,
		host,
		port: port || null,
		hostname: hostname || null,
		path,
		pathname,
		search: search || null,
		query,
		hash: hash || null,
		href: url
	};
}
