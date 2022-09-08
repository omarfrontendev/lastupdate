import React, { useState } from "react";
import { CartBtnIcon } from "../../UI/icons";
import SubmitBtn from "../../components/SubmitBtn";
import HeaderItemPrice from "../../components/HeaderItemPrice";
import Modal from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
import styles from "./.module.scss";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import Accordion from "../../components/Accordion";
import AccordionItem from "../../components/AccordionItem";
import AddonBox from "../../components/AddonBox";
import { toggleItemToCart, getUserCart } from "../../redux/actions";
import { Form } from "react-final-form";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { toggleItemToCart, getUserCart };

const ItemDetailsPopUp = ({
  itemDetails,
  toggleItemToCart,
  getUserCart,
  useCart,
}) => {
  const [currentActive, setCurrentActive] = useState(0);
  const onSubmit = async (values) => {};

  return (
    <>
      <Modal id={"item__details__popup"}>
        <PopUpWrapper
          title="Add Item Choices"
          id={"item__details__popup"}
          textStart={true}
        >
          {isEmpty(itemDetails) ? (
            <div className={styles.loading}>
              <div className="text-center">
                <div
                  className={`spinner-border ${styles.spinner}`}
                  role="status"
                ></div>
                <div className="py-3">Please Wait!</div>
              </div>
            </div>
          ) : (
            <>
              <Form onSubmit={onSubmit}>
                {({ handleSubmit, submitting }) => (
                  <form onSubmit={handleSubmit}>
                    <div className={styles.content}>
                      <HeaderItemPrice />
                      <div
                        className={`d-flex flex-column ${styles.acc__container}`}
                        id="ACC__ID"
                      >
                        <Accordion id={"ITEMACCORDION"}>
                          {itemDetails?.addon_categories.map((item, i) => {
                            return (
                              <AccordionItem
                                currentActive={currentActive}
                                setCurrentActive={setCurrentActive}
                                items={item}
                                key={i}
                                id={`ITEMID${i}`}
                                parentID="ITEMACCORDION"
                                index={i}
                              >
                                <div className={styles.addons__container}>
                                  {item?.type === "SINGLE" &&
                                    item?.addon.map((add, i) => (
                                      <AddonBox
                                        name={item?.name}
                                        type={"radio"}
                                        key={i}
                                        title={add?.name}
                                      />
                                    ))}
                                  {item?.type === "MULTI" &&
                                    item?.addon.map((add, i) => (
                                      <AddonBox
                                        name={add?.name}
                                        type={"checkbox"}
                                        key={i}
                                        title={add?.name}
                                      />
                                    ))}
                                </div>
                              </AccordionItem>
                            );
                          })}
                        </Accordion>
                      </div>
                      <div className={styles.btn}>
                        <SubmitBtn
                          // disabled={submitting}
                          type={"submit"}
                          solidStyle={true}
                          // type="button"
                          // className={styles.close__btn}
                          ata-bs-toggle="modal"
                          data-bs-target={`#item__details__popup`}
                        >
                          <div className={`${styles.btn__content}`}>
                            <CartBtnIcon />
                            <span>Add To Cart</span>
                          </div>
                        </SubmitBtn>
                      </div>
                    </div>
                  </form>
                )}
              </Form>
            </>
          )}
        </PopUpWrapper>
      </Modal>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPopUp);
