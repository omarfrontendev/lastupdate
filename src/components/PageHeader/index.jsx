import React from "react";
import styles from "./.module.scss";

export default function PageHeader({
  title,
  filter,
  span,
  spanText,
  categories,
  toggle,
  type,
}) {
  return (
    <div className={styles.page__header}>
      <h5 className={styles.page__header__title}>{title}</h5>
      <div className={styles.items__filter__wrapper}>
        {span && <span className={styles.sort__span}>{spanText}</span>}
        {filter && (
          <ul className={styles.filter__list}>
            {categories.map((item, i) => (
              <li
                key={i}
                className={`${styles.filter__list__item} ${
                  item.active && styles.active
                }`}
              >
                <button
                  className={styles.filter__type__btn}
                  onClick={() => {
                    toggle(item?.type);
                  }}
                >
                  {item.category}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
