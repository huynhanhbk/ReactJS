import { createStore } from "redux"; //cho phep tao Redux store
import { Reduceer, initialState } from "./reducer";

//ConfigureStore la bat buoc, la cach dinh cau hinh store cua minh
export const ConfigureStore = () => {
  const store = createStore(
    Reduceer, // reducer
    initialState // our initialState
  );

  return store;
};
