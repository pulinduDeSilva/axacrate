import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Mockups from "./Components/MockUps/Mockup";
import style from "./App.module.css";


gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    // @ts-ignore
    import('./assets/cursor.js').then(() => {
      console.log('Cursor script loaded');
    });
  }, []);
  return (
    <>
      <div className={style["wrapper"]}>
        <canvas id="fluid" className={style["bg-cursor"]}></canvas>
        <div className={style["head-pos"]}><Header /></div>
        <div>
          <Home />
        </div>
        <div >
          <About />
        </div>
      </div>
      <div>
        <Mockups />
      </div>
      <div >
        <Team />
      </div>
      <div >
        <Contact />
      </div>
    </>

  );
}

export default App;
