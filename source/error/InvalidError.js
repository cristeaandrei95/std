export default class InvalidError extends Error {
	constructor({ attribute, expected, value, source, message }) {
		super();

		this.attribute = attribute;
		this.expected = expected;
		this.value = value;
		this.source = source;

		if (message) {
			this.message = message;
		} else {
			this.message = `"${argument}" expected: "${expected}" passed: "${typeof value}"`;
		}

		this.name = "InvalidError";

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, InvalidError);
		}
	}
}
