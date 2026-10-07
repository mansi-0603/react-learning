import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h2>Theme is {theme}</h2>

      {/* Props yahin se shuru hote hain: App -> Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
