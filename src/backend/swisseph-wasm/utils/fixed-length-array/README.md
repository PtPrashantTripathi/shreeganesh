# 📐 fixed-length-array

A tiny and type-safe TypeScript utility to create and work with **fixed-length
arrays (tuples)**. Automatically trims or pads input arrays at runtime, while
offering compile-time safety using TypeScript's type system.

## ✨ Features

- ✅ Enforces fixed-length array types (tuples)
- 🧠 Type-safe construction
- 🔧 Automatically trims or pads at runtime
- 📦 Tiny, no dependencies
- 🔁 Works in both Node.js and browser environments (ESM only)

## 🚀 Usage

```ts
// Pads to a fixed length of 3
const vec3 = toFixedLengthArray([1], 3, 0);
// Result: [1, 0, 0]

// Trims if input is longer
const trimmed = toFixedLengthArray([1, 2, 3, 4, 5], 3, 0);
// Result: [1, 2, 3]

// Full type support
type Vec3 = FixedLengthArray<3, number>;
```

## 🧪 API

### `toFixedLengthArray<T, N>(input: T[], fixedLength: N, defaultValue: T): FixedLengthArray<N, T>`

Creates a fixed-length array by trimming or padding the input.

### `type FixedLengthArray<N, T>`

A recursive type that represents a tuple of length `N`, with all elements of
type `T`.
