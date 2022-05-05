import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/nav-bar";
import CartPage from "./pages/cart-page";
import MainPage from "./pages/main-page";
import CategoryPage from "./pages/category-page";
import { CartProvider } from "./context/cart-context";
import Layout from "./layouts/layout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/:category/" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          {/* <Route path="/" element={<Layout />}> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
