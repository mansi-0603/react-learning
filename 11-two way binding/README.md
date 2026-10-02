# Two-Way Binding in React

Two-way binding means keeping the **UI input and application state synchronized**.

In React, two-way binding is commonly achieved using:

```jsx
value={state}
onChange={(e) => setState(e.target.value)}
```

The data flows in two directions:

```text
        React State
             ↓
          value
             ↓
          Input
             ↓
         onChange
             ↓
        setState()
             ↓
        React State
```

## Basic Example

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
```

### What Happens?

If the user types:

```text
Mansi
```

`onChange` captures the input:

```jsx
(e) => setName(e.target.value)
```

The state becomes:

```text
name = "Mansi"
```

React then updates:

```jsx
<p>Hello, {name}</p>
```

to:

```text
Hello, Mansi
```

## `value`

The `value` prop takes data **from React state and puts it into the input**.

```jsx
value={name}
```

Direction:

```text
State → Input
```

## `onChange`

`onChange` takes the user's input and updates the state.

```jsx
onChange={(e) => setName(e.target.value)}
```

Direction:

```text
Input → State
```

Together:

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

create the two-way synchronization.

## Controlled Component

An input whose value is controlled by React state is called a **controlled component**.

```jsx
const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

Here, React state is the **source of truth**.

## Two-Way Binding vs Form Handling

These concepts should not be confused.

**Two-way binding** focuses on:

```text
Input ↔ State
```

**Form handling** focuses on the complete form process:

```text
Input
  ↓
State
  ↓
Validation
  ↓
Submit
  ↓
API / Backend
```

Two-way binding is therefore **one technique commonly used inside form handling**, not the entire form-handling process.
