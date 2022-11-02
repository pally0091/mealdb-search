import React from "react";
import { useLoaderData } from "react-router-dom";

import Categories from "./Categories";
import Meal from "./Meal";

const Meals = () => {
  const meals = useLoaderData();

  // console.log(meals.meals);

  return (
    <div className="mt-32 flex flex-row p-6">
      <div className="w-2/12 p-3">
        <Categories></Categories>
      </div>
      <div className="w-10/12 border-2 border-white p-3 ">
        <h2>This Category has {meals.meals.length} items</h2>
        <div className="flex flex-row flex-wrap">
          {meals.meals.map((meal) => (
            <Meal
              key={meal.strMeal}
              meal={meal}
            ></Meal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
