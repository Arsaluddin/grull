// ProductDetails.js
import React from 'react';

const ProductDetails = ({ productId }) => {
  // Sample product data for demonstration
  const product = {
    id: productId,
    name: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$10',
    image: 'product.jpg'
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
      <button>Add to Wishlist</button>
    </div>
  );
}

export default ProductDetails;
