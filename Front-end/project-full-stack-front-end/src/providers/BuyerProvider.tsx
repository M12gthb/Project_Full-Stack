import { ReactNode, createContext } from "react";

interface RegisterProviderProps {
  children: ReactNode;
}

interface BuyerContextValues {}

export const BuyerContext = createContext<BuyerContextValues>(
  {} as BuyerContextValues
);

export const BuyerProvider = ({ children }: RegisterProviderProps) => {
  return <BuyerContext.Provider value={{}}>{children}</BuyerContext.Provider>;
};
