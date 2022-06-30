import { createStore } from "redux";
import { Reduceer, initialState } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(Reduceer, initialState);
  return store;
};
