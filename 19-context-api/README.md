# Context API in React (Theme Switcher)

## Context API kya hai?

Context API se data **centralized** ho jata hai. Matlab data ek jagah (context) mein rakha jata hai, aur app ka **har component** use seedha access kar sakta hai. Beech ke components se props pass karwane ki zaroorat nahi padti (isse **props drilling** khatam hoti hai).

Sirf data padhna hi nahi, agar context ke saath function bhi diya ho (jaise `toggleTheme`), to koi bhi component data **change/modify** bhi kar sakta hai.

## 3 steps (yaad rakhne ke liye)

1. **Create context** -> `createContext()`
2. **Provide data** -> `<Context.Provider value={...}>`
3. **Use data** -> `useContext()` (is project mein custom hook `useTheme()`)

## Is project mein kaise hua

### 1. Create context (`context/ThemeContext.jsx`)

```jsx
const ThemeDataContext = createContext(null);
```

### 2. Provide data (`context/ThemeContext.jsx` + `main.jsx`)

`ThemeProvider` state rakhta hai (`theme`) aur use `value` ke through neeche sabko deta hai:

```jsx
<ThemeDataContext.Provider value={{ theme, setTheme, toggleTheme }}>
  {children}
</ThemeDataContext.Provider>
```

`main.jsx` mein poori `<App />` ko is provider se wrap karna zaroori hai. Is tarah `ThemeProvider` **App ka parent** hai, aur App ke andar ke saare components context use kar sakte hain:

```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

### 3. Use data (`useTheme()` hook)

```jsx
const { theme, toggleTheme } = useTheme();
```

- `Nav2.jsx` -> `theme` padhta hai aur screen par dikhata hai
- `Button.jsx` -> `toggleTheme` call karke theme badalta hai

## Component tree

```
main.jsx
 └── ThemeProvider        (state + value yahin hai)
      └── App
           ├── Navbar
           │    └── Nav2      (useTheme -> theme padhta hai)
           └── Button         (useTheme -> toggleTheme call karta hai)
```

## Folder structure

```
src/
 ├── context/
 │    └── ThemeContext.jsx   (context + ThemeProvider + useTheme)
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Nav2.jsx
 │    └── Button.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css               (light/dark CSS variables)
```

## Extra features

- `useTheme()` custom hook: har jagah `useContext` + context import nahi likhna padta, aur Provider ke bahar use karne par error milta hai.
- `useMemo` / `useCallback`: unnecessary re-renders kam hote hain.
- `localStorage`: refresh ke baad bhi theme yaad rehti hai.
- `<html data-theme="...">` + CSS variables: poora page theme hota hai.

## Props drilling vs Context API

| | Props drilling | Context API |
|---|---|---|
| Data flow | Parent -> har beech ka child -> target | Provider se seedha kisi bhi component ko |
| Beech ke components | Unhe bhi props lene/pass karne padte hain | Unhe kuch nahi karna |
| Code | Layers badhne par messy | Clean aur maintain karna easy |

## Kab use karein?

Theme, logged-in user, language jaisa data jo **bahut saare components** ko chahiye. Agar data sirf 1-2 level neeche jaana hai, to normal props hi kaafi hain.
