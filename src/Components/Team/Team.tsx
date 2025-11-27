import styles from "./Team.module.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profile from "../../assets/prof.jpg";

function Features() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "." + styles["team-section"],
        start: "top 70%",
        end: "bottom 10%",
        scrub: true,
        pin: true

      }
    })

    tl.fromTo("." + styles["wrapper-team"], { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "power1.inout" });
  }, [])

  return (
    <section id="team" className={styles["team-section"]}>
      <div className={styles["wrapper-team"]}>
        <h2>Developers</h2>
        <div className={styles["team"]}>
          <div className={styles["card"]}>
            <img src={profile} alt="rfid Tracking" />
            <h3>Full Name</h3>
          </div>
          <div className={styles["card"]}>
            <img src={profile} alt="rfid Tracking" />
            <h3>Full Name</h3>
          </div>
          <div className={styles["card"]}>
            <img src={profile} alt="rfid Tracking" />
            <h3>Full Name</h3>
          </div>
          <div className={styles["card"]}>
            <img src={profile} alt="rfid Tracking" />
            <h3>Full Name</h3>
          </div>
          <div className={styles["card"]}>
            <img src={profile} alt="rfid Tracking" />
            <h3>Full Name</h3>
          </div>
          <div className={styles["card"]}>
            <img src={profile} alt="rfid Tracking" />
            <h3>Full Name</h3>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Features;