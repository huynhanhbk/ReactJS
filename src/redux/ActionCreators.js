import * as ActionTypes from "./ActionTypes";
//import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

//Dishes: lay cac mon an tu bat cu noi nao ban muon
// fetchDishes la 1 thunk boi vi no dang tra ve 1 ham chua 1 ham ben trong o day
// ham nay co chuc nang goi hoac gui 1 so hanh dong
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
};

//nos chi tra ve 1 type, type la 1 hanh dong, no khong co them bat cu du lieu nao
// duoc lien ket voi no.
//No thong bao cho ai do biet rang cac dishes bat dau dc tai. Vi vay ban can phai
// doi cac mon an duoc tai.
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
  // action nay duoc khai bao o reducer dishes
});

//Ham nay nhan errmess la 1 tham so, tra ve 1 doi tuong hanh dong, no cung tra ve 1 payload
// duoi dang thong bao loi. Trong truong hop n ay, thong bao loi se la 1 chuoi
export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

//comment
export const fetchComments = () => (dispatch) => {
  //dispatch(dishesLoading(true));
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

//promos
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));
  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
