import * as ActionTypes from "../actionTypes/ActionTypes";

const ID = "96c1fdce";
const KEY = "ae54e37bb318758259796c9a7199d9f2";
const search = "cake";

export const add = () => async dispatch => {
   try {
      const response = await fetch(
         `https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}&from=0&to=20`
      );
      const data = await response.json();

      setTimeout(() => {
         dispatch({
            type: ActionTypes.STORE_DATA,
            payload: data.hits,
         });
         dispatch({ type: ActionTypes.ADD });
      }, 5000);
   } catch (error) {
      console.log(error);
   }
};

export const minus = () => async dispatch => {
   try {
      const response = await fetch(
         `https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}&from=0&to=20`
      );
      const data = await response.json();
      setTimeout(() => {
         dispatch({
            type: ActionTypes.STORE_DATA,
            payload: data.hits,
         });
         dispatch({ type: ActionTypes.MINUS });
      }, 5000);
   } catch (error) {
      console.log(error);
   }
};
