//import { DISHES } from "../shared/dishes";
import * as ActionTypes from "./ActionTypes";

//trach nhiem cua dishes reducer la giai thich y nghia cua 3 loai hanh dong: add, loading, error
//ban dau thuoc tinh isLoading la true vi dishes=[], co nghia la ban can phai tai thong tin mon an
//o dau do truoc khi thong tin chi tiet ve mon an co san trong state cua ban
export const Dishes = (
  state = {
    isLoading: true,
    errMess: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };
    //...state co nghia la state nay, rang bat ke state la gi, toi se chi co cung 1 state va sau do co the them
    //no se lay gia tri hien tai cua state va sau do la bat ki gia tri nao khac ma ta chuyen vao sau nay se duoc ap dung nhu cac
    // sua doi doi voi state. Vi vay ban than state se khong bi mutated (bien doi)
    //Ngan gon hon: Ta tao 1 state moi tu state ban dau, sau do thuc hien thay doi doi voi doi tuong do va sau do tra lai doi tuong do

    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };
    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        dishes: [],
      };
    default:
      return state;
  }
};
