import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Contains/Home";
import NavBarsC from "../Components/NavBarsC";
import MemorizaUseMemo from "../Contains/MemorizaUseMemo";
import CallbackHooks from "../Contains/CallbackHooks";
import Padre from "../Ejercicio Ind/Padre";
import Login from "../useContext/2-Components/Login";
import Logout from "../useContext/2-Components/Logout";


function App() {
  return (
    <BrowserRouter>
      <NavBarsC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks" element={<MemorizaUseMemo />} />
        <Route path="/calls" element={<CallbackHooks />} />
        <Route path="/ejemplo" element={<Padre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
