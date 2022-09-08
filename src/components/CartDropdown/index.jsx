import React, { useEffect, useState } from "react";
import { NoteIcon } from "../../UI/icons";
import MenuDropDown from "../MenuDropDown";
import styles from "./.module.scss";
import SubmitBtn from "../SubmitBtn";
import CheckoutForm from "../CheckoutForm";
import CartHeader from "./CartHeader";
import { connect } from "react-redux";
import { getUserCart, sendUserCartNote } from "../../redux/actions";
import Accordion from "../Accordion";
import CartItem from "./CartItem";
import { Form, Field } from "react-final-form";
import { isEmpty } from "lodash";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getUserCart, sendUserCartNote };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CartDropdown({
  notMenu,
  onClose,
  showHeader,
  getUserCart,
  userCart,
  sendUserCartNote,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    (async () => {
      await getUserCart();
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitCartNotes = async (values) => {
    if (!isEmpty(values)) {
      await sendUserCartNote(values.notes);
    }
  };

  if (isLoading) {
    return (
      <MenuDropDown notMenu={notMenu} onClose={onClose} showHeader={showHeader}>
        <div className={styles.isLoading__wrapper}>
          <div className="text-center">
            <div
              className={`spinner-border ${styles.spinner}`}
              role="status"
            ></div>
            <div className="py-3">Please Wait!</div>
          </div>
        </div>
      </MenuDropDown>
    );
  }
  if (!isLoading) {
    if (!userCart?.items?.length) {
      return (
        <MenuDropDown
          notMenu={notMenu}
          onClose={onClose}
          showHeader={showHeader}
        >
          <div className={styles.empty__Cart}>
            <img className={styles.image} src="/assets/emptycart.png" alt="" />
          </div>
        </MenuDropDown>
      );
    }

    if (userCart?.items?.length) {
      return (
        <MenuDropDown
          notMenu={notMenu}
          onClose={onClose}
          showHeader={showHeader}
        >
          <div className={styles.cartDropdown}>
            <CartHeader />
            {!checkout && (
              <>
                <div className={styles.dropdown__content}>
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  <div className="py-3">
                    <p className={styles.row__title}>Items in Cart</p>
                    <div className={`${styles.cart__items__container}`}>
                      <Accordion id={"cart__items__accordion"}>
                        {userCart?.items.map((item, i) => (
                          <CartItem
                            key={i}
                            item={item}
                            parentID={"cart__items__accordion"}
                            id={`id${i}`}
                          ></CartItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  <div className="py-3">
                    <p className={styles.row__title}>Add a note</p>
                    <div className={styles.add__note__input__wrapper}>
                      <NoteIcon />

                      <Form onSubmit={submitCartNotes}>
                        {({ handleSubmit, submitting }) => (
                          <form
                            onSubmit={handleSubmit}
                            className="w-100 d-flex"
                          >
                            <Field
                              initialValue={userCart?.cart_notes}
                              type="text"
                              name="notes"
                              render={({ input }) => (
                                <input
                                  {...input}
                                  className={styles.add_note__input}
                                  type="text"
                                  placeholder="Write anything"
                                />
                              )}
                            ></Field>
                            <button
                              disabled={submitting}
                              type="submit"
                              className={styles.save_note__btn}
                            >
                              {submitting ? "Wait!" : "Save"}
                            </button>
                          </form>
                        )}
                      </Form>
                    </div>
                  </div>
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  <div className="py-3">
                    <p
                      className={`${styles.row__title} ${styles.payment__details__title}`}
                    >
                      Payment Details
                    </p>
                    <div className={styles.payment__details__wrapper}>
                      <div className={`${styles.payment__details}`}>
                        {userCart?.PaymentDetail?.subtotal && (
                          <div className={`${styles.payment_details__row}`}>
                            <p className={styles.details}>Subtotal</p>
                            <span className={styles.value}>
                              {Number(
                                userCart?.PaymentDetail?.subtotal
                              ).toFixed(2)}{" "}
                              SAR
                            </span>
                          </div>
                        )}

                        {userCart?.PaymentDetail?.delivery_fee && (
                          <div className={`${styles.payment_details__row}`}>
                            <p className={styles.details}>Delivery fee</p>
                            <span className={styles.value}>
                              {Number(
                                userCart?.PaymentDetail?.delivery_fee
                              ).toFixed(2)}{" "}
                              SAR
                            </span>
                          </div>
                        )}

                        {userCart?.PaymentDetail?.total_amount && (
                          <div className={`${styles.payment_details__row}`}>
                            <p className={styles.details}>Total amount</p>
                            <span className={`${styles.value} ${styles.total}`}>
                              {Number(
                                userCart?.PaymentDetail?.total_amount
                              ).toFixed(2)}{" "}
                              SAR
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                  {/* ///////////////////////////////////////////////////////////////// */}
                </div>
                <div className={styles.cart__wrapper}>
                  <div className="py-4">
                    <SubmitBtn
                      onClick={() => setCheckout(true)}
                      solidStyle={true}
                    >
                      Checkout
                    </SubmitBtn>
                  </div>
                </div>
              </>
            )}
            {checkout && <CheckoutForm setCheckout={setCheckout} />}
          </div>
        </MenuDropDown>
      );
    }
  }
});
