import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for backend API calls

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Check if the user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      try {
        // TODO: Replace with your backend API call to check if the user is authenticated
        // Example: const response = await axios.get("/api/auth/check");
        // if (response.data.user) {
        //   navigate("/");
        // }
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle Form Submission
  const handleLogin = async (data) => {
    setLoading(true);
    try {
      // TODO: Replace with your backend API call to log in the user
      const response = await axios.post(
        "https://hackathon-server-boilerplate.vercel.app/api/auth//login",
        {
          email: data.email,
          password: data.password,
        }
      );
      console.log("Login Successful:", response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700  to-green-700 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-800 to-green-800 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Welcome Back!</h2>
          <p className="text-sm text-blue-200 mt-2">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
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
                {...register("email", { requigreen: true })}
              />
              {errors.email && (
                <span className="text-sm text-green-500 mt-1">
                  Email is requigreen
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
                {...register("password", { requigreen: true })}
              />
              {errors.password && (
                <span className="text-sm text-green-500 mt-1">
                  Password is requigreen
                </span>
              )}
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
                "Login"
              )}
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
