import React from "react";

const Footer = () => {
  return (
    <div className="bg-white px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8  border-2 border-t-black">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect
                x="3"
                y="1"
                width="7"
                height="12"
              />
              <rect
                x="3"
                y="17"
                width="7"
                height="6"
              />
              <rect
                x="14"
                y="1"
                width="7"
                height="6"
              />
              <rect
                x="14"
                y="11"
                width="7"
                height="12"
              />
            </svg>
            <span className=" text-shadow-xl  ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              ABCD Restaurant
            </span>
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900 text-shadow-xl ">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:+880-1816892170"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +880-1816892170
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:goodquote39@hotmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              goodquote39@hotmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Polashbari, Ashulia, Dhaka-1344
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900 text-shadow-xl">
            Social
          </span>
          <div className="flex items-center mt-4 space-x-3">
            <a
              href="https://www.facebook.com/frabbi91"
              target="_blank"
              className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/pally0091"
              target="_blank"
              className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/debashis-roy-659ba91ba/"
              target="_blank"
              className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2022 Lorem Inc. All rights reserved ESA.
        </p>
      </div>
    </div>
  );
};

export default Footer;
