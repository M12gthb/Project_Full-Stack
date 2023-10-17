import { ReactNode, createContext } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token, id, type } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("motors:token", token);
      localStorage.setItem("motors:UserId", id);

      if (type == "anunciante") {
        navigate("Advertiser");
      } else {
        navigate("Buyer");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
