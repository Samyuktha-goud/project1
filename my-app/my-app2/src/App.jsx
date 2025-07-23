import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product.jsx';
import './index.css'

function App() {
  return (
    <Router>
      <div className="bg-red-500 text-white p-4 text-xl">
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Product />} />
        </Routes>
        </div>
      
        
        <div className="flex flex-col min-h-screen">
          <footer className="bg-gray-800 text-white p-6 text-center rounded-lg shadow-md mt-10 mx-auto max-w-4xl">
          <h3 className="text-xl font-bold col-red">2025 © Copyright MaassQube. All Rights Reserved</h3>
          </footer>
        </div>
      </div>
    </Router>
    
    
      
  );
}

export default App;
