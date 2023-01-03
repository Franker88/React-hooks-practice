import React, { createContext } from "react";
import { useChangeMode } from "../hooks/useChangeMode";

const AppContext = createContext();

const AppProvider = (props) => {
  const { mode, setMode } = useChangeMode();

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
