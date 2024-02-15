import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import loginReducer from "../reducers/loginReducer";
import productsReducers from "../reducers/productsReducers";
import { thunk } from "redux-thunk";

// Configuracion de los middleware para manejar acciones asíncronas con Redux-Thunk
const middleware = [thunk];

// Ojo: solo para el entorno de desarrollo ye sto me permite ver a la extensión de Redux en la consola
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;


const reducers = combineReducers({
  loginStore: loginReducer,
  productsStore: productsReducers,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
