import React, { useEffect } from "react";
import styles from "./.module.scss";
import { useLottie } from "lottie-react";
import animation from "./picka_logo.json";
import { Helmet } from "react-helmet";

export default function LoadWrapper() {
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

  return (
    <>
      <Helmet>
        <title>Pick • a | please wait ...</title>
      </Helmet>
      <div className={styles.loading__container}>{View}</div>
    </>
  );
}
