
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import ProductDetail from './ProductDetail.jsx';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path=":id" element={<ProductDetail />} />
      </Routes>
    
  )
}

export default App;
