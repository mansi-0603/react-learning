# React Router DOM

`react-router-dom` is used to create **different pages/routes inside a React application** without reloading the whole page.

For example:

```text
/          → Home
/about     → About
/contact   → Contact
```

---

## 1. Router

### BrowserRouter

`BrowserRouter` enables routing in our React app.

Usually, it is written in `main.jsx`:

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

Think of `BrowserRouter` as the thing that **enables React Router in our application**.

---

## 2. Routes

`Routes` is the **container that holds all our routes**.

In our `App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

`Routes` checks the current URL and finds the matching `Route`.

---

## 3. Route

`Route` tells React:

> "For this URL, show this component."

Example:

```jsx
<Route path="/about" element={<About />} />
```

Means:

```text
URL: /about
      ↓
Route finds /about
      ↓
About component is displayed
```

Our routes:

```jsx
<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/contact" element={<Contact />} />
```

So:

```text
/          → Home
/about     → About
/contact   → Contact
```

---

# 4. Our App.jsx

Our `App.jsx`:

```jsx
const App = () => {
  return (
    <div className="app">

      <Navbar />

      <Para />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Anchor />

    </div>
  );
};
```

### Important point

`Navbar`, `Para`, and `Anchor` are **outside `<Routes>`**.

Therefore, they appear on **every page**.

```text
App
│
├── Navbar       → every page
├── Para         → every page
│
├── Routes
│   ├── Home     → only /
│   ├── About    → only /about
│   └── Contact  → only /contact
│
└── Anchor       → every page
```

For example, when we go to `/about`:

```text
Navbar
   ↓
Para
   ↓
About
   ↓
Anchor
```

Only the component inside `Routes` changes.

---

# 5. Link

In our `Navbar.jsx`, we use `Link`:

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

`Link` is used to **move between routes inside our React application**.

Example:

```text
Click About
     ↓
/about
     ↓
About component
```

---

# 6. Link vs `<a>`

In `Anchor.jsx`, we use normal HTML `<a>` tags:

```jsx
<a href="https://www.instagram.com">
  Instagram
</a>
```

When we click `<a>`, the browser performs a **normal navigation**.

The page reloads.

But:

```jsx
<Link to="/about">About</Link>
```

uses React Router.

The URL changes and React displays the new component **without a full page reload**.

### Remember

```text
<a>
   ↓
Normal browser navigation
   ↓
Page reload

<Link>
   ↓
React Router navigation
   ↓
No full page reload
```

### When to use what?

Use `<Link>` for:

```text
Your React app
Home
About
Contact
Profile
Dashboard
```

Use `<a>` for external websites:

```text
Instagram
YouTube
Facebook
Google
```

---

# 7. Our Navbar.jsx

```jsx
const Navbar = () => {
  return (
    <div className="navbar">

      <h3 className="navbar-title">
        Chai or Code
      </h3>

      <div className="navbar-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </div>

    </div>
  );
};
```

The important part for routing is:

```jsx
<Link to="/about">About</Link>
```

It changes the route to `/about`.

---

# 8. Our Para.jsx

```jsx
const Para = () => {
  return (
    <div className="para-container">
      <p className="para-text">
        This paragraph section will be seen on every page.
      </p>
    </div>
  );
};
```

Because `<Para />` is outside `<Routes>`:

```jsx
<Para />

<Routes>
   ...
</Routes>
```

it remains visible when we move between:

```text
/
 /about
 /contact
```

---

# 9. Our Anchor.jsx

```jsx
const Anchor = () => {
  return (
    <div className="anchor-container">

      <a href="https://www.instagram.com">
        Instagram
      </a>

      <a href="https://www.youtube.com">
        Youtube
      </a>

      <a href="https://www.facebook.com">
        Facebook
      </a>

    </div>
  );
};
```

These are external links, so normal `<a>` tags are appropriate.

---

# 10. Easy way to remember

```text
BrowserRouter
     ↓
Enables routing
     ↓
Routes
     ↓
Contains Route
     ↓
Route checks URL
     ↓
Shows the correct component
```

Example:

```text
Click About
     ↓
<Link to="/about">
     ↓
URL becomes /about
     ↓
<Route path="/about">
     ↓
<About /> appears
```

---

## Quick Revision

| Thing           | Meaning                       |
| --------------- | ----------------------------- |
| `BrowserRouter` | Enables routing               |
| `Routes`        | Holds all routes              |
| `Route`         | Connects URL to component     |
| `Link`          | Moves between internal routes |
| `<a>`           | Normal/external navigation    |

### Main idea

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

**Routes = collection of routes**

**Route = one particular URL + its component**

**BrowserRouter = enables the routing system**

**Link = moves between routes without full page reload**
