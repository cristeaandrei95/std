export default class TaskError extends Error {
	constructor({ code, cause, details, message }) {
		super();

		this.code = code;
		this.cause = cause;
		this.details = details || {};

		this.message = message || code;

		this.name = "TaskError";

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, TaskError);
		}
	}
}
