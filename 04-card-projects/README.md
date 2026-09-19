# Job Cards

A small React practice project for learning **props**. It renders a grid of job-opening cards from an array of objects, where each card shows the company logo, role, tags, pay, location and a Save / Apply now button.

Design inspired by a job-card UI shot from [@uix.vikram](https://www.instagram.com/uix.vikram).

## Features

- Cards rendered from data with `.map()`, passing props with the spread operator
- Save / Saved toggle on each card (filled bookmark when saved) using `useState`
- Responsive CSS grid that drops to one column on small screens
- Semantic markup (`article`, `ul`, `li`) and visible keyboard focus
- Styling driven by CSS variables

## Tech stack

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [lucide-react](https://lucide.dev) for the bookmark icon
- Plain CSS

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Scripts

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the dev server with HMR    |
| `npm run build`   | Create a production build        |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint                       |

## Project structure

```
src/
├── components/
│   └── Card.jsx     # one job card (receives props)
├── data/
│   └── jobs.js      # array of job openings
├── App.jsx          # maps the data to <Card /> components
├── main.jsx         # React entry point
└── index.css        # tokens, layout and card styles
```

## Job data shape

Each object in `src/data/jobs.js` becomes one card:

| Property      | Example                         | Shown as                          |
| ------------- | ------------------------------- | --------------------------------- |
| `brandLogo`   | `"https://.../meta.png"`        | Round logo, top left              |
| `companyName` | `"Meta"`                        | Company name                      |
| `datePosted`  | `"5 days ago"`                  | Small grey text next to the name  |
| `post`        | `"Frontend Engineer"`           | Job title                         |
| `tag1`        | `"Full Time"`                   | First chip                        |
| `tag2`        | `"Junior Level"`                | Second chip                       |
| `pay`         | `"$65/hour"`                    | Pay, bottom left                  |
| `location`    | `"Menlo Park, USA"`             | Small grey text under the pay     |

To add an opening, add another object with these properties to the array.

## How it works

```jsx
// App.jsx
{jobOpenings.map((job) => (
  <Card key={`${job.companyName}-${job.post}`} {...job} />
))}
```

`{...job}` passes every property as a prop, and `Card` destructures the ones it needs:

```jsx
const Card = ({ brandLogo, companyName, datePosted, post, tag1, tag2, pay, location }) => { ... }
```

## Known limitations

- Logos are hotlinked from external sites, so some may break over time. For a real project, save them in `src/assets` and import them.
- The Saved state lives in the card and resets on page refresh.
- The list is static, so there is no search, filter or backend yet.

---

## React + Vite template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.