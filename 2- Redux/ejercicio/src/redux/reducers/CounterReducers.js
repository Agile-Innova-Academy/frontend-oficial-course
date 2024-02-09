import { typeCounter } from "../types/typesCounters";

const initialState ={
    count: 0
}
const CounterReducers = (state = initialState, action) => {
 switch (action.type) {
   case typeCounter.rest:
     return { count: action.payload };

   case typeCounter.increment:
     return { count: state.count + action.payload };

   case typeCounter.decrement:
    return { count: state.count - action.payload };
    
   default:
     return state;
 }
}

export default CounterReducers
