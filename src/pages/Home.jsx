import React from "react";

const Home = () => {
  // Loan categories data
  // TODO: Replace this static data with data fetched from your database
  const loanCategories = [
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

  // TODO: Add a function to fetch loan categories from your database
  // useEffect(() => {
  //   const fetchLoanCategories = async () => {
  //     const response = await fetch('/api/loan-categories');
  //     const data = await response.json();
  //     setLoanCategories(data);
  //   };
  //   fetchLoanCategories();
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-green-700">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-green-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Welcome to Saylani Microfinance
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Empowering lives through affordable and accessible loans.
          </p>
          <div className="space-x-4">
            <button
              className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              onClick={() => (window.location.href = "/ApplyLoan")}
            >
              Apply for a Loan
            </button>
            <button
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300"
              onClick={() => (window.location.href = "/LoanCategory")}
            >
              Explore Loan Categories
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Why Choose Saylani Microfinance?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Affordable Rates
            </h3>
            <p className="text-gray-600">
              Enjoy low-interest rates tailored to your financial needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Flexible Repayment
            </h3>
            <p className="text-gray-600">
              Choose repayment plans that suit your budget and timeline.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Quick Approval
            </h3>
            <p className="text-gray-600">
              Get your loan approved quickly with minimal documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Loan Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Explore Our Loan Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanCategories.map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Loan Content */}
              <div className="p-6">
                {/* Loan Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                  {loan.title}
                </h3>

                {/* Subcategories */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Subcategories:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {loan.subcategories.map((subcategory, index) => (
                      <li key={index} className="mb-1">
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Maximum Loan */}
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Maximum Loan:</span>{" "}
                  {loan.maxLoan}
                </p>

                {/* Loan Period */}
                <p className="text-gray-700">
                  <span className="font-semibold">Loan Period:</span>{" "}
                  {loan.loanPeriod}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-green-800 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-lg">
            &copy; 2023 Saylani Microfinance. All rights reserved.
          </p>
          <p className="text-sm mt-2">Designed with ❤️ by Your Team</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
