import { Link, useNavigate } from "react-router-dom";
import image from "./../image/logo.png";

function Navbar() {
  const navigate = useNavigate();

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

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* Apply Loan Link */}
            <Link
              to="/applyloan"
              className="btn btn-ghost btn-circle avatar hover:scale-125 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
            >
              Apply Loan
            </Link>

            {/* Loan Category Link */}
            <Link
              to="/loancategory"
              className="btn btn-ghost btn-circle avatar hover:scale-125 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
            >
              Loan Category
            </Link>

            {/* Login Button */}
            <button
              className="btn btn-ghost btn-circle avatar hover:scale-125 hover:bg-black transition-transform duration-200 ease-in-out text-lg font-bold text-shadow border-black rounded-full p-1"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
