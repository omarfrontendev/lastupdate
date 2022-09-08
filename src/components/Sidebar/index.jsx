import React from "react";
import styles from "./.module.scss";
import { PickALogo, ResIcon, FavIcon, HomeIcon } from "../../UI/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="d-none d-md-block">
      <div className={styles.sidebar}>
        <div className={styles.pick_a__logo} title="Pick.a">
          <Link to="/">
            <PickALogo />
          </Link>
        </div>
        <ul className={styles.sidebar__nav__links}>
          <li className={styles.sidebar__list__item}>
            <Link to="/home" className={styles.sidebar__nav__link}>
              <div className={styles.icon__container}>
                <HomeIcon />
              </div>
              <span>home</span>
            </Link>
          </li>
          <li className={styles.sidebar__list__item}>
            <Link to="/favourites" className={styles.sidebar__nav__link}>
              <div className={styles.icon__container}>
                <FavIcon />
              </div>
              <span>favourites</span>
            </Link>
          </li>
          <li className={styles.sidebar__list__item}>
            <Link to="/restaurants" className={styles.sidebar__nav__link}>
              <div className={styles.icon__container}>
                <ResIcon />
              </div>
              <span>restaurants</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
