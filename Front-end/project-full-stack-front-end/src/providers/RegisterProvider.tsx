import { ReactNode, createContext } from "react";
import { RegisterData } from "../components/Forms/RegisterForm/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextValues {}

export const RegisterContext = createContext<RegisterContextValues>(
  {} as RegisterContextValues
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const navigate = useNavigate();
  const singUp = async (data: RegisterData) => {
    try {
      await api.post("/users", data);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <RegisterContext.Provider value={{ singUp }}>
      {children}
    </RegisterContext.Provider>
  );
};
