import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Para from "./components/Para";
import Anchor from "./components/Anchor";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Para />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Anchor />
    </div>
  );
};

export default App;