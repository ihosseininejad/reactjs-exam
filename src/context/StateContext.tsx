import React, { createContext, useContext, useReducer } from "react";
import { StateProviderProps, StateContextType } from "../types/context/state-context.types";

export const StateContext = createContext<StateContextType | null>(null);

export const StateProvider: React.FC<StateProviderProps> = ({ initialState, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = (): StateContextType => useContext(StateContext)!;
