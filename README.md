# TypeScript Concepts

This document covers two important TypeScript concepts:
1. Differences between `interface` and `type`
2. Usage of the `keyof` keyword

---

## 🔹 Differences Between `interface` and `type` in TypeScript

Both `interface` and `type` are used to describe the shape of an object in TypeScript, but they have some differences in features and use cases:

| Feature                          | `interface`                                   | `type`                                        |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Extending                       | Can extend other interfaces or types          | Can extend types and interfaces (using `&`)   |
| Declaration Merging             | ✅ Yes — interfaces can merge automatically   | ❌ No — types cannot be merged                |
| Usage                           | Preferred for object shapes and class design  | More flexible, can define primitives/unions   |
| Computed Properties             | ❌ Not allowed                                | ✅ Allowed                                    |

### Example: Interface vs Type

```ts
// Using interface
interface Person {
  name: string;
  age: number;
}

// Using type
type Animal = {
  name: string;
  age: number;
};
```

### Declaration Merging (Only Works with Interface)

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Result: { name: string; age: number }
```

---

## 🔹 `keyof` Keyword in TypeScript

The `keyof` keyword is a TypeScript operator used to get a **union of the property names** of a given type or interface.

### Example

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User; // 'id' | 'name' | 'email'
```

### Usage Scenario

You can use `keyof` to create generic functions that work on object keys:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const userName = getProperty(user, "name"); // Type: string
```

---

## ✅ Summary

- Use `interface` when you are designing object shapes or working with classes.
- Use `type` when you need to compose unions, intersections, or use advanced features.
- The `keyof` keyword helps you build generic and type-safe code by extracting key names from types.

---
