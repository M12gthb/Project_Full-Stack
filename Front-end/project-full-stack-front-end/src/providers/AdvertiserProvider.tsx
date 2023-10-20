import { ReactNode, createContext } from "react";

interface AdvertiserProviderProps {
  children: ReactNode;
}

interface AdvertiserContextValues {}

export const AdvertiserContext = createContext<AdvertiserContextValues>(
  {} as AdvertiserContextValues
);

export const AdvertiserProvider = ({ children }: AdvertiserProviderProps) => {
  return (
    <AdvertiserContext.Provider value={{}}>
      {children}
    </AdvertiserContext.Provider>
  );
};
