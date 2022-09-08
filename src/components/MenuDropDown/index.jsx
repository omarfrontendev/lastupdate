import React from "react";
import styles from "./.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MenuDropDown({
  alignedEnd,
  margin,
  children,
  notMenu,
  onClose,
  showHeader,
}) {
  return (
    <div
      style={{ marginLeft: margin || "-124px" }}
      className={`dropdown-menu ${notMenu && styles.not__menu} ${
        alignedEnd && "dropdown-menu-end"
      } ${styles.dropdown__menu__wrapper}`}
    >
      {notMenu && (
        <button
          onClick={() => onClose((prev) => !prev)}
          className={styles.close__btn}
        >
          <AiOutlineCloseCircle />
        </button>
      )}
      <div
        className={`${styles.menu__content__wrapper} ${
          alignedEnd && styles.righted__menu
        } ${showHeader === null ? "" : showHeader ? "" : styles.down}`}
      >
        {children}
      </div>
    </div>
  );
}
