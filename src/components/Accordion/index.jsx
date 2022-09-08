import React from "react";
import styles from "./.module.scss";

export default function Accordion({ id, children }) {
  return (
    <div className={`${styles.accordion} accordion`} id={id}>
      {children}
    </div>
  );
}
