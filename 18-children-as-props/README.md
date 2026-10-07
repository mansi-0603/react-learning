# Theme-Aware Navbar (React + Vite)

A small React project demonstrating **children as props**, **component composition**, and the **Context API** with a working light/dark theme toggle.

## Features

- Light / dark mode toggle, shared across components via `ThemeContext`
- Theme persisted in `localStorage`; first visit follows the OS preference
- Navbar accepts any number of children (safe for 0, 1 or many)
- CSS variables drive all colours, so adding a theme only means adding one block
- Semantic, accessible markup (`<header>`, `<nav>`, `<ul>`, labelled button, focus styles, reduced-motion support)

## Project structure

```
src/
├── main.jsx                  # Entry point, wraps <App /> in ThemeProvider
├── App.jsx                   # Page content + Navbar children
├── index.css                 # Global styles + theme variables
├── context/
│   └── ThemeContext.jsx      # ThemeProvider + useTheme hook
└── components/
    ├── Navbar.jsx            # Renders logo, children, and <Nav2 />
    └── Nav2.jsx              # Links + theme toggle button
```

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview the build
```

Requires Node.js 18+.

## How it works

**Context.** `ThemeProvider` holds `theme` state and a `toggleTheme` function. It sets `data-theme` on `<html>`, which switches the CSS variables in `index.css`. Any component reads it with:

```jsx
const { theme, toggleTheme } = useTheme();
```

**Children as props.** `Navbar` uses `Children.toArray(children)` instead of `props.children[0]` / `[1]`, which would crash with a single child.

```jsx
<Navbar>
  <h2>First</h2>
  <h2>Second</h2>
</Navbar>
```

## Changelog (what was upgraded)

- Implemented `ThemeContext` (the old file was a placeholder component) with provider + `useTheme` hook
- Removed prop-drilling of `theme` from `App` → `Navbar` → `Nav2`
- Added a working theme toggle with persistence and OS-preference default
- Fixed fragile `props.children[0]` / `[1]` indexing and removed the stray `console.log()`
- Fixed the "Conatact" typo; links now use `<nav>` / `<ul>` / `<a>`
- Replaced hard-coded colours with CSS variables; added focus and reduced-motion styles
- Removed unused `App.css` (leftover Vite template styles, never imported)

## Ideas for next steps

- Add React Router for real page navigation
- Add a mobile hamburger menu
- Add tests with Vitest + React Testing Library

## License

MIT
