import { createStore } from "redux";
import CounterReducer from "../reducer/CounterReducer";

const counterStore = createStore(CounterReducer);

export default counterStore;
