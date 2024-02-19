// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ category }) => {
  // Sample data for demonstration
  const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: '$30', image: 'product3.jpg' }
  ];

  return (
    <div>
      <h2>{category} Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
              <span>{product.price}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
