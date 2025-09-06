import { useState } from "react";
import headerbg from "../assets/headerbg.png";
import BhLogo from "../assets/BhLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [bedrooms, setBedrooms] = useState(0);

  return (
    // Background image wrapper for navbar + hero
    <div
      className="bg-cover bg-center h- [40rem] relative"
      style={{ backgroundImage: `url(${headerbg})` }}
    >
      {/* Transparent navbar over the image */}
      <nav className="bg-transparent shadow-none">
        {/* The Main container */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            {/* Logo + primary nav */}
            <div className="flex space-x-7 items-center">
              {/* Logo */}
              <div>
                <Link to="/" className="flex items-center">
                  <div className="bg-green-500 rounded-full flex items-center justify-center h-6 w-6">
                    <img
                      src={BhLogo}
                      alt="BetaHouse Logo"
                      className="h-3 w-4"
                    />
                  </div>
                  <span
                    className="font-normal text-lg"
                    style={{ color: "#F5f5f5" }}
                  >
                    BetaHouse
                  </span>
                </Link>
              </div>

              {/* Primary nav links (hidden on small screens) */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                <a
                  href="#"
                  className="py-4 px-2 font-normal hover:text-green-400 transition duration-300"
                  style={{ color: "#F5F5F5" }}
                >
                  Home
                </a>

                <a
                  href="#"
                  className="py-4 px-2 font-normal hover:text-green-400 transition duration-300"
                  style={{ color: "#F5F5F5" }}
                >
                  Properties
                </a>
                <a
                  href="#"
                  className="py-4 px-2 font-normal hover:text-green-400 transition duration-300"
                  style={{ color: "#F5F5F5" }}
                >
                  Agents
                </a>
                <a
                  href="#"
                  className="py-4 px-2 font-normal hover:text-green-400 transition duration-300"
                  style={{ color: "#F5F5F5" }}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Right: Auth buttons */}
            {/* The Logout button logic was added here, so only when a user is logged in will the logout button be shown.  */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              {!localStorage.getItem("token") ? (
                <>
                  <Link
                    to="/auth/signup"
                    className="py-2 px-4 font-medium text-white border border-white-500 rounded hover:text-green-500 transition duration-300"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/auth/login"
                    className="py-2 px-4 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                  className="py-2 px-4 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="outline-none"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden mobile-menu bg-green-100/80 rounded shadow-md text-green-700">
            <ul className="pt-2 pb-3">
              <li>
                <a href="#" className="block pl-4 pr-4 py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block pl-4 pr-4 py-2">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="block pl-4 pr-4 py-2">
                  Agents
                </a>
              </li>
              <li>
                <a href="#" className="block pl-4 pr-4 py-2">
                  Contact
                </a>
              </li>
              <li className="mt-2">
                {!localStorage.getItem("token") ? (
                  <>
                    <Link
                      to="/auth/signup"
                      className="block pl-4 pr-4 py-2 bg-green-500 text-white rounded mb-2"
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/auth/login"
                      className="block pl-4 pr-4 py-2 bg-green-400 text-white rounded"
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.reload();
                    }}
                    className="block w-full text-left pl-4 pr-4 py-2 bg-red-500 text-white rounded"
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Mid-Hero Section */}
      <section className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white">
        <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Browse Our Properties
          </h1>
          <p className="mt-4 text-x opacity-90 text-normal">
            Find your perfect home among our curated properties. Start
            <br />
            browsing now!
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-11/12 md:w-3/4 lg:w-2/3 mt-6">
          {/* Location */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-gray-500 text-sm font-semibold mb-1">
              LOCATION
            </label>
            <input
              type="text"
              placeholder="e.g. Gbagada"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Property Type */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-gray-500 text-sm font-semibold mb-1">
              PROPERTY TYPE
            </label>
            <input
              type="text"
              placeholder="e.g. Duplex, Bedroom Flat"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-gray-500 text-sm font-semibold mb-1">
              BEDROOM
            </label>
            <div className="flex items-center space-x-3 border rounded px-3 py-2">
              <button
                type="button"
                onClick={() => setBedrooms((prev) => (prev > 0 ? prev - 1 : 0))}
                className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-xs font-bold text-gray-600"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setBedrooms((prev) => prev + 1)}
                className="text-gray-500 text-xl"
              >
                +
              </button>
              <span className="text-gray-700 font-semibold">{bedrooms}</span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-green-600 text-white px-6 py-3 rounded w-full md:w-auto">
            Find Property
          </button>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
