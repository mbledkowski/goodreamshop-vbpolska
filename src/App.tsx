import react from 'react'
import './App.scss'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Footer from './components/Footer';
import styled from 'styled-components';

const shopName = "GooDreamShop";

const Inner = styled.div`
  min-height: calc(100vh - 9rem - 21.44px);
  @media(max-width: 512px) {
    min-height: 100vh;
  }
`

function App() {
  return (
    <div className="App">
      <Header shopName={shopName} />
      <Inner>
        <Routes>
          <Route path="/" element={<Home shopName={shopName} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About shopName={shopName} />} />
        </Routes>
      </Inner>
      <Footer shopName={shopName} />
    </div>
  );
};

export default App;
