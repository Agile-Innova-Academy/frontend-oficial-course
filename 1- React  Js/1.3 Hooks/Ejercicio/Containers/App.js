import Counter from "../Components/Counter";
import CreateName from "../Components/CreateName";
import Welcome from "../Components/Welcome";
import { array } from "../helpers/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenidos Todos</h1>
        <CreateName />
        <Counter />
      </header>
      {array?.map((data) => (
        <Welcome name={data.nombre} />
      ))}
    </div>
  );
}

export default App;
