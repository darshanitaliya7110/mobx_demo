"use client";

import { createContext, useContext } from "react";
import { counterStore } from "./counterStore";

// Combine all stores in one object
const stores = {
  counterStore,
};

// Create MobXProviderContext with default values
const MobXProviderContext = createContext(stores);

export const MobXProvider = ({ children }) => {
  return (
    <MobXProviderContext.Provider value={stores}>
      {children}
    </MobXProviderContext.Provider>
  );
};

// We define the useStores hook to access the stores in components
export const useStores = () => {
  return useContext(MobXProviderContext);
};
