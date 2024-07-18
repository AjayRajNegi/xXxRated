import { Route, Routes, useLocation } from "react-router";
import { LoadingAnimation, Product, Contact, About } from "./components/Index";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<LoadingAnimation />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default App;
