import React from "react";
import jwt_decode from "jwt-decode";
import authStorage from "../auth/authStorage";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwt_decode(token));
  };

  const login = (token) => {
    const curUser = jwt_decode(token);
    setUser(curUser);
    authStorage.storeToken(token);
  };

  const logOut = () => {
    setUser(null);
    authStorage.deleteToken();
  };

  React.useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be rendered within the AuthProvider");
  }

  return context;
}
