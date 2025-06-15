// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="../images/logo.png"
            alt="UrticaScan AI Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-3xl font-extrabold text-blue-700 hover:text-blue-900 transition-colors">
            UrticaScan AI
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold text-lg">
          <li>
            <Link
              to="/"
              className="relative hover:text-blue-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-700 after:scale-x-0 after:origin-right after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative hover:text-blue-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-700 after:scale-x-0 after:origin-right after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/predict"
              className="relative hover:text-blue-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-700 after:scale-x-0 after:origin-right after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              Predict
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="relative hover:text-blue-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-700 after:scale-x-0 after:origin-right after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              Team
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <MobileMenu />
      </div>
    </nav>
  );
}

// Mobile menu with hamburger toggle
import { useState } from "react";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block w-7 h-0.5 bg-gray-700 rounded transition-transform duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-7 h-0.5 bg-gray-700 rounded my-1 transition-opacity duration-300 ease-in-out ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-7 h-0.5 bg-gray-700 rounded transition-transform duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden font-semibold text-gray-700 text-lg">
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-blue-700">
              About
            </Link>
          </li>
          <li>
            <Link to="/predict" onClick={() => setOpen(false)} className="hover:text-blue-700">
              Predict
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={() => setOpen(false)} className="hover:text-blue-700">
              Team
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
