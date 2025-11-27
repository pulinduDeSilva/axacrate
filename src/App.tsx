import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team"
import "./App.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="head-pos"><Header></Header></div>
        <div><Home></Home></div>
      </div>
      <div><About></About></div>
      <div><Team></Team></div>
    </>
  );
}

export default App;
