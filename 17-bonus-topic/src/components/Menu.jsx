import React from "react";
import ThemeButton from "./ThemeButton";

// Menu bhi sirf beech ka layer hai, props ko aage bhej raha hai
const Menu = ({ theme, setTheme }) => {
  return (
    <div>
      <ThemeButton theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Menu;