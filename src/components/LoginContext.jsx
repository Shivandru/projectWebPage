import React from "react";
import { createContext, useState } from "react";
export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  return (
    <>
      <AuthContext.Provider
        value={{ login, setLogin, userDetails, setUserDetails }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
