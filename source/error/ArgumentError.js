export default class ArgumentError extends Error {
	constructor(argument, expected, value, message) {
		super();

		this.argument = argument;
		this.expected = expected;
		this.value = value;

		if (message) {
			this.message = message;
		} else {
			this.message = `"${argument}" expected: "${expected}" passed: "${typeof value}"`;
		}

		this.name = "ArgumentError";

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ArgumentError);
		}
	}
}
