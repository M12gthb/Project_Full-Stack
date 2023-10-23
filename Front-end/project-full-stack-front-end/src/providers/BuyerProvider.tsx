import { ReactNode, createContext, useState } from "react";
import { IAnouncement, IUsers } from "../interfaces/interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface RegisterProviderProps {
  children: ReactNode;
}

interface BuyerContextValues {
  user: IUsers | undefined;
  anouncement: IAnouncement[] | undefined;
  getUserInfo: (id: string | null) => Promise<void>;
}

export const BuyerContext = createContext<BuyerContextValues>(
  {} as BuyerContextValues
);

export const BuyerProvider = ({ children }: RegisterProviderProps) => {
  const [user, setUser] = useState<IUsers | undefined>();
  const [anouncement, setanouncement] = useState<IAnouncement[] | undefined>(
    []
  );
  const navigate = useNavigate();

  const getUserInfo = async (id: string | null): Promise<void> => {
    try {
      if (id) {
        const response = await api.get(`/users/${id}`);
        const anouncementData = await api.get(`/anouncements`);
        setUser(response.data);
        setanouncement(anouncementData.data);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BuyerContext.Provider value={{ getUserInfo, user, anouncement }}>
      {children}
    </BuyerContext.Provider>
  );
};
