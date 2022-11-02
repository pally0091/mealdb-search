import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="mt-32 h-[60vh]">
      <div className="h-[60%] bg-white w-[25%] ml-[70%] mt-36 rounded-3xl pt-6">
        <h1 className="text-center text-3xl p-3 mt-5 font-bold ">ABCD RESTAURANT</h1>
        <p className="text-lg text-center p-3">Meal recipes on ypur needs</p>
        <button className="bg-green-400 p-3 rounded-b-3xl w-full mt-[55%]"><Link to='/meals/Lamb'>Click Here</Link></button>
      </div>
    </div>
  );
};

export default Home;
