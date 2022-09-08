import React from "react";
import styles from "./.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { VscArrowRight } from "react-icons/vsc";
import { TbCurrentLocation } from "react-icons/tb";
import { HuaweiStoreLogo, AppStoreLogo, PlayStoreLogo } from "../../UI/icons";

export default function StartScreen() {
  return (
    <div className={styles.startscreen__wrapper}>
      <h1 className={styles.screen__main__heading}>Online Food Ordering</h1>
      <div className={styles.location__search__form__wrapper}>
        <HiOutlineLocationMarker className={styles.location__icon} />
        <form className={styles.location__search__form}>
          <input
            className={styles.form__search__input}
            type="text"
            placeholder="Find a location, a street, or a landmark..."
          />
          <button className={styles.form__submit__btn} type="submit">
            <VscArrowRight />
          </button>
        </form>
        <button
          className={styles.location__btn}
          data-bs-toggle="modal"
          data-bs-target={`#shipping__modal`}
        >
          <TbCurrentLocation />
        </button>
      </div>
      <h2 className={styles.slogan}>Immediately, Your Everyday</h2>
      <p className={styles.description}>
        From Thousands Of Nearby Restaurants, You May Order Food And Groceries
        For Delivery Online.
      </p>
      <ul className={styles.app__links__list}>
        <li className={styles.app__link__wrapper}>
          <a href="/" target={"_blank"}>
            <PlayStoreLogo />
          </a>
        </li>
        <li className={styles.app__link__wrapper}>
          <a href="/" target={"_blank"}>
            <AppStoreLogo />
          </a>
        </li>
        <li className={styles.app__link__wrapper}>
          <a href="/" target={"_blank"}>
            <HuaweiStoreLogo />
          </a>
        </li>
      </ul>
    </div>
  );
}
