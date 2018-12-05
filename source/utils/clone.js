import typeOf from "./typeOf.js";

const valueOf = Symbol.prototype.valueOf;

function cloneValue(source) {
	switch (typeOf(source)) {
		case "array":
			return source.slice();
		case "object":
			return Object.assign({}, source);
		case "date":
			return new Date(source.getTime());
		case "regexp":
			return new RegExp(source);
		case "error":
			return Object.create(source);
		case "map":
			return new Map(source);
		case "set":
			return new Set(source);
		case "buffer":
			const buffer = Buffer.allocUnsafe
				? Buffer.allocUnsafe(source.length)
				: new Buffer(source.length);
			buffer.copy(buf);
			return buffer;
		case "arraybuffer":
			const array = new source.constructor(source.byteLength);
			new Uint8Array(array).set(new Uint8Array(source));
			return array;
		case "float32array":
		case "float64array":
		case "int16array":
		case "int32array":
		case "int8array":
		case "uint16array":
		case "uint32array":
		case "uint8clampedarray":
		case "uint8array":
			return new source.constructor(
				source.buffer,
				source.byteOffset,
				source.length
			);
		default: {
			return source;
		}
	}
}

function cloneObject(source) {
	const result = source.constructor ? new source.constructor() : {};

	for (const key of Object.keys(source)) {
		result[key] = clone(source[key]);
	}

	return result;
}

function cloneArray(source) {
	const result = new source.constructor(source.length);

	for (let i = 0; i < source.length; i++) {
		result[i] = clone(source[i]);
	}

	return result;
}

function clone(source) {
	switch (typeOf(source)) {
		case "object":
			return cloneObject(source);
		case "array":
			return cloneArray(source);
		default: {
			return cloneValue(source);
		}
	}
}

clone.value = cloneValue;
clone.object = cloneObject;
clone.array = cloneArray;

export default clone;
