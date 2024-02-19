// CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <span>{item.name}</span>
      <span>{item.price}</span>
      <span>Quantity: {item.quantity}</span>
      <button>Remove</button>
    </div>
  );
}

export default CartItem;
