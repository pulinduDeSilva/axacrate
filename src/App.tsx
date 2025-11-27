import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import "./App.css";


gsap.registerPlugin(ScrollTrigger);

function App() {


  return (
    <div className="wrapper">
      <div className="head-pos"><Header/></div>
      <div>
        <Home/>
      </div>

      <div className="section">
        <About/>
      </div>

      <div className="section">
        <Team/>
      </div>
      <div className="section">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
