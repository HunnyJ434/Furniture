import './App.css';
import Nav from './Components/Nav'
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import Products from "./Components/Products"
function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <Products />
    </div>
  );
}

export default App;
