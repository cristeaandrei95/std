import { test } from "tap";
import parse from "./parse.js";

test("url/parse - basic", ({ end, same }) => {
	const url = "https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash";

	same(parse(url), {
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
		href: url
	});

	end();
});

test("url/parse - hosts", ({ end, same }) => {
	const hosts = [
		"example.com",
		"www.example.com",
		"travel.travel",
		"sub.sub.sub.domain.nl",
		"xn--n3h.com",
		"localhost",
		"127.0.0.1",
		"255.255.255.255"
	];

	for (const host of hosts) {
		same(
			parse(`https://${host}`),
			{
				protocol: "https:",
				auth: null,
				origin: `https://${host}`,
				host: host,
				hostname: host,
				port: null,
				path: "/",
				pathname: "/",
				search: null,
				query: null,
				hash: null,
				href: `https://${host}`
			},
			host
		);
	}

	end();
});

test("url/parse - paths", ({ end, same }) => {
	const paths = [
		"/",
		"/bar",
		"/bar/",
		"/foo/bar",
		"/foo.bar/foo",
		"/foo.bar/foo.biz/",
		"/fav.ico",
		"/@username",
		"/a/b/c/d/e/f/g/j/1/d/4/"
	];

	for (const path of paths) {
		same(
			parse(path),
			{
				protocol: null,
				auth: null,
				origin: null,
				host: null,
				hostname: null,
				port: null,
				path: path,
				pathname: path,
				search: null,
				query: null,
				hash: null,
				href: path
			},
			path
		);
	}

	end();
});

test("url/parse - query", ({ end, same }) => {
	const queries = [
		"foo[]=bar&foo[]=foo",
		"foo[]=bar&foo[]=foo&email=foo@bar.travel&id=0984&p=",
		"email=foo@bar.travel",
		"foo=bar",
		"q="
	];

	for (const query of queries) {
		const search = `?` + query;

		same(
			parse(search),
			{
				protocol: null,
				auth: null,
				origin: null,
				host: null,
				hostname: null,
				port: null,
				path: "/" + search,
				pathname: "/",
				search: search,
				query: query,
				hash: null,
				href: search
			},
			query
		);
	}

	end();
});

test("url/parse", ({ end, same }) => {
	const cases = [
		{
			url: "https://www.server.com",
			match: {
				protocol: "https:",
				origin: "https://www.server.com",
				host: "www.server.com",
				hostname: "www.server.com",
				path: "/",
				pathname: "/"
			}
		},
		{
			url: "https://www.server.com:8080",
			match: {
				protocol: "https:",
				origin: "https://www.server.com:8080",
				host: "www.server.com:8080",
				hostname: "www.server.com",
				port: "8080",
				path: "/",
				pathname: "/"
			}
		},
		{
			url: "https://www.server.com/",
			match: {
				protocol: "https:",
				origin: "https://www.server.com",
				host: "www.server.com",
				hostname: "www.server.com",
				path: "/",
				pathname: "/"
			}
		},
		{
			url: "https://www.server.com/?",
			match: {
				protocol: "https:",
				origin: "https://www.server.com",
				host: "www.server.com",
				hostname: "www.server.com",
				path: "/?",
				pathname: "/",
				search: "?",
				query: ""
			}
		},
		{
			url: "https://www.server.com?",
			match: {
				protocol: "https:",
				origin: "https://www.server.com",
				host: "www.server.com",
				hostname: "www.server.com",
				path: "/?",
				pathname: "/",
				search: "?",
				query: ""
			}
		},
		{
			url: "https://www.server.com?#",
			match: {
				protocol: "https:",
				origin: "https://www.server.com",
				host: "www.server.com",
				hostname: "www.server.com",
				path: "/?",
				pathname: "/",
				search: "?",
				query: "",
				hash: "#"
			}
		},
		{
			url: "https://www.server.com?a#",
			match: {
				protocol: "https:",
				origin: "https://www.server.com",
				host: "www.server.com",
				hostname: "www.server.com",
				path: "/?a",
				pathname: "/",
				search: "?a",
				query: "a",
				hash: "#"
			}
		}
	];

	const fields = [
		"protocol",
		"auth",
		"origin",
		"host",
		"hostname",
		"port",
		"path",
		"pathname",
		"search",
		"query",
		"hash",
		"href"
	];

	for (const { url, match } of cases) {
		// href will always match the URL
		match.href = url;

		// mark null unset fields
		for (const field of fields) {
			if (match[field] === undefined) {
				match[field] = null;
			}
		}

		same(parse(url), match, url);
	}

	end();
});
