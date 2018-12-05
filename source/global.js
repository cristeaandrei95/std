let __global__ = {}

if (typeof window !== "undefined") {
    __global__ = window;
} else if (typeof global !== "undefined") {
    __global__ = global;
} else if (typeof self !== "undefined"){
    __global__ = self;
}

export default __global__