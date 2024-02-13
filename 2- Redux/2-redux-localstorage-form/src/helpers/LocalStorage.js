export const saveDataLocal = (products) => {
  console.log(products);
  localStorage.setItem("saveproducts", JSON.stringify(products));
};
