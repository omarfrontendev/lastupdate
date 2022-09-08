import React from "react";
import CardsRow from "../CardsRow";
import MealsSlider from "../MealsSlider";
import styles from "./.module.scss";

export default function RecommendedSlider({ type, items }) {
  return (
    <div className={styles.recommended__items__slider}>
      <CardsRow title={"Recommended for you"} link="/recommended-items">
        {items.length ? (
          <MealsSlider type={type} items={items} />
        ) : (
          <>NO RECOMMENDED ITEMS AVAILABLE IN YOUR AREA</>
        )}
      </CardsRow>
    </div>
  );
}
