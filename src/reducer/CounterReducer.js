import * as ActionTypes from "../actionTypes/ActionTypes";

const initialState = {
   count: 0,
};

export default function counterReducer(state = initialState, action) {
   switch (action.type) {
      case ActionTypes.ADD:
         return { count: state.count + 1 };
      case ActionTypes.MINUS:
         return { count: state.count - 1 };
      default:
         return state;
   }
}
