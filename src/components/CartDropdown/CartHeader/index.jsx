import React from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";
import { Star } from "../../../UI/icons";
import { HiLocationMarker } from "react-icons/hi";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export const CartHeader = ({ userCart }) => {
  const { restaurant } = userCart;
  return (
    <header className={styles.cart__header}>
      <div className={styles.restaurant__image__wrapper}>
        <img
          className={styles.restaurant__img}
          src={restaurant?.image}
          alt={restaurant?.name}
        />
      </div>
      <div className={styles.restaurant__facts}>
        <p className={styles.restaurant__name}>{restaurant?.name}</p>
        <p className={styles.restaurant__categories}>
          {restaurant?.description}
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <p className={styles.restaurant__rating}>
              <Star />
              <span>{Number(restaurant?.rating).toFixed(1)}</span>
            </p>
            <p className={styles.restaurant__location}>
              <HiLocationMarker />
              <span>{restaurant?.address}</span>
            </p>
          </div>
          <button className={styles.add__items__btn}>Add Items</button>
        </div>
      </div>
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartHeader);
