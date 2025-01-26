import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for backend API calls

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const [ifRegistrationSuccess, setIfRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle Form Submission
  const onSubmit = async (data) => {
    setLoading(true);
    const image = data.profileImage[0]; // Get the uploaded image file

    try {
      // Step 1: Create a FormData object to send files and form data
      const formData = new FormData();
      formData.append("username", data.username); // Append username
      formData.append("email", data.email); // Append email
      formData.append("password", data.password); // Append password
      formData.append("cnic", data.cnic); // Append CNIC
      formData.append("phoneNumber", data.phoneNumber); // Append phone number
      formData.append("address", data.address); // Append address
      formData.append("profileImage", image); // Append profile image

      // Step 2: Make a POST request to your Express.js backend
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/register", // Replace with your backend register endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        }
      );

      console.log("Registration Successful:", response.data);

      // Step 3: Handle successful registration
      setRegistrationStatus(true);
      setIfRegistrationSuccess(true);

      // Step 4: Save the token to localStorage (optional)
      localStorage.setItem("token", response.data.token);

      // Step 5: Redirect to the home page or dashboard
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.log(error);

      // Step 6: Handle registration failure
      setRegistrationStatus(true);
      setIfRegistrationSuccess(false);

      // Step 7: Display error message to the user
      setErrorMessage(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
      reset(); // Reset the form
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-green-700 to-green-700 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-800 to-green-800 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Create an Account</h2>
          <p className="text-sm text-blue-200 mt-2">Join us to get started</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className={`mt-1 block w-full p-3 border ${
                  errors.username ? "border-green-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                {...register("username", {
                  required: "Username is required",
                })}
              />
              {errors.username && (
                <span className="text-sm text-green-500 mt-1">
                  {errors.username.message}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`mt-1 block w-full p-3 border ${
                  errors.email ? "border-green-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-sm text-green-500 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className={`mt-1 block w-full p-3 border ${
                  errors.password ? "border-green-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <span className="text-sm text-green-500 mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* CNIC Input */}
            <div>
              <label
                htmlFor="cnic"
                className="block text-sm font-medium text-gray-700"
              >
                CNIC
              </label>
              <input
                type="text"
                id="cnic"
                placeholder="Enter your CNIC (e.g., 123451234567)"
                className={`mt-1 block w-full p-3 border ${
                  errors.cnic ? "border-green-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                {...register("cnic", {
                  required: "CNIC is required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Please enter a valid 11-digit CNIC number",
                  },
                })}
              />
              {errors.cnic && (
                <span className="text-sm text-green-500 mt-1">
                  {errors.cnic.message}
                </span>
              )}
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter your phone number (e.g., 03001234567)"
                className={`mt-1 block w-full p-3 border ${
                  errors.phoneNumber ? "border-green-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                {...register("phoneNumber", {
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Please enter a valid 11-digit phone number",
                  },
                })}
              />
              {errors.phoneNumber && (
                <span className="text-sm text-green-500 mt-1">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            {/* Address Input */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className={`mt-1 block w-full p-3 border ${
                  errors.address ? "border-green-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                {...register("address")}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:bg-blue-400"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                </div>
              ) : (
                "Register"
              )}
            </button>

            {/* Registration Status */}
            {registrationStatus && (
              <div className="text-center">
                {ifRegistrationSuccess ? (
                  <span className="text-sm text-green-500 font-semibold">
                    Registration Successful!
                  </span>
                ) : (
                  <span className="text-sm text-red-500 font-semibold">
                    Registration Failed: {errorMessage}
                  </span>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
