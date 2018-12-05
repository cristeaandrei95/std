import { test } from "tap";
import escape from "./escape.js";

test("escape", ({ end, equal }) => {
	equal(escape("&<>'\""), "&amp;&lt;&gt;&#39;&quot;");
	equal(escape("<>'\"&"), "&lt;&gt;&#39;&quot;&amp;");

	equal(escape("&<>\"'"), "&amp;&lt;&gt;&quot;&#39;");
	equal(escape("<🦄/> & <🐐/>"), "&lt;🦄/&gt; &amp; &lt;🐐/&gt;");
	equal(escape("Hello <em>World</em>"), "Hello &lt;em&gt;World&lt;/em&gt;");

	end();
});
