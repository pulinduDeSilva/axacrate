import styles from "./Team.module.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profile from "../../assets/prof.jpg";

function Features() {

  useGSAP(() => {


    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => { //desktop
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "." + styles["team-section"],
          start: "top 50%",
          end: "bottom 100%",
          pin: true,
          scrub: true,
        }
      })

      tl.fromTo("." + styles["wrapper-team"], { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "power1.inout" });
    })

    mm.add("(max-width: 768px)", () => { //mobile
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "." + styles["team-section"],
          start: "top 30%",
          end: "+=300",
          pin: true,
          scrub: true,
        }
      })

      tl.fromTo("." + styles["wrapper-team"], { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "power1.inout" });
    })

  }, [])

  return (
    <section id="team" className={styles["team-section"]}>
      <div className={styles["wrapper-team"]}>
        <h2>Developers</h2>
        <div className={styles["team"]}>

          <div className={styles["card"]}>
            <img src={profile} alt="John"/>
              <h1>John Doe</h1>
              <p className={styles["profile"]}>CEO & Founder, Example</p>
              <p>Harvard University</p>
              
              <p><button>Contact</button></p>
          </div>

          <div className={styles["card"]}>
            <img src={profile} alt="John"/>
              <h1>John Doe</h1>
              <p className={styles["profile"]}>CEO & Founder, Example</p>
              <p>Harvard University</p>
              
              <p><button>Contact</button></p>
          </div>

          <div className={styles["card"]}>
            <img src={profile} alt="John"/>
              <h1>John Doe</h1>
              <p className={styles["profile"]}>CEO & Founder, Example</p>
              <p>Harvard University</p>
              
              <p><button>Contact</button></p>
          </div>

          <div className={styles["card"]}>
            <img src={profile} alt="John"/>
              <h1>John Doe</h1>
              <p className={styles["profile"]}>CEO & Founder, Example</p>
              <p>Harvard University</p>
              
              <p><button>Contact</button></p>
          </div>

          <div className={styles["card"]}>
            <img src={profile} alt="John"/>
              <h1>John Doe</h1>
              <p className={styles["profile"]}>CEO & Founder, Example</p>
              <p>Harvard University</p>
              
              <p><button>Contact</button></p>
          </div>

          <div className={styles["card"]}>
            <img src={profile} alt="John"/>
              <h1>John Doe</h1>
              <p className={styles["profile"]}>CEO & Founder, Example</p>
              <p>Harvard University</p>
              
              <p><button>Contact</button></p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Features;