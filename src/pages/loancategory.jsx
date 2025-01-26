import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for backend API calls

const LoanCategory = () => {
  const navigate = useNavigate();

  // State to store loan categories
  const [loanCategories, setLoanCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch loan categories from the backend
  useEffect(() => {
    const fetchLoanCategories = async () => {
      try {
        // TODO: Replace with your backend API endpoint
        // Example: const response = await axios.get("/api/loan-categories");
        // setLoanCategories(response.data);

        // Mock data for now
        const mockData = [
          {
            id: 1,
            title: "Wedding Loans",
            subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
            maxLoan: "PKR 5 Lakh",
            loanPeriod: "3 years",
          },
          {
            id: 2,
            title: "Home Construction Loans",
            subcategories: ["Structure", "Finishing", "Loan"],
            maxLoan: "PKR 10 Lakh",
            loanPeriod: "5 years",
          },
          {
            id: 3,
            title: "Business Startup Loans",
            subcategories: [
              "Buy Stall",
              "Advance Rent for Shop",
              "Shop Assets",
              "Shop Machinery",
            ],
            maxLoan: "PKR 10 Lakh",
            loanPeriod: "5 years",
          },
          {
            id: 4,
            title: "Education Loans",
            subcategories: ["University Fees", "Child Fees Loan"],
            maxLoan: "Based on requirement",
            loanPeriod: "4 years",
          },
        ];
        setLoanCategories(mockData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching loan categories. Please try again later.");
        setLoading(false);
        console.error("Error fetching loan categories:", error);
      }
    };

    fetchLoanCategories();
  }, []);

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    // TODO: Navigate to the loan application page or perform other actions
    navigate(`/apply-loan/${categoryId}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-blue-500 to-blue-600">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-blue-500 to-blue-600">
        <p className="text-white text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 via-blue-500 to-blue-600 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Loan Categories
        </h1>

        {/* Loan Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleCategorySelect(category.id)}
            >
              <div className="p-6">
                {/* Category Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h2>

                {/* Subcategories */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Subcategories:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {category.subcategories.map((subcategory, index) => (
                      <li key={index}>{subcategory}</li>
                    ))}
                  </ul>
                </div>

                {/* Maximum Loan */}
                <p className="text-gray-700">
                  <strong>Maximum Loan:</strong> {category.maxLoan}
                </p>

                {/* Loan Period */}
                <p className="text-gray-700">
                  <strong>Loan Period:</strong> {category.loanPeriod}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanCategory;
