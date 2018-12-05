import pkg from "./package.json";

export default {
	files: "**/*.{md,mdx}",
	dest: "./docs",
	base: "/std",
	title: pkg.name,
	description: pkg.description,
};
