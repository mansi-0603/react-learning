# React Components

Components are the building blocks of a React application. A component is a reusable piece of UI that can contain its own structure, logic, and styling.

## Creating a Component

A React component is usually a JavaScript function that returns JSX.

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

## Using a Component

```jsx
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
```

## Component Naming

React components should start with a capital letter.

```jsx
function Navbar() {
  return <nav>Navbar</nav>;
}
```

Use:

```jsx
<Navbar />
```

Not:

```jsx
<navbar />
```

## Why Components?

Components help with:

* Reusability
* Code organization
* Separation of concerns
* Maintaining large applications
* Reusing UI in multiple places

## Example

```jsx
function Header() {
  return <h1>My Website</h1>;
}

function Footer() {
  return <footer>Copyright 2026</footer>;
}

function App() {
  return (
    <>
      <Header />
      <main>Website Content</main>
      <Footer />
    </>
  );
}

export default App;
```
