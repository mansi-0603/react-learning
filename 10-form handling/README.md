# Form Handling in React

Form handling in React means managing user input, validating form data, and handling form submission.

React commonly uses event handlers such as `onChange` and `onSubmit` to handle forms.

## Basic Form

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

## Form Submission

Use `onSubmit` to handle form submission:

```jsx
<form onSubmit={handleSubmit}>
```

The event handler:

```jsx
function handleSubmit(e) {
  e.preventDefault();

  // form logic
}
```

### Why `preventDefault()`?

Normally, submitting an HTML form can reload the page.

```jsx
e.preventDefault();
```

prevents that default browser behavior.

## Handling Multiple Inputs

```jsx
const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
});
```

A common approach is to use the input's `name` attribute:

```jsx
function handleChange(e) {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
}
```

Inputs:

```jsx
<input
  name="name"
  type="text"
  onChange={handleChange}
/>

<input
  name="email"
  type="email"
  onChange={handleChange}
/>

<input
  name="password"
  type="password"
  onChange={handleChange}
/>
```

## Form Validation

Form handling can also include validation:

```jsx
function handleSubmit(e) {
  e.preventDefault();

  if (!form.name) {
    console.log("Name is required");
    return;
  }

  if (!form.email) {
    console.log("Email is required");
    return;
  }

  console.log("Form submitted", form);
}
```

## Common Form Events

| Event      | Purpose                          |
| ---------- | -------------------------------- |
| `onChange` | Detect input changes             |
| `onSubmit` | Handle form submission           |
| `onFocus`  | Detect when input receives focus |
| `onBlur`   | Detect when input loses focus    |

## Key Concepts

* Handle form submission using `onSubmit`.
* Use `e.preventDefault()` to prevent page reload.
* Store form data using state.
* Use `onChange` to detect user input.
* Validate data before submitting.
* Submit the processed data to an API when required.
