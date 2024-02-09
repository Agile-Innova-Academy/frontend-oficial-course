import { combineReducers, createStore } from "redux";
import CounterReducers from "../reducers/CounterReducers";
import ProductoReducers from "../reducers/ProductoReducers";

const reducers = combineReducers({
  counterReducers: CounterReducers,
  producto: ProductoReducers,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
