// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when resizing to larger screens
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md py-2" : "py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="../images/logo.png"
            alt="UrticaScan AI Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          />
          <span className={`font-extrabold text-blue-700 hover:text-blue-900 transition-colors ${scrolled ? "text-2xl" : "text-2xl sm:text-3xl"}`}>
            UrticaScan AI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-semibold text-base lg:text-lg">
          <NavLink to="/" text="Home" />
          <NavLink to="/about" text="About" />
          <NavLink to="/predict" text="Predict" />
          <NavLink to="/team" text="Team" />
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group z-50"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block w-7 h-0.5 bg-gray-700 rounded transition-all duration-300 ease-in-out ${
              mobileOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-gray-700 rounded my-1.5 transition-all duration-300 ease-in-out ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-gray-700 rounded transition-all duration-300 ease-in-out ${
              mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <ul className="flex flex-col space-y-6 font-semibold text-gray-700 text-lg">
              <MobileNavLink to="/" text="Home" setMobileOpen={setMobileOpen} />
              <MobileNavLink to="/about" text="About" setMobileOpen={setMobileOpen} />
              <MobileNavLink to="/predict" text="Predict" setMobileOpen={setMobileOpen} />
              <MobileNavLink to="/team" text="Team" setMobileOpen={setMobileOpen} />
            </ul>
            
            <div className="mt-auto pb-10 pt-10 border-t border-gray-200">
              <div className="flex space-x-4">
                <a 
                  href="https://in.linkedin.com/in/ankitk247" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn.Ankit
                </a>
                <a 
                  href="https://www.linkedin.com/in/nishkarsh70" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn.Nishkarsh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink component
function NavLink({ to, text }) {
  return (
    <li>
      <Link
        to={to}
        className="relative hover:text-blue-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-700 after:transition-all hover:after:w-full"
      >
        {text}
      </Link>
    </li>
  );
}

// Mobile NavLink component
function MobileNavLink({ to, text, setMobileOpen }) {
  return (
    <li>
      <Link
        to={to}
        className="block py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
        onClick={() => setMobileOpen(false)}
      >
        {text}
      </Link>
    </li>
  );
}