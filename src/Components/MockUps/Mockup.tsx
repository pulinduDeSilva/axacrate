import style from "./Mockup.module.css"
import mac from "../../assets/moackup mac.png"
import mask from "../../assets/mockupMask.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Mockups() {
    const [loaded, setLoaded] = useState(false);

    useGSAP(() => {
        ScrollTrigger.refresh();
    }, []);

    useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 1400px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "." + style["section-mockup"],
                start: "top 50%",
                end: "top 0%",
                scrub: true,
                //markers: true
            }
        });

        tl.fromTo("#mockup-text", { y: 80 }, { y: -220 });
        
    });

    // Laptop
    mm.add("(min-width: 1024px) and (max-width: 1399px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "." + style["section-mockup"],
                start: "top 70%",
                end: "top 20%",
                scrub: true,
                //markers: true
            }
        });

        tl.fromTo("#mockup-text", { y: 80 }, { y: -160 });
    });

    // Tablet
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "." + style["section-mockup"],
                start: "top 80%",
                end: "top 30%",
                scrub: true,
                //markers: true
            }
        });

        tl.fromTo("#mockup-text", { y: 60 }, { y: -120 });
    });

    // Mobile
    mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "." + style["section-mockup"],
                start: "top 100%",
                end: "top 60%",
                scrub: true,
                //markers: true
            }
        });

        tl.fromTo("#mockup-text", { y: 40 }, { y: -100 });
    });
});

    return <>
        <section className={style["section-mockup"]}>
            <div className={style["wrapper"]}>
                <img className={style["mockupMask"]} src={mask} alt="mac book mockup" loading="lazy" />
                <div className={style["text-wrapper"]}>
                    <h1 id="mockup-text">Web Portal</h1>
                </div>
                <img className={style["mockup"]} src={mac} alt="mac book mockup" loading="lazy" />
            </div>
        </section>
    </>
}

export default Mockups;