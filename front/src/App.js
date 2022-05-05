import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/nav-bar';
import CartPage from './pages/cart-page';
import MainPage from './pages/main-page';
import ProductPage from './pages/product-page';
import CategoryPage from './pages/category-page';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/:category/" element={<CategoryPage />} />
        <Route path="/:category/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
