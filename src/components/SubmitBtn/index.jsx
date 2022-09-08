import React from "react";
import styles from "./.module.scss";

export default function SubmitBtn({
  children,
  type,
  onClick,
  solidStyle,
  disabled,
  smBorder,
}) {
  return (
    <button
      disabled={disabled}
      className={`${styles.submit__btn} ${smBorder && styles.sm__border} ${
        solidStyle && styles.solid__btn
      }`}
      type={type || "button"}
      onClick={type !== "submit" ? onClick : null}
    >
      {!disabled && children}
      {disabled && (
        <div
          className={`spinner-border spinner-border-sm ${styles.spinner}`}
          role="status"
        ></div>
      )}
    </button>
  );
}
