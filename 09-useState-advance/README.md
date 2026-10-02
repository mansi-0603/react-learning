# Advanced useState

This section covers more advanced patterns of using `useState`, including objects, arrays, previous state, and multiple state values.

## Updating State Using Previous State

When the new state depends on the previous state, use the functional update form.

```jsx
const [count, setCount] = useState(0);

setCount((prevCount) => prevCount + 1);
```

This is especially useful when multiple state updates happen together.

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

## State with Objects

```jsx
const [user, setUser] = useState({
  name: "Mansi",
  age: 20,
});
```

Update one property:

```jsx
setUser((prev) => ({
  ...prev,
  age: 21,
}));
```

The spread operator keeps the other properties.

## State with Arrays

```jsx
const [skills, setSkills] = useState([]);
```

Adding an item:

```jsx
setSkills((prev) => [...prev, "React"]);
```

Removing an item:

```jsx
setSkills((prev) =>
  prev.filter((skill) => skill !== "React")
);
```

## Multiple States

A component can have multiple state variables:

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(20);
const [isActive, setIsActive] = useState(false);
```

## State Based on Previous State

Prefer:

```jsx
setCount((prev) => prev + 1);
```

over:

```jsx
setCount(count + 1);
```

when the update depends on the previous value.

## Key Concept

State updates should be treated as immutable updates.

Instead of modifying the existing object or array directly, create a new object or array and pass it to the state setter.
