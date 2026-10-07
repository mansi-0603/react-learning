import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeDataContext = createContext(null);

// Pehle localStorage dekho, nahi mila to system ki preference lo
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* localStorage available nahi hai, ignore */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Isko main.jsx mein <App /> ke around wrap karna hai
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  // Theme badalte hi <html data-theme="..."> update + save
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

  // useMemo: har render par naya object nahi banega,
  // isliye consumers unnecessarily re-render nahi honge
  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeDataContext.Provider value={value}>
      {children}
    </ThemeDataContext.Provider>
  );
};

// Custom hook: components ko useContext + import context object nahi karna padega
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeDataContext);
  if (context === null) {
    throw new Error("useTheme sirf <ThemeProvider> ke andar use karo");
  }
  return context;
};
