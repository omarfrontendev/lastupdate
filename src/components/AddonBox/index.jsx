import React from "react";
import styles from "./.module.scss";

export default function AddonBox({ type, name, title, inputType }) {
  return (
    <>
      <label className={styles.addon__wrapper}>
        <input name={name} className={styles.addon__box} type={type} />
        <span>{title}</span>
      </label>
    </>
  );
}
