import React from "react";
import styles from "./.module.scss";
import { MatnLogo } from "../../UI/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={`${styles.app__main__footer} ${styles.bottom__fixed}`}>
      <div
        className={`container__wrapper ${styles.app__main__footer__wrapper}`}
      >
        <div className="left__side">
          <p className={styles.copyright}>
            Copyright © Pick.a. All rights reserved
          </p>
          <Link to="/privacy" className={styles.link}>
            privacy
          </Link>
          <span className="mx-2">•</span>
          <Link to="/support" className={styles.link}>
            Support
          </Link>
        </div>
        <div className="right__side">
          <p>Powered By</p>
          <MatnLogo />
        </div>
      </div>
    </footer>
  );
}
