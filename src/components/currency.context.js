import { createContext, useContext } from "react";

const currencyContext = createContext();

export const CurrencyProvider = currencyContext.Provider;

export const useCurrency = () => {
  const context = useContext(currencyContext);

	if (context === undefined) {
    throw new Error("The useMenu hook must be used within a MenuProvider");
  }

  return context;
};
