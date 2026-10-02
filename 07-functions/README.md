# Functions in React

React components are commonly written as JavaScript functions.

Functions are also used for event handling, calculations, data processing, and other application logic.

## Basic Function

```jsx
function greet() {
  return "Hello";
}
```

## Function Component

```jsx
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

## Arrow Function

React components can also be written using arrow functions.

```jsx
const App = () => {
  return <h1>Hello React</h1>;
};

export default App;
```

## Functions with Parameters

```jsx
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

## Functions as Event Handlers

```jsx
function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

Notice:

```jsx
onClick={handleClick}
```

not:

```jsx
onClick={handleClick()}
```

The second version calls the function immediately during rendering.

## Passing Arguments

Use an arrow function when arguments are required:

```jsx
function handleClick(name) {
  console.log(name);
}

<button onClick={() => handleClick("Mansi")}>
  Click
</button>
```

## Functions and Components

Functions are important in React because they are used for:

* Components
* Event handlers
* Data processing
* API functions
* Form handling
* State updates
* Utility functions
