import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDecrementSync,
  actionIncrementSync,
  actionResetSync,
} from "../redux/actions/ActionsCounter";

const Counter = () => {
  const { count } = useSelector((store) => store.counterReducers);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(actionIncrementSync(1))}>+1</Button>
      <Button onClick={() => dispatch(actionResetSync(0))}>0</Button>
      <Button onClick={() => dispatch(actionDecrementSync(1))}>-1</Button>
    </div>
  );
};

export default Counter;
