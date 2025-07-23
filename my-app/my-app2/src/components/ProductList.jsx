
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Product.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setProducts(response.data.products);
      });
  }, []);

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <div className='page'>
      <img
        src='https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-14558.jpg'
        alt='logo'
        className='shoppinglogo'
      />

      <div className='search'>
        <input
          type='text'
          className='search-box'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className='product1'>
        {products.map(product => (
          <div className='product2' key={product.id}>
            <h4>{product.title}</h4>
            <img src={product.thumbnail} alt={product.title} width="100%" />
            <p><b>Price:</b> ${product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button className="details-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
