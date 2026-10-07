# ⚛️ React Learning

A hands-on repository documenting my journey of learning and practicing **React.js**.

I have completed the core React fundamentals, including hooks, routing, API integration and Context API. Now I'm moving from concept practice to **building real projects**.

## 📚 What I've Learned

- [x] React fundamentals & project structure (Vite)
- [x] JSX
- [x] Components
- [x] Props & props drilling
- [x] State (`useState`, advanced state patterns)
- [x] Event handling & functions
- [x] Conditional rendering
- [x] Lists and keys
- [x] Forms, validation & controlled inputs (two-way binding)
- [x] Hooks (`useState`, `useEffect`, `useContext`)
- [x] Styling (CSS, Tailwind CSS)
- [x] API integration (`fetch`)
- [x] Browser storage (`localStorage`, `sessionStorage`)
- [x] React Router
- [x] State management with **Context API**
- [x] Building reusable components & custom hooks
- [ ] Building complete projects *(in progress)*

## 📂 Repository Structure

Each folder represents a different topic, concept, or practice session.

```text
react-learning/
│
├── 01-react-fundamentals/
│   └── React fundamentals, JSX, project structure
│
├── 02-components/
│   └── React components practice
│
├── 03-props/
│   └── React props practice
│
├── 04-css/
│   └── CSS styling in React
│
├── 05-tailwind/
│   └── Tailwind CSS practice
│
├── 06-functions/
│   └── Functions and event handlers
│
├── 07-useState/
│   └── useState basics
│
├── 08-useState-advance/
│   └── Advanced useState
│
├── 09-form-handling/
│   └── Form handling and validation
│
├── 10-two-way-binding/
│   └── Controlled inputs and state ↔ input
│
├── 11-useEffect/
│   └── useEffect and side effects
│
├── 12-api-calling/
│   └── API requests using fetch
│
├── 13-localStorage-sessionStorage/
│   └── Browser storage: localStorage & sessionStorage
│
├── 14-react-router/
│   └── Routing and navigation
│
├── 15-props-drilling/
│   └── Passing props through multiple component layers (and its problems)
│
├── 16-context-api/
│   └── Context API: createContext, Provider, useContext, custom hook (theme switcher)
│
├── projects/
│   └── Real-world React projects (see below)
│
└── README.md
```

## 🧠 Key Concepts Recap

**Props drilling:** data flows from a parent through many intermediate components until it reaches the deeply nested component that needs it. Data flows parent → child; a child can update parent state only through a function passed down as a prop.

**Context API:** centralizes data so any component can access (and update) it without passing props through every layer.

```text
1. Create context   → createContext()
2. Provide data     → <Context.Provider value={...}>
3. Use data         → useContext() / custom hook
```

## 🚀 Projects

Now applying everything I've learned by building real projects. Here're some projects for practing reactJs concepts.

### 🗂️ Project Roadmap

| # | Project | Concepts | Level | Status |
|---|---------|----------|-------|--------|
| 1 | Kanban Board (upgrade) | Context API, drag and drop, `localStorage`, Router | Mid  
| 2 | Movie Search App | API (TMDB), Router, debounce, pagination, favourites | Mid 
| 3 | E-commerce Cart | `useReducer`, Context, Router, filters, persistence | Mid 
| 4 | Expense Tracker | Forms, Context, `localStorage`, charts, filters | Beginner-mid
| 5 | Weather App | API calls, loading/error states, search, `useEffect` | Beginner
| 6 | Notes App | CRUD, tags, search, `localStorage`, reusable components | Beginner-mid
| 7 | Quiz App | State flow, timer, score, results page | Beginner-mid
| 8 | Blog / CMS | Router, forms, auth, protected routes, backend | Mid-advanced

> Status legend: 🔜 Planned · 🚧 In progress · ✅ Done


#### 1. Kanban Board (Upgrade)

The Kanban board I already built, upgraded with the concepts I've learned since.

##### Upgrade checklist

- [ ] **Context API:** move board state into context (no props drilling between columns and cards)
- [ ] **`localStorage` persistence:** tasks survive a page refresh
- [ ] **Drag and drop:** move cards between columns (`@hello-pangea/dnd` or `dnd-kit`)
- [ ] **Task details:** priority, due date, labels, description
- [ ] **Edit / delete:** modal for editing and deleting tasks
- [ ] **Search and filter:** by title, priority or label
- [ ] **Dark / light theme:** reuse the theme switcher (Context + CSS variables)
- [ ] **Multiple boards:** React Router routes like `/board/:id`
- [ ] **Backend:** Firebase / Supabase / JSON Server, plus login

##### Suggested structure

```text
kanban-board/
└── src/
    ├── context/
    │   ├── BoardContext.jsx
    │   └── ThemeContext.jsx
    ├── components/
    │   ├── Board.jsx
    │   ├── Column.jsx
    │   ├── TaskCard.jsx
    │   ├── TaskModal.jsx
    │   └── FilterBar.jsx
    ├── pages/
    │   ├── Home.jsx
    │   └── BoardPage.jsx
    ├── App.jsx
    └── main.jsx
```


#### 2. Movie Search App

- Search movies using the TMDB API
- Movie detail page (`/movie/:id`)
- Debounced search input
- Pagination or infinite scroll
- Favourites list saved in `localStorage`

#### 3. E-commerce Cart

- Product listing with category and price filters
- Cart managed with `useReducer` + Context
- Add / remove / update quantity, total price
- Cart persists after refresh
- Product detail and checkout pages via Router

#### 4. Expense Tracker

- Add income and expenses with a form
- Category-wise filters and totals
- Charts using Recharts
- Data stored in `localStorage`

#### 5. Weather App

- Search weather by city
- Loading and error states
- Recent searches saved in `localStorage`

#### 6. Notes App

- Create, edit, delete notes (CRUD)
- Tags and search
- Optional markdown preview
- Reusable components

#### 7. Quiz App

- Questions with multiple-choice options
- Timer per question
- Score and results page
- Retry option

#### 8. Blog / CMS

- Create, edit, delete posts
- Authentication and protected routes
- Backend (Firebase / Supabase)
- Rich forms with validation


### ✅ Checklist for Every Project

- [ ] Clean folder structure and reusable components
- [ ] Responsive design
- [ ] Loading and error handling
- [ ] README with screenshots and features
- [ ] Deployed on Vercel / Netlify with a live link
- [ ] Code pushed to GitHub with meaningful commits

### 🧭 Suggested Order

1. **Kanban Board upgrade:** Context + drag and drop
2. **Movie Search App:** API + Router
3. **E-commerce Cart:** `useReducer` + Context
4. Then the rest, based on interest

## 🎯 Next Goals

- Build and deploy complete React projects
- Learn `useRef`, `useReducer`, `useMemo`, `useCallback`
- Explore advanced state management (Redux Toolkit / Zustand)
- Project structure and best practices
