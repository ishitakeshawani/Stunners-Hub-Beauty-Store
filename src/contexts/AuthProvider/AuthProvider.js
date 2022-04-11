import { React, useContext, createContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
