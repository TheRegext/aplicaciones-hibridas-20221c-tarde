import Contador from './components/Contador'

function App() {
  return (
    <div className="App">
      App
      <Contador increment={5} />
      <Contador increment={1} />
      <Contador increment={-1} />
      <Contador increment={10} />

    </div>
  );
}

export default App;
