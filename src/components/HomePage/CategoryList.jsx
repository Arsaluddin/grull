// CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  // Sample data for demonstration
  const categories = [
    { id: 1, name: 'Electronics', image: 'electronics.jpg' },
    { id: 2, name: 'Clothing', image: 'clothing.jpg' },
    { id: 3, name: 'Accessories', image: 'accessories.jpg' }
  ];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
}

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

export default CategoryList;
