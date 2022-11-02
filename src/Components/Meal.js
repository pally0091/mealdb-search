import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMeal, idMeal, strMealThumb } = meal;
  return (
    <div className="w-3/12 mx-10 mt-6 p-4 rounded-2xl shadow-xl shadow-black text-center">
      <img
        className="shadow-lg shadow-black"
        src={strMealThumb}
        alt="thumb"
      ></img>
      <h1 className="mt-3 text-xl font-bold">{strMeal}</h1>
      <p className="my-3">{idMeal}</p>
      <div className="w-full bg-green-300 p-2 rounded-xl">
        <Link>Details</Link>
      </div>
    </div>
  );
};

export default Meal;
