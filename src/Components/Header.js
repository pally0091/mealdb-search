import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiFillFacebook, AiFillGitlab, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-white h-24 fixed w-full top-0 flex border-b-black border-2 ">
      <Link
        to="/"
        className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
      >
        <img
          className="w-full h-full"
          src="https://i.ibb.co/H4r1fNm/ABCD.png"
          alt="LOGO"
        />
      </Link>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 ">
            <Link to="/home">
              <span>HOME</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6">
            <Link to="/meals/Beef">
              <span>MEALS</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6">
            <Link to="/about">
              <span>ABOUT</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="hidden xl:contents">
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
          <li className="p-1">
            <a
              href="https://www.facebook.com/frabbi91"
              target="_blank"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              rel="noreferrer"
            >
              <AiFillFacebook></AiFillFacebook>
            </a>
          </li>
          <li className="p-1">
            <a
              href="https://github.com/pally0091"
              target="_blank"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              rel="noreferrer"
            >
              <AiFillGitlab></AiFillGitlab>
            </a>
          </li>
          <li className="p-1">
            <a
              href="https://www.linkedin.com/in/debashis-roy-659ba91ba/"
              target="_blank"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
              rel="noreferrer"
            >
              <AiFillLinkedin></AiFillLinkedin>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
