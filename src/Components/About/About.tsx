import styles from "./About.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import featureOne from "../../assets/rfidtrack.png";
import featureBg from "../../assets/featureBg.png";
import geofence from "../../assets/geofencing.png";
import rfidHealth from "../../assets/rfidHealth.png";
import cloud from "../../assets/cloud.png";
import { SplitText } from "gsap/SplitText";


function Features() {
  gsap.registerPlugin(SplitText);

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    const textSplit = new SplitText("#aboutText", { type: "words, chars" });
    const chars = textSplit.chars;

    gsap.fromTo(
      chars,
      { opacity: 0, yPercent: 130 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "back.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#about-section",
          start: "top top",
          end: "+=700",
          scrub: 1.5,
          pin: true,
        }
      }
    );


    if (!containerRef.current) return;

    const sections = gsap.utils.toArray(`.${styles.features} > div`);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1400px)", () => { //Desktop
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: "+=4000",
        },
      })

    })

    mm.add("(max-width: 1399px)", () => { //mobile
      const cards = gsap.utils.toArray(`.${styles["feature-card"]}`) as HTMLElement[];

      cards.forEach((card) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 70%",    // start earlier
            end: "bottom 65%",      // end at middle of viewport
            scrub: true
          }
        });


        // Actual animation
        tl.fromTo(card, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power1.inout" });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "." + styles["about-section"],
          start: "top 70%",    // start earlier
          end: "bottom 65%",      // end at middle of viewport
          scrub: true
        }
      });

      // Actual animation
      tl.fromTo("." + styles["about-section"], { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power1.inout" });

    });

  }, []);


  return (
    <>
      <section id="about-section" className={styles["about-section"]}>
        <h1 id="aboutText">Transform your warehouse</h1>
      </section>

      <div id="Features" className={styles["wrapper"]} ref={containerRef}>
        <img className={styles["bg"]} src={featureBg} alt="" />
        <div className={styles["features"]}>
          
          <div className={styles["feature-card"]}>
            <div className={styles["card"]}>
              <img src={featureOne} alt="rfid Tracking" />
              <div className={styles["text-wrapper"]}>
                <h3>RFID Item Tracking</h3>
                <p>Real-time pallet & item identification</p>
              </div>
            </div>
          </div>

          <div className={styles["feature-card"]}>
            <div className={styles["card"]}>
              <img src={geofence} alt="rfid Tracking" />
              <div className={styles["text-wrapper"]}>
                <h3>Geofencing</h3>
                <p>A Virtual fence around the warehouse to validate the in and out of items and alert the admins accordingly</p>
              </div>
            </div>
          </div>

          <div className={styles["feature-card"]}>
            <div className={styles["card"]}>
              <img src={rfidHealth} alt="rfid Tracking" />
              <div className={styles["text-wrapper"]}>
                <h3>Tag health checking</h3>
                <p>Ensure the tags remain readable and undamaged, and perform within the acceptable standards</p>
              </div>
            </div>
          </div>

          <div className={styles["feature-card"]}>
            <div className={styles["card"]}>
              <img src={cloud} alt="rfid Tracking" />
              <div className={styles["text-wrapper"]}>
                <h3>Cloud Database</h3>
                <p>An online cloud database system for a centralised system</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Features;
