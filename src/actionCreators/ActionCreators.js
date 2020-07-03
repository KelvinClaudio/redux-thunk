import * as ActionTypes from "../actionTypes/ActionTypes";

const ID = "96c1fdce";
const KEY = "ae54e37bb318758259796c9a7199d9f2";
const search = "cake";

export const add = () => async dispatch => {
   const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}&from=0&to=20`
   );
   const data = await response.json();
   dispatch({
      type: ActionTypes.STORE_DATA,
      payload: data.hits,
   });
   setTimeout(() => {
      dispatch({ type: ActionTypes.ADD });
   }, 5000);
};
export const minus = () => async dispatch => {
   const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}&from=0&to=20`
   );
   const data = await response.json();
   dispatch({
      type: ActionTypes.STORE_DATA,
      payload: data.hits,
   });
   setTimeout(() => {
      dispatch({ type: ActionTypes.MINUS });
   }, 5000);
};
