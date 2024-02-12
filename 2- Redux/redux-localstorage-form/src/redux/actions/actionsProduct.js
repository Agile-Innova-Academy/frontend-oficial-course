import { typesProducts } from "../types/types"

export const actionAddproductSyn = (payload)=>{
return {
    type: typesProducts.add,
    payload
}
}

export const actionDeleteProductSyn = (payload) => {
  return {
    type: typesProducts.delete,
    payload,
  };
};