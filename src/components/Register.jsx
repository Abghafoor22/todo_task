
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { useForm } from "react-hook-form";
const Register = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()


  const submit = (data) => {
    if (!data.name || !data.email || !data.password) {
      alert("Please enter your details");
      return;
    }
    if (data.password.length < 6) {
      alert("Password should be atleast 6 characters");
      return;
    }
    setUsers([...users, data]);
    localStorage.setItem("users", JSON.stringify([...users, data]));
    console.log(users);
    navigate("/login");
  };
  

  return (
    <div className="flex items-center justify-center min-h-[90vh] ">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Create Account
          </h2>
          <p className="text-gray-300">Join our community</p>
        </div>

        <form onSubmit={handleSubmit(submit)} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                {...register("name", { required: true })}
                className="w-full pl-12 pr-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              />
              <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                {...register("email", { required: true })}
                className="w-full pl-12 pr-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              />
              <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full pl-12 pr-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              />
              <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg hover:bg-gradient-to-br transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-indigo-300"
          >
            Create Account
          </button>
        </form>

        <div className="text-center text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-white hover:text-gray-200 transition-all duration-200 border-b border-transparent hover:border-gray-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
