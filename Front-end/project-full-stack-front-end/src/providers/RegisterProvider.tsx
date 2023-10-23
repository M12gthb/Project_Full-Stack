import { ReactNode, createContext } from "react";
import { RegisterData } from "../components/Forms/RegisterForm/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextValues {
  singUp: (data: RegisterData) => void;
}

export const RegisterContext = createContext<RegisterContextValues>(
  {} as RegisterContextValues
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const navigate = useNavigate();
  const singUp = async (data: RegisterData) => {
    const { cep, state, city, street, number, complement, ...rest } = data;

    const convert = Number(number);

    const addrees = { cep, state, city, street, number: convert, complement };

    const newData = { ...rest, address: addrees };

    try {
      const response = await api.post("/users", newData);
      console.log(response.data);
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
