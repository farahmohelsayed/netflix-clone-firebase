import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

  }, []);
  return (
    <div className={`${styles.nav} ${show && styles.navBlack}`}>
      <img
        className={styles.navLogo}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix-logo"
      />
      <img
        className={styles.navProfile}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="profile"
      />
    </div>
  );
};
export default Nav;
