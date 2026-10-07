import React from "react";
import Menu from "./Menu";

// Navbar ko theme/setTheme khud use nahi karna,
// bas aage Menu ko pass kar raha hai -> yahi props drilling hai
const Navbar = ({ theme, setTheme }) => {
  return (
    <nav>
      <p>Navbar</p>
      <Menu theme={theme} setTheme={setTheme} />
    </nav>
  );
};

export default Navbar;
