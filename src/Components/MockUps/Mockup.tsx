import style from "./Mockup.module.css"
import mac from "../../assets/moackup mac.png"
import mask from "../../assets/mockupMask.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Mockups() {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "." + style["section-mockup"],
                start: "top 50%",    // start earlier
                end: "top 0%",      // end at middle of viewport
                scrub: true,
            }
        });

        tl.fromTo("#mockup-text", {y: 0},{y: -160})
    })
    return <>
        <section className={style["section-mockup"]}>
            <div className={style["wrapper"]}>
                <img className={style["mockupMask"]} src={mask} alt="mac book mockup" />
                <div className={style["text-wrapper"]}>
                    <h1 id="mockup-text">Web Portal</h1>
                </div>
                <img className={style["mockup"]} src={mac} alt="mac book mockup" />
            </div>
        </section>
    </>
}

export default Mockups;