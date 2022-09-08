import React from "react";
import { LogoutIcon, OrderIcon, SettingIcon } from "../../UI/icons";
import { IoIosArrowForward, IoMdNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import MenuDropDown from "../MenuDropDown";
import { Link } from "react-router-dom";
import styles from "./.module.scss";

export default function UserDropdown({
  setShowCart,
  setShowMessages,
  setShowNotifications,
  showHeader,
}) {
  return (
    <MenuDropDown alignedEnd={true} showHeader={showHeader}>
      <div className={`d-flex flex-column ${styles.user__dropdown}`}>
        <Link
          to={"/my-order"}
          className={`d-flex justify-content-between align-items-center ${styles.row}`}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <OrderIcon />
            <p className={styles.title}>My Orders</p>
          </div>
          <IoIosArrowForward />
        </Link>
        <Link
          to={"/change-password"}
          className={`d-flex justify-content-between align-items-center ${styles.row}`}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <SettingIcon />
            <p className={styles.title}>Change Password</p>
          </div>
          <IoIosArrowForward />
        </Link>
        <button
          className={`d-flex justify-content-between align-items-center ${styles.small__screen} ${styles.row}`}
          onClick={() => setShowCart((prev) => !prev)}
        >
          <div className={`d-flex align-items-center   ${styles.left__row}`}>
            <FaShoppingCart className={styles.icon} />
            <p className={styles.title}>Cart</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button
          onClick={() => setShowMessages((prev) => !prev)}
          className={`d-flex justify-content-between align-items-center ${styles.small__screen} ${styles.row}`}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <RiMessage2Fill className={styles.icon} />
            <p className={styles.title}>Messages</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button
          onClick={() => setShowNotifications((prev) => !prev)}
          className={`d-flex justify-content-between align-items-center ${styles.small__screen} ${styles.row}`}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <IoMdNotifications className={styles.icon} />
            <p className={styles.title}>Notifications</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("auth_token");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
          className={`d-flex justify-content-between align-items-center ${styles.row} `}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <LogoutIcon />
            <p className={`${styles.title} ${styles.red__title}`}>Logout</p>
          </div>
        </button>
      </div>
    </MenuDropDown>
  );
}
