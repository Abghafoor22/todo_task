import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve registered users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists with matching email and password
    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // Set the boolean to true
      login();
      navigate("/"); // Redirect to the protected home route
    } else {
      setError("User not found. Please register first or check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] ">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="text-gray-300">Sign in to your account</p>
        </div>

        {error && (
          <div className="flex items-center justify-center space-x-2 text-red-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
              />
              <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
              />
              <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg hover:brightness-110 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-300"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-gray-300">
          New user?{" "}
          <Link
            to="/register"
            className="font-medium text-white hover:text-gray-200 transition-all duration-200 border-b border-transparent hover:border-gray-300"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
