import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";
import { getUserCart, toggleItemToCart } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getUserCart, toggleItemToCart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function HeaderItemPrice({ itemDetails, getUserCart, toggleItemToCart }) {
  const [quantity, setQuantity] = useState(itemDetails.quantity);

  return (
    <div
      className={`${styles.item__price__container}`}
    >
      {/* <div className="col-7"> */}
        <div className={`${styles.item__title} d-flex flex-column`}>
          <div className={styles.title}>{itemDetails?.name}</div>
          <div className={styles.subtitle}>{itemDetails?.description}</div>
        </div>
      {/* </div> */}
      {/* <div className="col-5"> */}
        <div
          className={`${styles.item__price__content} d-flex align-items-center justify-content-end`}
        >
          <div className={styles.item__quantity__control}>
            <button
              onClick={async () => {
                setQuantity(quantity - 1);
                await toggleItemToCart({
                  item_id: itemDetails.id,
                  restaurant_id: itemDetails.restaurant_id,
                  action: "decrease",
                });
                getUserCart();
              }}
              className={styles.control__btn}
            >
              -
            </button>
            <div className={styles.quantity}>{quantity}</div>
            <button
              onClick={async () => {
                setQuantity(quantity + 1);
                await toggleItemToCart({
                  item_id: itemDetails.id,
                  restaurant_id: itemDetails.restaurant_id,
                  action: "increase",
                });
                getUserCart();
              }}
              className={styles.control__btn}
            >
              +
            </button>
          </div>
          <div className={`${styles.item__price} d-flex align-items-center`}>
            <div className={styles.price__word}>Price:</div>
            <div
              className={`${styles.item__price} d-flex flex-column align-items-center justify-content-center`}
            >
              {Boolean(Number(itemDetails?.old_price)) && (
                <div className={styles.last__price}>
                  SAR {itemDetails?.old_price}
                </div>
              )}
              <div className={styles.new__price}>
                <span className={styles.SAR}>SAR</span>{" "}
                {itemDetails?.price * quantity}
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
});
