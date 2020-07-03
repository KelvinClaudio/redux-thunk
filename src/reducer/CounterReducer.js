import * as ActionTypes from "../actionTypes/ActionTypes";

const initialState = {
   count: 0,
   data: [],
};

export default function counterReducer(state = initialState, action) {
   switch (action.type) {
      case ActionTypes.ADD:
         return { ...state, count: state.count + 1 };
      case ActionTypes.MINUS:
         return { ...state, count: state.count - 1 };
      case ActionTypes.STORE_DATA:
         return { ...state, data: action.payload };
      default:
         return state;
   }
}
