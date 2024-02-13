import { combineReducers, createStore } from "redux";
import loginReducer from "../reducers/loginReducer";
import productsReducers from "../reducers/productsReducers";
import { saveDataLocal } from "../../helpers/LocalStorage";

const reducers = combineReducers({
  loginStore: loginReducer,
  productsStore: productsReducers,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveDataLocal({
    productos: store.getState().productsStore,
  });
});
