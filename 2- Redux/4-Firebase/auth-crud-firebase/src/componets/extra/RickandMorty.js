import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { dataBase } from "../../firebase/firebaseConfig";
const urlR = "https://rickandmortyapi.com/api/character/";
const RickandMorty = () => {
  // --Cargando la Api
  const cargarApi = async (url) => {
    const resp = await fetch(urlR);
    const data = await resp.json();
    console.log(data?.results);
    // enviarFirebase(data?.results);
  };
  cargarApi();

  // --- Asignar la api a Firebase
  const enviarFirebase = (datos) => {
    datos.forEach((element) => {
      addDoc(collection(dataBase, "rickandMorty"), element)
        .then((resp) => console.log("datos Agregados"))
        .catch((err) => console.warn(err));
    });
  };

  return <div>RickandMorty</div>;
};

export default RickandMorty;
