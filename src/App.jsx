import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
      </div>
      <Companies />
    </div>
  );
}

export default App;
