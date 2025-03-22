
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const Register = () => {
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Create a navigate instance

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please enter your details");
      return;
    }
    if (password.length < 6) {
      alert("Password should be atleast 6 characters");
      return;
    }
    const data = {
      username: username,
      email: email,
      password: password,
    };

    setUsers([...users, data]);
    localStorage.setItem("users", JSON.stringify([...users, data]));
    console.log(users);

    navigate("/login");
  };

  
  return (
    <div className=" flex items-center justify-center px-4 min-h-screen">
      <div className="w-full max-w-md bg-[#4b4b4b] rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-black">
          Register
        </h2>
        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="text-center text-red-600">
          Already have an account?{" "}
          <Link to="/login" className="semi-bold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
