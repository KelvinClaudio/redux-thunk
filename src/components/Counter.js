import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, minus } from "../actionCreators/ActionCreators";

// const mapStateToProps = state => {
//    return {
//       count: state.count,
//    };
// };

const Counter = () => {
   const count = useSelector(state => state.count);
   const dataFetch = useSelector(state => state.data);
   const dispatch = useDispatch();

   useEffect(() => {
      const data = async () => {
         await console.log(dataFetch);
      };
      data();
   }, [dataFetch]);

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
         <p>Tunggu 5 detik</p>
         <p>Hasil fetch keluar di console</p>
         <div style={{ display: "flex", margin: "10px" }}>
            <button onClick={() => dispatch(minus())}>MINUS</button>
            <button onClick={() => dispatch(add())}>ADD</button>
         </div>
      </div>
   );
};

export default Counter;
