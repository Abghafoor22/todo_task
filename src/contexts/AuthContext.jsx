import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const stored = localStorage.getItem("isLoggedIn");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    setIsLoggedIn(storedIsLoggedIn);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   localStorage.setItem("isLoggedIn", JSON.stringify(false));
  // };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login,  }}>
      {children}
    </AuthContext.Provider>
  );
};
