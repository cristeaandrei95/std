import MapCache from "./MapCache.js";

const HASH_UNDEFINED = '__lodash_hash_undefined__';

export default class SetCache {
	constructor(values) {
		let index = -1;
		const length = values == null ? 0 : values.length;

		this.__data__ = new MapCache

		while (++index < length) {
			this.add(values[index]);
		}
	}

	add(value) {
		this.__data__.set(value, HASH_UNDEFINED);
		return this;
	}

	has(value) {
		return this.__data__.has(value);
	}
}

SetCache.prototype.push = SetCache.prototype.add;
