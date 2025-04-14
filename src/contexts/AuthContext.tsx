
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface UserData {
  email?: string;
  phone?: string;
  name?: string;
  isEmployee?: boolean;
}

interface AuthContextType {
  isLoggedIn: boolean;
  userData: UserData | null;
  login: (data?: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  userData: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Initialize auth state from localStorage if available
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedState = localStorage.getItem("isLoggedIn");
    return savedState === "true";
  });
  
  const [userData, setUserData] = useState<UserData | null>(() => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : null;
  });

  // Login function
  const login = (data?: UserData) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    
    if (data) {
      setUserData(data);
      localStorage.setItem("userData", JSON.stringify(data));
    }
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
