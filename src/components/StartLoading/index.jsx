import React, { useEffect } from "react";
import styles from "./.module.scss";
import { useLottie } from "lottie-react";
import animation from "./picka_logo.json";

export default function StartLoading() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  }, []);

  const options = {
    animationData: animation,
    className: styles.lottie__animate,
    loop: true,
  };

  const { View } = useLottie(options);

  return <div className={styles.loading__container}>{View}</div>;
}
