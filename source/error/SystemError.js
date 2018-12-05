export default class SystemError extends Error {
	constructor({ type, code, cause, message, details }) {
		super();

		this.type = type;
		this.code = code;
		this.cause = cause;
		this.details = details;

		this.message = message || `${type} error: "${code}"`;

		this.name = "SystemError";

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, SystemError);
		}
	}
}
