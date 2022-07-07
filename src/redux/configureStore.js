import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
//import { Reduceer, initialState } from "./reducer";

import { Staffs } from "./staffs";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
