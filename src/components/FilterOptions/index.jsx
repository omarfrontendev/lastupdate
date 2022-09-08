import React from "react";
import styles from "./.module.scss";
import { BsCheck } from "react-icons/bs";
import { BeverageIcon, DessertIcon, FoodIcon, OfferIcon } from "../../UI/icons";

export default function FilterOptions() {
  const sortedBy = [
    {
      id: "Delivery_Time",
      value: "Delivery Time",
    },
    {
      id: "Price_low_average",
      value: "Price (low and average)",
    },
    {
      id: "Top_rated",
      value: "Top rated",
    },
    {
      id: "Open_now",
      value: "Open now",
    },
  ];

  const cuisines = [
    {
      id: "Western_cuisines",
      value: "Western cuisines",
    },
    {
      id: "Indian_cuisines",
      value: "Indian cuisines",
    },
    {
      id: "Italian_cuisines",
      value: "Italian cuisines",
    },
    {
      id: "Japanese_cuisines",
      value: "Japanese cuisines",
    },
    {
      id: "Syrian_cuisines",
      value: "Syrian cuisines",
    },
  ];

  return (
    <form className={styles.options__container}>
      <div
        className={`${styles.options__header} d-flex align-items-center justify-content-between`}
      >
        <div className={styles.options__categories}>Categories</div>
        <button type="button" className={styles.options__Clear}>Clear All</button>
      </div>
      <div>
        <div className={`${styles.options__btns} d-flex align-items-center`}>
          <button
            type="button"
            className={`${styles.options__btn} ${styles.active} d-flex align-items-center`}
          >
            <span
              className={`${styles.options__icon} d-flex align-items-center justify-content-center`}
            >
              <FoodIcon />
            </span>
            <div className={styles.btn__word}>Food</div>
          </button>
          <button
            type="button"
            className={`${styles.options__btn} d-flex align-items-center`}
          >
            <span
              className={`${styles.options__icon} d-flex align-items-center justify-content-center`}
            >
              <BeverageIcon />
            </span>
            <div className={styles.btn__word}>Beverages</div>
          </button>
          <button
            type="button"
            className={`${styles.options__btn} d-flex align-items-center`}
          >
            <span
              className={`${styles.options__icon} d-flex align-items-center justify-content-center`}
            >
              <DessertIcon />
            </span>
            <div className={styles.btn__word}>Desserts</div>
          </button>
          <button
            type="button"
            className={`${styles.options__btn} d-flex align-items-center`}
          >
            <span
              className={`${styles.options__icon} d-flex align-items-center justify-content-center`}
            >
              <OfferIcon />
            </span>
            <div className={styles.btn__word}>Best offers</div>
          </button>
        </div>
        <div className={`${styles.options__sort}`}>
          <div className={styles.options__sort__content}>
            <div className={styles.options__sort__title}>Sort by</div>
            <div className={`${styles.options__checkboxes} d-flex flex-column`}>
              {sortedBy.map((input) => (
                <div
                  key={input.id}
                  className={`${styles.options__checkbox} d-flex align-items-center justify-content-between`}
                >
                  <label className={styles.label} htmlFor={input.id}>
                    {input.value}
                  </label>
                  <input
                    className={`${styles.input} d-none`}
                    type="checkbox"
                    id={input.id}
                    name={input.id}
                    value={input.value}
                  />
                  <span className={styles.checkbox}>
                    <BsCheck className={styles.checked__icon} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.options__sort__content}>
            <div className={styles.options__sort__title}>Cuisines</div>
            <div className={`${styles.options__checkboxes} d-flex flex-column`}>
              {cuisines.map((input) => (
                <div
                  key={input.id}
                  className={`${styles.options__checkbox} d-flex align-items-center justify-content-between`}
                >
                  <label className={styles.label} htmlFor={input.id}>
                    {input.value}
                  </label>
                  <input
                    className={`${styles.input} d-none`}
                    type="checkbox"
                    id={input.id}
                    name={input.id}
                    value={input.value}
                  />
                  <span className={styles.checkbox}>
                    <BsCheck className={styles.checked__icon} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className={styles.submit__form__btn} type="submit">
          Save and apply
        </button>
      </div>
    </form>
  );
}
