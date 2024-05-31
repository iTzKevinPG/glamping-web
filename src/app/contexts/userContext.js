import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const profile = (userData) => {
    setUserData(userData);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, userData, profile }}>
      {children}
    </UserContext.Provider>
  );
};
