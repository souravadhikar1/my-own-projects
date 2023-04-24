import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="/"
                className="text-white font-bold text-xl animate-pulse"
              >
                <span className="animate-bounce inline-block">Brand</span>{" "}
                <span className="animate-bounce font-semibold inline-block">
                  Name
                </span>
              </a>
            </div>
            <div className="flex sm:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="5" width="16" height="2" />
                  <rect x="4" y="11" width="16" height="2" />
                  <rect x="4" y="17" width="16" height="2" />
                </svg>
              </button>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link
                to="/"
                className="px-3 py-2 text-white hover:bg-gray-700 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/players"
                className="px-3 py-2 text-white hover:bg-gray-700 rounded-md"
              >
                Players
              </Link>
              <Link
                to="/register"
                className="px-3 py-2 text-white hover:bg-gray-700 rounded-md"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-3 py-2 text-white hover:bg-gray-700 rounded-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3">
            <a
              href="/"
              className="block px-3 py-2 text-white font-semibold rounded-md hover:bg-gray-700"
            >
              Link 1
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-white font-semibold rounded-md hover:bg-gray-700"
            >
              Link 2
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-white font-semibold rounded-md hover:bg-gray-700"
            >
              Link 3
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-white font-semibold rounded-md hover:bg-gray-700"
            >
              Link 4
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
