import React, { useEffect } from "react";
import styles from "./.module.scss";
import { Helmet } from "react-helmet";

export default function NotFound() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  }, []);

  return (
    <div className={styles.not__found__wrapper}>
      <Helmet>
        <title>Pick • A | Not Found</title>
      </Helmet>
      <img alt="notfound__error__img" src="/assets/notfound.png" />
    </div>
  );
}
