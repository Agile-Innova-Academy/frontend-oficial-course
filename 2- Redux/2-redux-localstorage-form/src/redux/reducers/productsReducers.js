import { typesProducts } from "../types/types";

const initialState = {
  products: [],
};

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesProducts.add:
      return {
        products: [...state.products, action.payload],
      };
    case typesProducts.delete:
      return {
        products: state.products.filter(p => p.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productsReducers;
