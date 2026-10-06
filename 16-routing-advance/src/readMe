# React Router Practice Project (Basics + Advanced)

A small React app that demonstrates the core ideas of **React Router v6/v7** with **Tailwind CSS v4**: links, active links, nested routes, dynamic URL params, programmatic navigation and a 404 page.

## Tech stack

- React + Vite
- react-router-dom
- Tailwind CSS v4 (`@import "tailwindcss";`)

## Getting started

```bash
npm install
npm install react-router-dom
npm run dev
```

Wrap the app in `BrowserRouter` once, in `src/main.jsx`:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

## Project structure

```
src/
├── main.jsx                  # BrowserRouter wraps <App />
├── App.jsx                   # Layout + all <Routes>
├── index.css                 # Tailwind import + global base styles
├── data/
│   └── courses.js            # Sample data for dynamic routes
├── components/
│   ├── Navbar.jsx            # Main navigation (NavLink, active state)
│   ├── Navbar2.jsx           # Home / Back / Forward (useNavigate)
│   └── Footer.jsx
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Courses.jsx           # List of courses (Link to dynamic URL)
    ├── CourseDetail.jsx      # Reads :courseId (useParams)
    ├── Product.jsx           # Parent route with <Outlet />
    ├── Men.jsx / Women.jsx / Kids.jsx   # Nested child routes
    └── NotFound.jsx          # Wildcard 404
```

## Route map

| URL | Component | Concept |
| --- | --- | --- |
| `/` | `Home` | Basic route |
| `/about` | `About` | Basic route |
| `/courses` | `Courses` | List page with `Link` |
| `/courses/:courseId` | `CourseDetail` | Dynamic param |
| `/product` | `Product` | Parent layout with `Outlet` |
| `/product/men` | `Men` | Nested route |
| `/product/women` | `Women` | Nested route |
| `/product/kids` | `Kids` | Nested route |
| `*` | `NotFound` | Catch-all 404 |

## Concepts covered

### Basics
- **`<BrowserRouter>`**: enables routing for the whole app.
- **`<Routes>` and `<Route>`**: map a `path` to an `element`.
- **`<Link to="/about">`**: client-side navigation with no page reload.
- **`<NavLink>`**: like `Link`, but gives an `isActive` flag for styling the current page. Use `end` on `/` so it isn't active on every page.
- **`path="*"`**: catches unmatched URLs and shows the 404 page.

### Advanced
- **Nested routes and `<Outlet />`**: child routes (`men`, `women`, `kids`) render inside the parent `Product` page, which keeps its tabs visible.
- **Dynamic routes**: `/courses/:courseId` matches any value; read it with `const { courseId } = useParams()`.
- **`useNavigate()`**: navigate from code: `navigate('/')`, `navigate(-1)` (back), `navigate(1)` (forward).
- **`useLocation()`**: used in `NotFound` to show the URL that failed.

## What was improved

- **Layout**: replaced the absolutely positioned footer with a `flex min-h-screen flex-col` layout, so the footer never overlaps content.
- **Global CSS**: removed the global `h1 { position: absolute; ... }` rule that forced every heading to the centre of the screen. Styling now lives in Tailwind classes per page.
- **Navbar**: `Link` became `NavLink` with active highlighting; logo now links home.
- **Navbar2**: shortened labels, added hover styles, used `navigate(1)` instead of `+1`.
- **CourseDetail**: the component was wrongly named `Courses`; it now uses `useParams` and handles unknown IDs.
- **Courses**: now renders a real list from `data/courses.js`, linking to each detail page.
- **Product**: uses `NavLink` tabs with an active state.
- **NotFound**: shows the bad path and a link home.
- **Content**: Home, About, Men, Women and Kids now have meaningful placeholder content.

## Ideas to try next

- Redirect `/product` to `/product/men` with an index route and `<Navigate />`.
- Use `useSearchParams` to filter courses (`/courses?level=Beginner`).
- Protect a route with a `ProtectedRoute` wrapper.
- Switch to `createBrowserRouter` and `RouterProvider` (data router API).
- Lazy-load pages with `React.lazy` and `Suspense`.