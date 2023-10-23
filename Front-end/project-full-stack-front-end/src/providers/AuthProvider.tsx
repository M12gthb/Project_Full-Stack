import { ReactNode, createContext } from "react";
import { LoginData } from "../components/Forms/LoginForm/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

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
      localStorage.setItem("motors:Type", type);

      if (type == "anunciante") {
        navigate("Advertiser");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
