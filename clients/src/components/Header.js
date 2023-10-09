import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-slate-500 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-800">ptah</span>
            <span className="text-red-900">clyde</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-1 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-150 sm:w-40"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className=" hidden sm:inline text-black-400 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className=" hidden sm:inline text-black-400 hover:underline">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="text-black-400 hover:underline">Sign-in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
