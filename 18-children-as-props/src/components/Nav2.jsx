import { useTheme } from "../context/ThemeContext";

const LINKS = ["Home", "About", "Contact", "Services"];

const Nav2 = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav aria-label="Main">
      <ul className="nav2">
        {LINKS.map((label) => (
          <li key={label}>
            <a href={`#${label.toLowerCase()}`}>{label}</a>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav2;
