import { DEPARTMENTS } from "../shared/staffs";
import { STAFFS } from "../shared/staffs";

export const initialState = {
  staffs: STAFFS,
  departments: DEPARTMENTS,
};

export const Reduceer = (state = initialState.action) => {
  return state;
};
