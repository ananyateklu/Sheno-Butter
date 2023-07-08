import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import  CartProvider  from './components/Home/CartProvider';

function App() {
  
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
      </div>
  );
}

export default App;
