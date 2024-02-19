// WishlistItem.js
import React from 'react';

const WishlistItem = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <span>{item.name}</span>
      <span>{item.price}</span>
      <button>Remove from Wishlist</button>
    </div>
  );
}

export default WishlistItem;
