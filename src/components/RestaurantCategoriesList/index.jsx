import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ResturantCategoriesList({
  setCurrentActive,
  currentActive,
  categories,
}) {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.category__container}>
      <div className={styles.title}>Categories</div>
      <ul className={`${styles.categories} d-flex flex-column`}>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              className={`${styles.category} ${
                currentActive === i && styles.active
              }`}
            >
              <button
                className={styles.categ__btn}
                onClick={() => setCurrentActive(i)}
                data-bs-toggle="collapse"
                data-bs-target={`#ID${i}`}
                aria-expanded={currentActive === i}
                aria-controls={`ID${i}`}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
