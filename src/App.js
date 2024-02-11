import './App.css';
import Navbar from "./components/Navbar.js";
import {Routes} from "react-router-dom";
import Home from "./routes/Home.js";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
