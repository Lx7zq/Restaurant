import { useState, useContext, createContext, useEffect } from "react";
import AuthService from "../services/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser);
  const login = (user) => setUser(user);
  const logout = () => {
    AuthService.logout();
    setUser(null); // ทำให้ user กลับเป็น null
  };

  function getUser() {
    //เอาไว้เช็คว่ามีข้อมูลของ user อยู่มั้ย
    const temp = localStorage.getItem("user");
    const savedUser = JSON.parse(temp);
    return savedUser || null;
  }

  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem("user", temp);
  }, [user]); //เอาไว้สังเกตว่ามีไรเปลี่ยนแปลงมั้ย
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
