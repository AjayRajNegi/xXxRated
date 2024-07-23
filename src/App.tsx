import Lenis from "lenis";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { Home, Product, Contact, About } from "./components/Index";
import PleasureG from "./components/ProductPages/Categories/Gas/PleasureG";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pleasureG" element={<PleasureG />}></Route>
      </Routes>
    </>
  );
};

export default App;
