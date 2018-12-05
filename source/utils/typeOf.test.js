import { test } from "tap";
import typeOf from "./typeOf.js";

test("undefined", ({ equal, end }) => {
	equal(typeOf(undefined), "undefined");

	end();
});

test("null", ({ equal, end }) => {
	equal(typeOf(null), "null");

	end();
});

test("booleans", ({ equal, end }) => {
	equal(typeOf(true), "boolean");
	equal(typeOf(false), "boolean");
	equal(typeOf(new Boolean(true)), "boolean");

	end();
});

test("numbers", ({ equal, end }) => {
	equal(typeOf(42), "number");
	equal(typeOf(new Number(42)), "number");

	end();
});

test("strings", ({ equal, end }) => {
	equal(typeOf("str"), "string");
	equal(typeOf(new String("str")), "string");

	end();
});

test("arguments", ({ equal, end }) => {
	function example() {
		equal(typeOf(arguments), "arguments");
	}
	example();

	end();
});

test("buffers", ({ equal, end }) => {
	equal(typeOf(new Buffer("")), "buffer");

	end();
});

test("objects", ({ equal, end }) => {
	function Test() {}
	const instance = new Test();
	const literal = {};
	const createdNull = Object.create(null);
	const createdObj = Object.create({});

	equal(typeOf(instance), "object");
	equal(typeOf(literal), "object");
	equal(typeOf(createdNull), "object");
	equal(typeOf(createdObj), "object");

	end();
});

test("dates", ({ equal, end }) => {
	equal(typeOf(new Date()), "date");

	end();
});

test("arrays", ({ equal, end }) => {
	equal(typeOf([]), "array");
	equal(typeOf([1, 2, 3]), "array");
	equal(typeOf(new Array()), "array");

	end();
});

test("regular expressions", ({ equal, end }) => {
	equal(typeOf(/./), "regexp");
	equal(typeOf(new RegExp("^foo$")), "regexp");

	end();
});

test("functions", ({ equal, end }) => {
	equal(typeOf(function() {}), "function");
	equal(typeOf(new Function()), "function");
	equal(typeOf(async function() {}), "asyncfunction");
	equal(typeOf(async () => {}), "asyncfunction");

	end();
});

test("generator functions", ({ equal, end }) => {
	const gen = function* named() {
		return true;
	};
	equal(typeOf(gen), "generatorfunction");

	end();
});

test("generator objects", ({ equal, end }) => {
	const gen = function* named() {
		return true;
	};
	equal(typeOf(gen()), "generator");

	end();
});

test("Errors", ({ equal, end }) => {
	equal(typeOf(new Error("")), "error");

	end();
});

test("resolved promises", ({ equal, end }) => {
	const promise = Promise.resolve(123);
	equal(typeOf(promise), "promise");

	end();
});

test("rejected promises", ({ equal, end }) => {
	const promise = Promise.reject(new Error("foo bar"));
	promise.catch(function() {});
	equal(typeOf(promise), "promise");

	end();
});

test("template strings", ({ equal, end }) => {
	/* eslint quotes: 0 */
	const name = "Foo";
	equal(typeOf(`Welcome ${name} buddy`), "string");

	end();
});

test("Map", ({ equal, end }) => {
	const map = new Map();
	equal(typeOf(map), "map");
	equal(typeOf(map.set), "function");
	equal(typeOf(map.get), "function");
	equal(typeOf(map.add), "undefined");

	end();
});

test("WeakMap", ({ equal, end }) => {
	const weakmap = new WeakMap();
	equal(typeOf(weakmap), "weakmap");
	equal(typeOf(weakmap.set), "function");
	equal(typeOf(weakmap.get), "function");
	equal(typeOf(weakmap.add), "undefined");

	end();
});

test("Set", ({ equal, end }) => {
	const set = new Set();

	equal(typeOf(set), "set");
	equal(typeOf(set.add), "function");
	equal(typeOf(set.set), "undefined");
	equal(typeOf(set.get), "undefined");

	end();
});

test("WeakSet", ({ equal, end }) => {
	const weakset = new WeakSet();

	equal(typeOf(weakset), "weakset");
	equal(typeOf(weakset.add), "function");
	equal(typeOf(weakset.set), "undefined");
	equal(typeOf(weakset.get), "undefined");

	end();
});

test("Set Iterator", ({ equal, end }) => {
	const SetValuesIterator = new Set().values();
	equal(typeOf(SetValuesIterator), "setiterator");

	end();
});

test("Map Iterator", ({ equal, end }) => {
	const MapValuesIterator = new Map().values();
	equal(typeOf(MapValuesIterator), "mapiterator");

	end();
});

test("Array Iterator", ({ equal, end }) => {
	const ArrayEntriesIterator = [].entries();
	equal(typeOf(ArrayEntriesIterator), "arrayiterator");

	end();
});

test("String Iterator", ({ equal, end }) => {
	const StringCharIterator = ""[Symbol.iterator]();
	equal(typeOf(StringCharIterator), "stringiterator");

	end();
});

test("Symbol", ({ equal, end }) => {
	equal(typeOf(Symbol("foo")), "symbol");
	equal(typeOf(Symbol.prototype), "symbol");

	end();
});

test("Int8Array", ({ equal, end }) => {
	const int8array = new Int8Array();
	equal(typeOf(int8array), "int8array");

	end();
});

test("Uint8Array", ({ equal, end }) => {
	const uint8array = new Uint8Array();
	equal(typeOf(uint8array), "uint8array");

	end();
});

test("Uint8ClampedArray", ({ equal, end }) => {
	const uint8clampedarray = new Uint8ClampedArray();
	equal(typeOf(uint8clampedarray), "uint8clampedarray");

	end();
});

test("Int16Array", ({ equal, end }) => {
	const int16array = new Int16Array();
	equal(typeOf(int16array), "int16array");

	end();
});

test("Uint16Array", ({ equal, end }) => {
	const uint16array = new Uint16Array();
	equal(typeOf(uint16array), "uint16array");

	end();
});

test("Int32Array", ({ equal, end }) => {
	const int32array = new Int32Array();
	equal(typeOf(int32array), "int32array");

	end();
});

test("Uint32Array", ({ equal, end }) => {
	const uint32array = new Uint32Array();
	equal(typeOf(uint32array), "uint32array");

	end();
});

test("Float32Array", ({ equal, end }) => {
	const float32array = new Float32Array();
	equal(typeOf(float32array), "float32array");

	end();
});

test("Float64Array", ({ equal, end }) => {
	const float64array = new Float64Array();
	equal(typeOf(float64array), "float64array");

	end();
});
