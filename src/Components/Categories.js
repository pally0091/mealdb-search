import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);
  
  return (
    <div>
      <h1>Categories : {categories.length}</h1>
      <div>
        {categories.map((category) => (
          <h4 key={category.idCategory} className='m-2 text-lg font-semibold bg-white p-1 rounded-2xl text-center hover:bg-slate-500 hover:text-white'>
            <Link to={`/category/${category.idCategory}`}>
              {category.strCategory}
            </Link>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Categories;
