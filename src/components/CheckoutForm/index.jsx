import React from "react";
import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
// import { MdAdd } from "react-icons/md";
import SubmitBtn from "../SubmitBtn";
import styles from "./.module.scss";
import { RiCoupon2Line } from "react-icons/ri";
// import { FaMoneyBill, FaCcVisa, FaPaypal } from "react-icons/fa";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import {
  getUserCart,
  orderCheckout,
  addCouponToCart,
} from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { orderCheckout, getUserCart, addCouponToCart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CheckoutForm({
  setCheckout,
  userCart,
  orderCheckout,
  getUserCart,
  addCouponToCart,
}) {
  const [submit, setSubmit] = useState(false);
  // const [editAdress, setEditAdress] = useState(false);
  // const [data, setData] = useState({
  // address: "No 03, 4th Lane,Newyourk",
  // });
  const onSubmitHandler = async (values) => {
    await addCouponToCart({
      coupon: values.coupon,
      restaurant_id: userCart.restaurant.id,
      subtotal: userCart.PaymentDetail.subtotal,
    });
    getUserCart();
  };
  return (
    <div className={styles.checkout__form}>
      <div className={styles.form__content}>
        <button
          onClick={() => setCheckout(false)}
          type="button"
          className={`d-flex align-items-center ${styles.back__btn}`}
        >
          <HiArrowNarrowLeft className={styles.icon} />
          Checkout
        </button>
        {/* <div
          className={`${styles.address__container} d-flex align-items-start justify-content-between`}
        >
          {!editAdress ? (
            <>
              <div className={styles.address}>{data.address}</div>
              <button
                onClick={() => setEditAdress(true)}
                type="button"
                className={styles.edit__address__btn}
              >
                Change
              </button>
            </>
          ) : (
            <>
              <input
                autoFocus={editAdress}
                className={styles.input}
                type="text"
                value={data?.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
              <button
                onClick={() => setEditAdress(false)}
                type="button"
                className={styles.edit__address__btn}
              >
                Save
              </button>
            </>
          )}
        </div> */}
        {/* <div className={styles.payment__method__conatiner}>
          <div
            className={`${styles.payment__header} d-flex align-items-start justify-content-between`}
          >
            <div className={styles.payment__title}>Payment Method</div>
            <button type="button" className={styles.add__card__btn}>
              <MdAdd className={styles.icon} /> Add Card
            </button>
          </div>
          <div className={`${styles.methods} d-flex flex-column`}>
            <div className={styles.method}>
              <input
                type="radio"
                id="cash"
                value="Cash"
                name="payment__method"
                className={`${styles.input} d-none`}
              />
              <label
                htmlFor="cash"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span className={styles.payment__method__icon}>
                    <FaMoneyBill />
                  </span>
                  <span>Cash On Delivery</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div>
            <div className={styles.method}>
              <input
                type="radio"
                id="visa"
                value="Visa"
                name="payment__method"
                className={`${styles.input} d-none`}
              />
              <label
                htmlFor="visa"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span className={styles.payment__method__icon}>
                    <FaCcVisa />
                  </span>
                  <span>**** **** **** 2184</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div>
            <div className={styles.method}>
              <input
                type="radio"
                id="paypal"
                value="paypal"
                name="payment__method"
                className={`${styles.input} d-none`}
              />
              <label
                htmlFor="paypal"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span className={styles.payment__method__icon}>
                    <FaPaypal />
                  </span>
                  <span>test@email.com</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div>
          </div>
        </div> */}
        <div className="pt-4"></div>
        <div className={styles.coupon__container}>
          <div className={styles.title}>Save on your order</div>
          <div className={`${styles.input__content} d-flex align-items-center`}>
            <Form onSubmit={onSubmitHandler}>
              {({ handleSubmit, submitting }) => (
                <form
                  className="w-100 d-flex align-items-center justify-content-between"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <span className="me-2">
                      <RiCoupon2Line />
                    </span>
                    <Field
                      component={"input"}
                      placeholder="enter your coupon code"
                      type="text"
                      name="coupon"
                      className={styles.input}
                    />
                  </div>
                  <button
                    disabled={submitting}
                    className={styles.btn}
                    type="submit"
                  >
                    {submitting ? "Wait" : "Apply"}
                  </button>
                </form>
              )}
            </Form>
          </div>
        </div>
        <div className={styles.payment__details}>
          <div className={styles.title}>Payment Details</div>
          <div
            className={`d-flex align-items-center justify-content-between ${styles.payment_details__row}`}
          >
            <p className={styles.details}>Subtotal</p>
            <span className={styles.value}>
              {Number(userCart?.PaymentDetail?.total_amount).toFixed(2)} SAR
            </span>
          </div>
        </div>
      </div>
      <div
        className={`d-flex align-items-center justify-content-center ${styles.cheackout__btn}`}
      >
        <SubmitBtn
          disabled={submit}
          type="button"
          solidStyle={true}
          onClick={async () => {
            setSubmit(true);
            await orderCheckout();
            setSubmit(false);
            getUserCart();
            setCheckout(false);
          }}
        >
          Place Order
        </SubmitBtn>
      </div>
    </div>
  );
});
