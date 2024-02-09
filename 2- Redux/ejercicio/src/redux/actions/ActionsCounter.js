import { typeCounter } from "../types/typesCounters"


export const actionIncrementSync = (payload)=>{
    return {
        type:typeCounter.increment,
        payload
    }
}

export const actionDecrementSync = (payload) => {
  return {
    type: typeCounter.decrement,
    payload,
  };
};

export const actionResetSync = (payload) => {
  return {
    type: typeCounter.rest,
    payload,
  };
};