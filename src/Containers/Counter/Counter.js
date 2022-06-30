import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { incrementCounter ,decrementCounter } from "../../redux/action/Counter.Action"

function Counter(props) {
    const C = useSelector (state => state.Counter)
    const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  return (
    <div className="container m-5 bg-dark ">
      <button onClick={() => handleIncrement()} className="p-2 m-3 btn-primary">Increment</button>
      <h1 className="text-white">{C.counter}</h1>
      <button onClick={() => handleDecrement()} className="p-2 m-3 btn-primary">Decrement</button>
    </div>
  );
}

export default Counter;