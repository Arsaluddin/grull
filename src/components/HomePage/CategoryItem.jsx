// CategoryItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  return (
    <li>
      <Link to={`/category/${category.name.toLowerCase()}`}>
        <img src={category.image} alt={category.name} />
        <span>{category.name}</span>
      </Link>
    </li>
  );
}

export default CategoryItem;
