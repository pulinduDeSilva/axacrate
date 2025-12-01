import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import "../Home/Home.css";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);


function Home() {
  useGSAP(() => {
    const loadAnimation = gsap.timeline({ defaults: { ease: "power1.inout" } });

    loadAnimation.fromTo(".hero", { opacity: 0, y: 100, duration: 1 }, { opacity: 1, y: 0, duration: 1 });


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#fluid",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    tl.fromTo(".hero", { scale: 1, opacity: 1 }, { scale: 0.8, opacity: 0, duration: 1, ease: "power1.inout" });

  }, []);

  useEffect(() => {
    // @ts-ignore
    import('../../assets/cursor.js').then(() => {
      console.log('Cursor script loaded');
    });
  }, []);

  return (
    <>
      <section className="home-container">
        <div className="hero">
          <h1 id="top-hometext">AXACRATE</h1>
          <p>Track Inventory, detect unauthorized movement, and monitor warehouse zones instantly using RFID automation</p>
        </div>
      </section>
    </>
  );
}

export default Home;