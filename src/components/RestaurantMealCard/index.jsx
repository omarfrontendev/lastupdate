import React from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { RiMotorbikeLine } from "react-icons/ri";
import { CgMathPlus } from "react-icons/cg";
import FavToggleBtn from "../FavToggleBtn";
import { connect } from "react-redux";
import { clearReducer, getItemPage } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { clearReducer, getItemPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RestaurantMealCard({ item, clearReducer, getItemPage }) {
  return (
    <div className={styles.res__mael__card__wrapper}>
      <div className={styles.card__left__side}>
        <div className={styles.meal__img__wrapper}>
          <img
            className={styles.meal__img}
            src={item?.image}
            alt={item?.name}
          />
        </div>
        <div className={styles.meal__details}>
          <h2 className={styles.meal__name}>{item?.name}</h2>
          <p className={styles.meal__cats}>{item?.description}</p>
          <div className={styles.meal__facts}>
            <span className={styles.meal__rating}>
              <AiFillStar className={styles.star__icon} /> 5.5
            </span>
            <span className={styles.meal__cooking__time}>
              <RiMotorbikeLine className={styles.bike__icon} />
              {item?.delivery_time} MIN
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__right__side}>
        <div className={styles.meal__prices}>
          {Boolean(Number(item?.old_price)) && (
            <span className={styles.old__price}>SAR {item?.old_price}</span>
          )}
          <span className={styles.current__price}>
            SAR <span className={styles.value}>{item?.price}</span>
          </span>
        </div>
        <div className={styles.add__cart__btn__wrapper}>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#item__details__popup`}
            onClick={() => {
              clearReducer({ type: "ITEM__POPUP__DATA", payload: {} });
              (async () => {
                await getItemPage(item?.id);
              })();
            }}
            className={styles.add__cart__btn}
          >
            <CgMathPlus />
          </button>
        </div>
      </div>
      <div className={styles.like__btn__wrapper}>
        <FavToggleBtn type={"item"} item={item} />
      </div>
    </div>
  );
});
