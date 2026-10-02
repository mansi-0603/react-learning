# CSS in React

CSS is used to control the appearance and layout of React components.

React does not replace CSS. It provides different ways to apply CSS to components.

## External CSS

Create a CSS file:

```css
/* App.css */

.heading {
  color: blue;
  font-size: 32px;
}
```

Import it into the component:

```jsx
import "./App.css";

function App() {
  return <h1 className="heading">Hello React</h1>;
}

export default App;
```

## className

In JSX, use `className` instead of HTML's `class`.

```jsx
<div className="container">
  <h1>Hello</h1>
</div>
```

## Multiple Classes

```jsx
<div className="card active">
  Content
</div>
```

## Inline CSS

React also supports inline styles using JavaScript objects.

```jsx
function App() {
  const headingStyle = {
    color: "red",
    fontSize: "30px",
  };

  return <h1 style={headingStyle}>Hello React</h1>;
}
```

Notice that CSS properties use camelCase:

```css
font-size
```

becomes:

```jsx
fontSize
```

## When to Use CSS

CSS can be used for:

* Colors
* Fonts
* Spacing
* Flexbox
* Grid
* Responsive design
* Animations
* Component layouts

For larger projects, CSS can be organized using separate files, CSS Modules, or utility frameworks such as Tailwind CSS.
