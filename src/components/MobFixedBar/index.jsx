import React, { useState, useEffect } from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { HomeIcon, FavIcon, ResIcon } from "../../UI/icons";

export default function MobFixedBar() {
  const [bottomPage, setBottomPage] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 62
      ) {
        setBottomPage(true);
      } else {
        setBottomPage(false);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="d-md-none">
      <div
        className={`${styles.mob__fixed__bar__wrapper} ${
          bottomPage ? styles.bottom__page : ""
        }`}
      >
        <div className={`container__wrapper`}>
          <div className={`${styles.mob__fixed__bar}`}>
            <ul className={styles.mob__nav__list}>
              <li className={styles.mob__nav__list__item}>
                <Link to={"/favourites"} className={styles.mob__nav__link}>
                  <FavIcon />
                </Link>
              </li>
              <li
                className={`${styles.mob__nav__list__item} ${styles.mob__nav__home}`}
              >
                <Link to={"/home"} className={styles.mob__nav__link}>
                  <HomeIcon />
                </Link>
              </li>
              <li className={styles.mob__nav__list__item}>
                <Link to={"/restaurants"} className={styles.mob__nav__link}>
                  <ResIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
