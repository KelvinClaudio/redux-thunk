import React from "react";
import { connect } from "react-redux";
import { add, minus } from "../actionCreators/ActionCreators";

const mapStateToProps = state => {
   return {
      count: state.count,
   };
};
const mapDispatchToProps = dispatch => {
   return {
      dispatchAction: action => dispatch(action),
   };
};
const Counter = ({ count, dispatchAction }) => {
   const style = {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "black",
      color: "#fff",
      flexDirection: "column",
   };
   return (
      <div style={style}>
         <h1>Counter : {count}</h1>
         <div style={{ display: "flex", margin: "10px" }}>
            <button onClick={() => dispatchAction(minus())}>MINUS</button>
            <button onClick={() => dispatchAction(add())}>ADD</button>
         </div>
      </div>
   );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
