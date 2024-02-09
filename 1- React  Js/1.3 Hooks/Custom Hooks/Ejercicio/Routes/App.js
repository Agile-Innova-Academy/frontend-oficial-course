import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Registrar from "../Containers/Registrar";
import Listar from "../Containers/Listar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
// import Not from "../Components/Not";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Registrar />} />
        <Route path="/list" element={<Listar />} />
        {/* <Route path="*" element={<Not />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
