import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      // .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Discount:</strong> {product.discountPercentage}%</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <Link to="/">
          <button className="back-button">← Back to Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
