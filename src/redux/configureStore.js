import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Departments } from "./departments";
import { Staffs } from "./staffs";
import { StaffsSalary } from "./stafffsSalary";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      staffsSalary: StaffsSalary,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
