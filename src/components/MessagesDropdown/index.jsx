import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import MenuDropDown from "../MenuDropDown";
import styles from "./.module.scss";

function MessagesDropdown({ notMenu, onClose, showHeader }) {
  return (
    <MenuDropDown
      showHeader={showHeader}
      margin={"-62px"}
      notMenu={notMenu}
      onClose={onClose}
    >
      <div className={styles.messageDropdown}>
        <div className={styles.header__dropdown}>
          <div
            className={`d-flex align-items-center ${styles.message__header}`}
          >
            <button className={styles.service__btn}>Customer Service</button>
            <button className={styles.delivery__btn}>Delivery Boy</button>
          </div>
        </div>
        <div className={styles.chat__content}>
          <div className={styles.cutomer__service}>
            <div className={styles.customer_services__title}>
              Customer Service
            </div>
            <span className={styles.date}>6th July</span>
            <p className={styles.cutomer__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.customer}>
            <div className={styles.customer__name}>Ahmed Naser</div>
            <span className={styles.date}>6th July</span>
            <p className={styles.cutomer__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.customer}>
            <div className={styles.customer__name}>Ahmed Naser</div>
            <span className={styles.date}>6th July</span>
            <p className={styles.cutomer__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.customer}>
            <div className={styles.customer__name}>Ahmed Naser</div>
            <span className={styles.date}>6th July</span>
            <p className={styles.cutomer__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.customer}>
            <div className={styles.customer__name}>Ahmed Naser</div>
            <span className={styles.date}>6th July</span>
            <p className={styles.cutomer__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.add__message}`}
        >
          <input
            className={styles.message__input}
            type="text"
            placeholder="Type message ..."
            name="message"
          />
          <button className={styles.message__btn}>
            <RiSendPlane2Fill />
          </button>
        </div>
      </div>
    </MenuDropDown>
  );
}

export default MessagesDropdown;
