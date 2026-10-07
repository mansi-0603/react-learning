import { useTheme } from "../context/ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default Button;
