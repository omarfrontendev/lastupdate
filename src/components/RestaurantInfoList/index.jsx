import React from "react";
import styles from "./.module.scss";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

const RestaurantInfoList = function ({ item }) {
  // const week = [
  //   "saturday",
  //   "monday",
  //   "tuesday",
  //   "wednesday",
  //   "thursday",
  //   "friday",
  //   "sunday",
  // ];

  // const now = new Date();
  // const day = now.getDay();
  // const currentDay = week[day];
  // const workDay = scheduleData !== null ? scheduleData[currentDay] : null;

  // const content =
  //   scheduleData !== null
  //     ? `(${currentDay.toUpperCase()}) ${workDay[0].open}AM - ${
  //         workDay[0].close
  //       }AM`
  //     : "not now";

  const infoList = {
    name: `${item?.name || "Restaurant Name"}`,
    data: [
      {
        key: "Minimum Order Amount",
        value: `SAR ${item?.min_order_price}`,
      },
      {
        key: "Working Hours",
        value: "XXXXXXX",
      },
      {
        key: "Delivery Time",
        value: `${item?.delivery_time} mins`,
      },
      {
        key: "Delivery fee",
        value: `SAR ${item?.delivery_cost}`,
      },
      {
        key: "Rating",
        value: `${item?.rating}/5`,
      },
      {
        key: "Cuisines",
        value: `${String(item?.description)}`,
      },
    ],
  };

  return (
    <div className={styles.info__container}>
      <div className={styles.title}>{infoList?.name}</div>
      <div className={`${styles.data__container} d-flex flex-column`}>
        {infoList.data.map((item, i) => (
          <div
            key={i}
            className={`${styles.signle__row} d-flex justify-content-between`}
          >
            <span className={styles.data__key}>{item.key}</span>
            <span className={styles.data__value}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfoList);
