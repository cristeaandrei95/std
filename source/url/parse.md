---
name: parse
menu: url
route: /url/parse
tags:
  - url
  - parse
---

[Browser compatible](https://developer.mozilla.org/en-US/docs/Web/API/URL) URL parsing.

`parse(url)`

- url - the string containing the URL

```js
import { parse } from "@nore/std/url";

const url = parse(
	"https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash"
);

/*
 url = {
		protocol: "https:",
		auth: "user:pass",
		origin: "https://sub.host.com:8080",
		host: "sub.host.com:8080",
		hostname: "sub.host.com",
		port: "8080",
		path: "/p/a/t/h?query=string",
		pathname: "/p/a/t/h",
		search: "?query=string",
		query: "query=string",
		hash: "#hash",
		href: "https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash"
	}
*/
```
