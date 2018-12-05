import { test } from "tap";
import unescape from "./unescape.js";

test("unescape", ({ end, equal }) => {
	equal(unescape("&amp;&lt;&gt;&#39;&quot;"), "&<>'\"");
	equal(unescape("&lt;&gt;&#39;&#x27;&quot;&amp;"), "<>''\"&");

	equal(unescape("&amp;&lt;&gt;&quot;&#39;"), "&<>\"'");
	equal(unescape("&lt;🦄/&gt; &amp; &lt;🐐/&gt;"), "<🦄/> & <🐐/>");
	equal(unescape("Hello &lt;em&gt;World&lt;/em&gt;"), "Hello <em>World</em>");

	end();
});
