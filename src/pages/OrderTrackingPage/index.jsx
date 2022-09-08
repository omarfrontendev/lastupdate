import React, { useEffect, useState } from "react";
import { PhoneIcon } from "../../UI/icons";
import styles from "./.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { connect } from "react-redux";
import LoadWrapper from "../../components/LoadWrapper";
import { Helmet } from "react-helmet";
import OrderTrackingMap from "../../components/OrderTrackingMap";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function OrderTrackingPage({
  orders
}) {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <>
          <Helmet>
            <title>Pick • a | Track Your Order</title>
          </Helmet>
          <div className={styles.tracking__container}>
            <h3 className={styles.tracking__title}>Tracking Order</h3>
            <div className={styles.tracking__map}>
              <OrderTrackingMap orders={orders} />
            </div>
            <div
              className={`${styles.tracking__wedgits} d-flex align-items-center justify-content-between`}
            >
              <div className={styles.tracking__status}>
                <div className={`${styles.status__title} position-relative`}>
                  Status
                </div>
                <div
                  className={`${styles.status} d-flex align-items-center justify-content-between position-relative`}
                >
                  <div
                    className={`${styles.status__item} ${styles.active} d-flex flex-column align-items-center`}
                  >
                    <div className={styles.status__word}>Approved</div>
                    <div className={styles.status__bullets}></div>
                  </div>
                  <div
                    className={`${styles.status__item} d-flex flex-column align-items-center`}
                  >
                    <div className={styles.status__word}>Setting up</div>
                    <div className={styles.status__bullets}></div>
                  </div>
                  <div
                    className={`${styles.status__item} d-flex flex-column align-items-center`}
                  >
                    <div className={styles.status__word}>Out for Delivery</div>
                    <div className={styles.status__bullets}></div>
                  </div>
                  <div
                    className={`${styles.status__item} d-flex flex-column align-items-center`}
                  >
                    <div className={styles.status__word}>Recived</div>
                    <div className={styles.status__bullets}></div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.tracking__supports} d-flex flex-column`}
              >
                <div
                  className={`${styles.support__calling} d-flex align-items-center justify-content-between`}
                >
                  <div className={`${styles.left__support} d-flex flex-column`}>
                    <div className={styles.support__title}>Sheila Figueroa</div>
                    <div className={styles.support__subtitle}>Delivery Boy</div>
                  </div>
                  <button className={styles.calling__btn}>
                    <PhoneIcon />
                  </button>
                </div>
                <div
                  className={`${styles.support__calling} d-flex align-items-center justify-content-between`}
                >
                  <div className={`${styles.left__support} d-flex flex-column`}>
                    <div className={styles.support__title}>Support</div>
                  </div>
                  <button
                    className={`${styles.calling__btn} ${styles.arrow__btn}`}
                    data-bs-toggle="modal"
                    data-bs-target={`#support`}
                  >
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
});
