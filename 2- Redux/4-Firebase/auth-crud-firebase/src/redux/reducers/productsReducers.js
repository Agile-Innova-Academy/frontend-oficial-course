import { typesProducts } from "../types/types";

const initialState = {
  products: [],
};

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesProducts.list:
      return {
        products: [...action.payload],
      };

    case typesProducts.add:
      return {
        products: [...state.products, action.payload],
      };
    case typesProducts.delete:
      return {
        products: state.products.filter((p) => p.id !== action.payload),
      };
    case typesProducts.search:
      return {
        products: action.payload,
      };

    case typesProducts.edit:
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        const updatedProduct = { ...state.products[index] };
        for (const property in action.payload) {
          if (updatedProduct.hasOwnProperty(property)) {
            updatedProduct[property] = action.payload[property];
          }
        }
        return {
          ...state,
          products: [
            ...state.products.slice(0, index),
            updatedProduct,
            ...state.products.slice(index + 1),
          ],
        };
      } else {
        console.warn(
          `Product with ID ${action.payload.id} not found for editing.`
        );
        return state;
      }

    default:
      return state;
  }
};

export default productsReducers;
