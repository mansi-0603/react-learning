# React Props

Props are used to pass data from a parent component to a child component.

Props are **read-only**. A child component should not directly modify the props it receives.

## Passing Props

```jsx
function App() {
  return <User name="Sneha" age={20} />;
}
```

The `User` component receives these values through props.

```jsx
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

## Destructuring Props

Instead of writing `props.name` and `props.age`, we can destructure:

```jsx
function User({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

## Passing Different Data Types

Props can contain:

### String

```jsx
<User name="Sneha" />
```

### Number

```jsx
<User age={20} />
```

### Boolean

```jsx
<User isStudent={true} />
```

### Array

```jsx
<User skills={["C++", "React", "SQL"]} />
```

### Object

```jsx
<User user={{ name: "Riya", age: 20 }} />
```

## Props vs State

| Props                | State                    |
| -------------------- | ------------------------ |
| Passed from parent   | Managed inside component |
| Read-only            | Can be updated           |
| Used to pass data    | Used for dynamic data    |
| Controlled by parent | Controlled by component  |

## Example

```jsx
function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Card
        title="React"
        description="A JavaScript library for building UI."
      />

      <Card
        title="JavaScript"
        description="A programming language used for web development."
      />
    </>
  );
}
```
