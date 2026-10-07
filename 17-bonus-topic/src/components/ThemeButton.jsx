import React from "react";

// Asli use yahin ho raha hai (deeply nested component)
const ThemeButton = ({ theme, setTheme }) => {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(nextTheme)}>
        Switch to {nextTheme}
      </button>
    </div>
  );
};

export default ThemeButton;
