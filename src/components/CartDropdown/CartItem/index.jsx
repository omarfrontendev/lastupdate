import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";
import { getUserCart, toggleItemToCart } from "../../../redux/actions";
import { AiFillDelete } from "react-icons/ai";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getUserCart, toggleItemToCart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CartItem({
  item,
  parentID,
  id,
  getUserCart,
  toggleItemToCart,
  userCart,
}) {
  const [quantity, setQuantity] = useState(item?.quantity);

  // useEffect(() => {
  // setQuantity(item.quantity);
  // }, [item.quantity, userCart]);

  return (
    <div className={styles.cart__item}>
      <div
        className={`${styles.cart__item__btn}`}
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
      >
        <span className={styles.toggle__icon}></span>
        <div className="w-100 d-flex align-items-center justify-content-between">
          <div className="left">
            <div className={styles.cart__item__name}>{item?.name}</div>
          </div>
          <div className="right d-flex align-items-center">
            <div className={styles.item__quantity__control}>
              {quantity !== 1 && (
                <>
                  <button
                    onClick={async () => {
                      setQuantity(quantity - 1);
                      await toggleItemToCart({
                        item_id: item.id,
                        restaurant_id: userCart.restaurant.id,
                        action: "decrease",
                      });
                      getUserCart();
                    }}
                    className={styles.control__btn}
                  >
                    -
                  </button>
                </>
              )}
              {quantity === 1 && (
                <button
                  className={`${styles.remove_btn}`}
                  onClick={async () => {
                    await toggleItemToCart({
                      item_id: item.id,
                      restaurant_id: userCart.restaurant.id,
                      action: "decrease",
                    });
                    getUserCart();
                  }}
                >
                  <AiFillDelete />
                </button>
              )}
              <div className={styles.quantity}>{quantity}</div>
              <button
                onClick={async () => {
                  setQuantity(quantity + 1);
                  await toggleItemToCart({
                    item_id: item.id,
                    restaurant_id: userCart.restaurant.id,
                    action: "increase",
                  });
                  getUserCart();
                }}
                className={styles.control__btn}
              >
                +
              </button>
            </div>
            <p className={styles.cart__item__price}>
              {item?.price * quantity}{" "}
              <span className={styles.currency}>SAR</span>
            </p>
          </div>
        </div>
      </div>
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent={`#${parentID}`}
      >
        <div className={styles.cart__item__body}>
          <ul className={styles.item__addons__list}>
            {item.addon_categories.map((addon, i) => {
              return (
                <li key={i} className={styles.addon}>
                  <span className={`me-2 ${styles.icon}`}></span>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <p className={styles.addon__name}>lorem</p>
                    <p className={styles.cart__item__price}>
                      20 <span className={styles.currency}>SAR</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
});
