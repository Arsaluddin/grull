// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <li>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <span>{product.name}</span>
        <span>{product.price}</span>
      </Link>
    </li>
  );
}

export default ProductItem;
