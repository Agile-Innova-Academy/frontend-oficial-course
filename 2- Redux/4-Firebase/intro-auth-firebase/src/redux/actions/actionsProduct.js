import { addDoc, collection, getDocs } from "firebase/firestore";
import { typesProducts } from "../types/types";
import { dataBase } from "../../firebase/firebaseConfig";
// ------------------Listar---------------------
export const actionListproductAsyn = () => {
  const pro = [];
  return async (dispatch) => {
    const productosListar = await getDocs(collection(dataBase, "Products"));
    console.log("respuesta", productosListar);
    productosListar.forEach((p) => {
      pro.push({
        ...p.data(),
      });
    });
    dispatch(actionListproductSyn(pro));
  };
};

export const actionListproductSyn = (payload) => {
  return {
    type: typesProducts.list,
    payload,
  };
};
// ------------------Agregar---------------------
export const actionAddproductAsyn = (payload) => {
  return async (dispatch) => {
    await addDoc(collection(dataBase, "Products"), payload)
      .then((resp) => {
        dispatch(actionAddproductSyn(payload));
        dispatch(actionListproductAsyn());
      })
      .catch((e) => {
        console.error("Error adding document: ", e);
      });
  };
};
export const actionAddproductSyn = (payload) => {
  return {
    type: typesProducts.add,
    payload,
  };
};

// ---------------------------------------
export const actionEditProductSyn = (payload) => {
  return {
    type: typesProducts.edit,
    payload,
  };
};

// ---------------------------------------

export const actionDeleteProductSyn = (payload) => {
  return {
    type: typesProducts.delete,
    payload,
  };
};
