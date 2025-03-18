import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedRememberMe) {
      setUsername(savedUsername || "");
      setPassword(savedPassword || "");
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }

    onLogin();
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-sm">
        {/* Logo */}
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

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-6">Sign In</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="text-gray-400 text-sm flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign In
          </button>

          <p
            className="text-center text-blue-400 text-sm mt-3 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Create Your Account
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;