import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import style from "./Workflow.module.css";

function Workflow() {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "." + style["hero"],
          start: "top top",
          end: "+=50", // longer scroll distance
          pin: true,
          scrub: true,
          markers: true,
        },
      });
  
      tl.to("." + style["hero"], {
        scale: 5,
        z: 500,
        x: -100,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      tl.to("." + style["content-scroll1"], {
        scale: 2.5,
        y: 600,
        transformOrigin: "center center",
        ease: "power4.inOut"
      },"<");
    });

    return (
        <section>
            <div className={style["wrapper"]} >
                <div className={style["hero"]}>
                    
                </div>
                <div className={style.content}>
                    <div className={style["content-scroll1"]}></div>
                    <div className={style["content-scroll2"]}></div>
                    <div className={style["content-scroll3"]}></div>
                </div>
                
            </div>
        </section>
    );
}

export default Workflow;
