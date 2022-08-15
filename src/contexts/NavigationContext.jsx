import { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const values = {};

  return <NavigationContext.Provider value={values}>{children}</NavigationContext.Provider>;
};
