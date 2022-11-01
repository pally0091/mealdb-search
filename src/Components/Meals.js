import React from "react";
import Categories from "./Categories";
import Meal from "./Meal";

const Meals = () => {
  return (
    <div className="mt-32 flex flex-row p-6">
      <div className="w-2/12 p-3">
        <Categories></Categories>
      </div>
      <div className="w-10/12 border-2 border-white p-3">
        <Meal></Meal>
      </div>
    </div>
  );
};

export default Meals;
