import React, { useState } from "react";

const LoanCal = () => {
  const [loanAmount, setLoanAmount] = useState(0); // Loan amount in dollars
  const [interestRate, setInterestRate] = useState(0); // Annual interest rate
  const [loanTenure, setLoanTenure] = useState(0); // Loan tenure in months
  const [monthlyPayment, setMonthlyPayment] = useState(0); // Calculated monthly payment
  const [totalInterest, setTotalInterest] = useState(0); // Total interest paid

  // Function to calculate the monthly payment and total interest
  const calculateLoan = () => {
    const principal = parseFloat(loanAmount); // Loan amount
    const annualInterestRate = parseFloat(interestRate) / 100; // Annual interest rate in decimal
    const monthlyInterestRate = annualInterestRate / 12; // Monthly interest rate
    const numberOfPayments = parseFloat(loanTenure); // Loan tenure in months

    if (principal > 0 && monthlyInterestRate > 0 && numberOfPayments > 0) {
      // Formula for monthly payment: M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
      const monthlyPayment =
        (principal *
          (monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      const totalInterestPaid = monthlyPayment * numberOfPayments - principal;

      setMonthlyPayment(monthlyPayment.toFixed(2)); // Round to 2 decimal places
      setTotalInterest(totalInterestPaid.toFixed(2)); // Round to 2 decimal places
    } else {
      setMonthlyPayment(0);
      setTotalInterest(0);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Loan Calculator
        </h1>

        {/* Loan Amount Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Amount ($)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Interest Rate Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter annual interest rate"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Loan Tenure Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Tenure (Months)
          </label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            placeholder="Enter loan tenure in months"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateLoan}
          className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Calculate
        </button>

        {/* Results Section */}
        {monthlyPayment > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Loan Details
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Monthly Payment:</span> $
                {monthlyPayment}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Total Interest Paid:</span> $
                {totalInterest}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCal;
