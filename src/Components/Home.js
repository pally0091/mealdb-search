import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="mt-32 h-[60vh]">
      <div className="h-[60%] bg-white w-[25%] ml-[70%] mt-36 rounded-3xl pt-6">
        <div className="h-[60%] my-auto">
          <h1 className="text-center text-3xl p-3 mt-5 font-bold ">
            ABCD RESTAURANT
          </h1>
          <p className="text-lg text-center p-3">Meal recipes on ypur needs</p>
        </div>
        <button className="bg-green-400 p-3 w-full hover:shadow-lg hover:shadow-black">
          <Link to="/meals/Lamb">Click Here</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
