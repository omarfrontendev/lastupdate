import React from "react";
import CardsRow from "../CardsRow";
import styles from "./.module.scss";
import RestaurantsSlider from "../RestaurantsSlider";

export default function PopRestaurantsSlider({ type, items }) {
  return (
    <div className={styles.pop__restaurants__slider__wrapper}>
      <CardsRow title={"Popular Restaurants"} link="/popular-restaurants">
        {items?.length ? (
          <RestaurantsSlider type={type} items={items} />
        ) : (
          <>NO POPULAR RESTAUTRNST AVAILABLE IN YOUR AREA</>
        )}
      </CardsRow>
    </div>
  );
}
