import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <div className={styles.left}>
          <h2 className={styles.logo}>AXACRATE</h2>
          <p className={styles.desc}>
            Track Trace Trust
          </p>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#Features">Features</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.social}>
          <h3>Connect</h3>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} AXACRATE. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
