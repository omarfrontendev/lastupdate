import React from "react";
import styles from "./.module.scss";
import { CloseIcon } from "../../UI/icons";

export default function PopUpWrapper({ title, children, id, textStart }) {
  return (
    <div className={styles.pop__up__wrapper}>
      <div
        className={`${styles.pop__up__wrapper__header} ${
          textStart && styles.text__start
        }`}
      >
        <div className={`${styles.pop__up__title}`}>{title}</div>
        <button
          type="button"
          className={styles.close__btn}
          data-bs-toggle="modal"
          data-bs-target={`#${id}`}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={styles.pop__up__content}>{children}</div>
    </div>
  );
}
