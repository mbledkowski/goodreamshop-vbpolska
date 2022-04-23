import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

var shopName = "GooDreamShop";

function App() {
  return (
    <div className="App">
      <Header shopName={shopName}/>
      <Routes>
        <Route path="/" element={<Home shopName={shopName}/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About shopName={shopName}/>}/>
      </Routes>
    </div>
  );
};

export default App;
