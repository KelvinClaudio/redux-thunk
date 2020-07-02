import React from "react";
import { Provider } from "react-redux";
import counterStore from "./store/CounterStore";
import Counter from "./components/Counter";

const App = () => {
   return (
      <Provider store={counterStore}>
         <Counter />
      </Provider>
   );
};

export default App;
