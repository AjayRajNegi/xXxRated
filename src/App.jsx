import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import About from "./pages/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
