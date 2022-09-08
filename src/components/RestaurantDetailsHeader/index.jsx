import React from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { RiMotorbikeLine, RiSearchLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { connect } from "react-redux";
import FavToggleBtn from "../FavToggleBtn";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ResturantDetailsHeader({ item }) {
  return (
    <div className={styles.res__details__header__wrapper}>
      <div className={styles.like__btn__wrapper}>
        <FavToggleBtn type={"restaurant"} item={item} />
      </div>
      <div className={`row g-0 ${styles.res__details__header}`}>
        <div className={`col-12 col-lg-2 ${styles.header__section__wrapper}`}>
          <div className={`${styles.header__section}`}>
            <div className={styles.res__logo__wrapper}>
              <img
                className={styles.res__logo__image}
                src={`${item?.image}`}
                alt={item?.name}
              />
            </div>
          </div>
        </div>
        <div className={`col-12 col-lg-4 ${styles.header__section__wrapper}`}>
          <div className={`${styles.header__section}`}>
            <div className={styles.resturant__facts}>
              <h5 className={styles.resturant__name}>{item?.name}</h5>
              <span className={styles.resturant__meals}>
                {item?.description?.split(",").join(" • ")}
              </span>
              <ul className={styles.res__specs__list}>
                <li className={styles.list__item}>
                  <AiFillStar className={styles.star__icon} />
                  <span>{Number(item?.rating).toFixed(1)}</span>
                </li>
                <li className={styles.list__item}>
                  <RiMotorbikeLine className={styles.delivery__icon} />
                  <span>{item?.delivery_time} MIN</span>
                </li>
                <li className={styles.list__item}>
                  <MdAttachMoney className={styles.money__icon} />
                  <span>{item?.price_range} SAR</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`col-12 col-lg-6 ${styles.header__section__wrapper}`}>
          <div className={`${styles.header__section}`}>
            <div className={styles.search__from__wrapper}>
              <RiSearchLine className={styles.search__icon} />
              <form
                onSubmit={(e) => e.preventDefault()}
                className={styles.search__form}
              >
                <input
                  type="text"
                  className={styles.search__form__input}
                  placeholder="Search Items …"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
