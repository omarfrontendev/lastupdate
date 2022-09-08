import React from "react";
import styles from "./.module.scss";
import { MenuIcon, InfoIcon } from "../../UI/icons";
// import MenuIcon from "../../UI/icons/MenuIcon";

export default function ItemDetailsRow({ setContent, content }) {
  return (
    <div className={styles.item__details__header__wrapper}>
      <ul className={styles.links__list}>
        <li className={styles.link__item}>
          <button 
            onClick={() => setContent('details')} 
            className={`${styles.link} ${content === 'details' ? styles.active__link : ''}`}
          >
            <MenuIcon />
            <span>menu</span>
          </button>
        </li>
        <li className={styles.link__item}>
          <button 
            className={`${styles.link} ${content === 'info' ? styles.active__link : ''}`}
            onClick={() => setContent('info')}
          >
            <InfoIcon />
            <span>info</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
