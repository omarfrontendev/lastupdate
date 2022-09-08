import React, { useEffect, useState } from "react";
import styles from "./.module.scss";
import { Helmet } from "react-helmet";
import LoadWrapper from "../../components/LoadWrapper";

export default function SupportPage() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.support__container}>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <>
          <Helmet>
            <title>Pick • a | Support</title>
          </Helmet>
          <h1 className={styles.title}>Get in touch</h1>
          <p className="">PO Box 413658</p>
          <p>East Wing, B1906, Latifa Towers</p>
          <p>World Trade 1, Sheik Zayed Road, Dubai, UAE</p>
          <p>Telephone: (04) 236 016080074252</p>
          <a className={styles.link} href="mailto:info@pick-a.email">
            info@pick-a.email
          </a>
        </>
      )}
    </div>
  );
}
