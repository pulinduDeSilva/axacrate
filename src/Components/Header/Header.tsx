import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../assets/transparent.png";
import styles from "../Header/Header.module.css";

function Header() {
  useGSAP(() => {
    const loadAnimation = gsap.timeline({ defaults: { ease: "power1.inout" } });

    loadAnimation.from("header", { opacity: 0, y: -100, duration: 1 });
  }, []);

  return (
    <>
      <header>
        <div className={styles["header-left"]}>
          <img className={styles["logo-img"]} src={logo} alt="" width="40px" />
        </div>

        <nav>
          <a href="#Features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
