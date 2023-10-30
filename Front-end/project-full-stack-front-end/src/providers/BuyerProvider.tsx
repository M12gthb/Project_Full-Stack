import { ReactNode, createContext, useState } from "react";
import {
  IAnouncement,
  IAnouncementWithUser,
  IUsers,
} from "../interfaces/interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface RegisterProviderProps {
  children: ReactNode;
}

interface BuyerContextValues {
  user: IUsers | undefined;
  getUserInfo: (id: string | null) => Promise<void>;
  cards: IAnouncementWithUser[];
}

export const BuyerContext = createContext<BuyerContextValues>(
  {} as BuyerContextValues
);

export const BuyerProvider = ({ children }: RegisterProviderProps) => {
  const [user, setUser] = useState<IUsers | undefined>();
  const [cards, setCards] = useState<IAnouncementWithUser[]>([]);
  const navigate = useNavigate();

  const getUserInfo = async (id: string | null): Promise<void> => {
    try {
      if (id) {
        const response = await api.get(`/users/${id}`);
        const anouncementData = await api.get(`/anouncements`);
        setUser(response.data);
        const promises = anouncementData.data.map(
          async (element: IAnouncement) => {
            const userResponse = await api.get(`/users/${element.userId}`);
            const user: IUsers = userResponse.data;
            return { ...element, user };
          }
        );

        const anouncementsWithUsers = await Promise.all(promises);

        setCards(anouncementsWithUsers);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BuyerContext.Provider value={{ getUserInfo, user, cards }}>
      {children}
    </BuyerContext.Provider>
  );
};
