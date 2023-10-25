import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { RegisterData } from "../components/Forms/RegisterForm/validator";
import { api } from "../services/api";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextValues {
  singUp: (data: RegisterData) => void;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const RegisterContext = createContext<RegisterContextValues>(
  {} as RegisterContextValues
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const singUp = async (data: RegisterData) => {
    const { cep, state, city, street, number, complement, ...rest } = data;

    const convert = Number(number);

    const addrees = { cep, state, city, street, number: convert, complement };

    const newData = { ...rest, address: addrees };

    try {
      await api.post("/users", newData);
      setIsOpenModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RegisterContext.Provider value={{ singUp, isOpenModal, setIsOpenModal }}>
      {children}
    </RegisterContext.Provider>
  );
};
