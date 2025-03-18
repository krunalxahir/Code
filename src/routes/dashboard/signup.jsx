import React from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-blue-500 text-3xl font-bold flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a4 4 0 00-4 4v1H5a3 3 0 00-3 3v5a3 3 0 003 3h10a3 3 0 003-3v-5a3 3 0 00-3-3h-1V6a4 4 0 00-4-4zM8 6a2 2 0 014 0v1H8V6z" />
            </svg>
            UCL CSC
          </span>
        </div>

        {/* Title */}
        <h2 className="text-white text-xl font-semibold text-center mb-6">
          Sign Up
        </h2>

        {/* Form Section */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          {/* Dropdown */}
          <select className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
            <option>Choose your plan</option>
            <option>Retailer ID - ₹2999</option>
            <option>Distributor ID - ₹14999</option>
          </select>

          {/* Terms & Conditions */}
          <div className="flex items-center text-gray-400 text-sm">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree">
              I agree to the <span className="text-blue-500">terms and conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Pay & Register
          </button>

          {/* Login Link */}
          <p
            className="text-center text-blue-500 text-sm mt-3 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            I Already Have a Membership Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;