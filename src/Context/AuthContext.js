import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    // Simulate login process - check hardcoded credentials
    if (username === 'admin' && password === 'password123') {
      setAuth('mock-token'); // Set a mock token for authentication
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setAuth(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
