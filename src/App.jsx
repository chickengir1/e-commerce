import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import ProductPage from "./pages/ProductPage"
import Main from './pages/MainPage';
import CartPage from './pages/CartPage';
import Register from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import Sidebar from './pages/Sidebarpage';
import AccountPage from './pages/AccountPage';
import OrdersPage from './pages/OrdersPage';
import Nav from './components/nav/nav';
import Dashboard from '../src/pages/DashboardPage';
import SupportPage from './pages/SupportPage';
import AddProductPages from './pages/AddProductPages';
import UpdateProduct from './components/update/ProductRoot';
import CardInfo from './pages/CardInfoPage';
import Category from './components/main/Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/nav' element={<Nav />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:categoryName" element={<ProductPage />} /> 
        <Route path="/products/:brandName" element={<ProductPage />} />{/*이거는 좀 나중에...*/} 
        <Route path="/products" element={<ProductPage />} /> 
        <Route path="/carts" element={<CartPage />} />
        <Route path="/checkouts" element={<CheckoutPage />} />
        <Route path="/product/:productId" element={<DetailPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/add" element={<AddProductPages />} />
        <Route path="/card" element={<CardInfo />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/category" element={<Category />} /> 
      </Routes>
    </Router>
  );
}

export default App;
