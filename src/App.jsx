// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/CategoryList';
import CategoryPage from './components/CategoryPage/ProductList';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetails';
import CartPage from './components/CartPage/CartItem';
import WishlistPage from './components/WishlistPage/WishlistItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/category/:category" element={<CategoryPage/>} />
        <Route path="/product/:productId" element={<ProductDetailsPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
