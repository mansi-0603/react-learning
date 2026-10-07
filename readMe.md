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

Now applying everything I've learned by building projects.

| # | Project | Concepts used | Status |
|---|---------|---------------|--------|
| 1 | _Project name_ | _e.g. useState, forms, localStorage_ | 🔜 Planned |
| 2 | _Project name_ | _e.g. React Router, API integration_ | 🔜 Planned |
| 3 | _Project name_ | _e.g. Context API, reusable components_ | 🔜 Planned |

## 🎯 Next Goals

- Build and deploy complete React projects
- Learn `useRef`, `useReducer`, `useMemo`, `useCallback`
- Explore advanced state management (Redux Toolkit / Zustand)
- Project structure and best practices
