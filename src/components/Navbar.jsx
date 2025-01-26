import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "./../image/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-blue-800 to-green-800 text-white shadow-lg fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={image}
                alt="Saylani Microfinance App Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold">Saylani Microfinance</span>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/applyloan"
              className="btn btn-ghost btn-circle avatar hover:scale-120 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
            >
              Apply Loan
            </Link>

            <Link
              to="/loancategory"
              className="btn btn-ghost btn-circle avatar hover:scale-120 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
            >
              Loan Category
            </Link>

            <Link
              to="/loancal"
              className="btn btn-ghost btn-circle avatar hover:scale-120 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
            >
              Loan Calculator
            </Link>

            <button
              className="btn btn-ghost btn-circle avatar hover:scale-120 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-blue-800 to-green-800">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/applyloan"
                className="btn btn-ghost btn-circle avatar hover:scale-120 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
                onClick={toggleMenu}
              >
                Apply Loan
              </Link>

              <Link
                to="/loancategory"
                className="btn btn-ghost btn-circle avatar hover:scale-120 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
                onClick={toggleMenu}
              >
                Loan Category
              </Link>

              <Link
                to="/loancal"
                className="btn btn-ghost btn-circle avatar hover:scale-120 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
                onClick={toggleMenu}
              >
                Loan Calculator
              </Link>

              <button
                className="btn btn-ghost btn-circle avatar hover:scale-120 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
                onClick={() => {
                  navigate("/login");
                  toggleMenu();
                }}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
