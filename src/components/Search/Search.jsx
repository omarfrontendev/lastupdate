/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ArrowRightIcon, JPSIcon, LocationIcon } from '../../UI/icons';
import MapPopup from "./MapPopup";
import styles from "./search.module.scss";

const Search = () => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(true);

  return (
    <div className={styles.serch__container}>
      <div className={styles.search__input}>
        <h1 className={styles.title}>online food oredering</h1>
        <div className={styles.search__input__control}>
          {/* <LocationIcon /> */}
          <input
            type="text"
            placeholder="Find a location, a street, or a landmark..."
          />
          <span className={styles.jps__btn} onClick={() => setOpenPopup(true)}>
            {/* <JPSIcon /> */}
          </span>
          <button onClick={() => navigate("/home")}>
            {/* <ArrowRightIcon /> */}
          </button>
        </div>
      </div>
      <div className={styles.search__text}>
        <h2>Immediately, Your Everyday</h2>
        <p>
          From Thousands Of Nearby Restaurants,
          <br />
          You May Order Food And Groceries For Delivery Online.
        </p>
        <div className={styles.branding__logo}>
          <img src="/assets/logo_playstore.png" alt="Branding Image" />
          <img src="/assets/logo_appstore.png" alt="Branding Image" />
          <img src="/assets/logo_huaweistore1.png" alt="Branding Image" />
        </div>
      </div>
      {openPopup && <MapPopup close={setOpenPopup} />}
    </div>
  );
};

export default Search;
