import Cards from "../componets/Cards";
import Carrusel from "../componets/Carrusel";
import Nav from "../componets/Nav";
import Footer from "../componets/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Nav />
      <Carrusel />
      <Cards name="UNo" />
      <Cards name="Dos" />
      <Cards name="Tres" />
      <h1>Hola chicos! Bienvenidos a React</h1>
      <Footer />
    </>
  );
}

export default App;
