import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import HomePage from "./pages/HomPage/HomePage";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomePage />} />
          <Route path=":category" element={<Category />}></Route>
          <Route path=":category/:product" element={<Product />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
