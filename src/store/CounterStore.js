import { createStore, applyMiddleware } from "redux";
import CounterReducer from "../reducer/CounterReducer";
import thunk from "redux-thunk";

const counterStore = createStore(CounterReducer, applyMiddleware(thunk));

export default counterStore;
