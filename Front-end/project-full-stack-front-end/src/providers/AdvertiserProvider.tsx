import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { IAnouncement, IUsers } from "../interfaces/interfaces";

interface AdvertiserProviderProps {
  children: ReactNode;
}

interface AdvertiserContextValues {
  getUser: () => void;
  user: IUsers | undefined;
  anouncements: IAnouncement[] | [];
  setAnouncements: React.Dispatch<React.SetStateAction<IAnouncement[]>>;
}

export const AdvertiserContext = createContext<AdvertiserContextValues>(
  {} as AdvertiserContextValues
);

export const AdvertiserProvider = ({ children }: AdvertiserProviderProps) => {
  const [user, setUser] = useState<IUsers>();
  const [anouncements, setAnouncements] = useState<IAnouncement[] | []>([]);
  const getUser = async () => {
    const userId = localStorage.getItem("motors:UserId");
    const response = await api.get(`/users/${userId}`);
    const responseAnouncement = await api.get(`/anouncements/user/${userId}`);
    setUser(response.data);
    setAnouncements(responseAnouncement.data);
  };

  return (
    <AdvertiserContext.Provider
      value={{ user, getUser, anouncements, setAnouncements }}
    >
      {children}
    </AdvertiserContext.Provider>
  );
};
