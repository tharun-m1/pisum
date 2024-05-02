import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":category" element={<Category />}></Route>
          <Route path=":category/:product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
