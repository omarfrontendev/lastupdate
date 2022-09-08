import React from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { RiMotorbikeLine } from "react-icons/ri";
import { connect } from "react-redux";
import FavToggleBtn from "../FavToggleBtn";
import { lowerCase } from "lodash";
import { clearReducer, getItemPage } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { clearReducer, getItemPage };

const setItemImage = (item) =>
  item?.image.startsWith("/")
    ? `https://pick-a.matnsolutions.com/${item?.image}`
    : item?.image;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RestaurantCard({ type, item, clearReducer, getItemPage }) {
  if (type === "item") {
    const setStyleClasses = (item) =>
      Boolean(parseInt(item.old_price))
        ? styles.discounted
        : Boolean(item.is_new)
        ? styles.new
        : null;

    const calculateDiscount = (item) => {
      return Boolean(parseInt(item.old_price))
        ? ((parseInt(item.old_price) - parseInt(item.price)) /
            parseInt(item.old_price)) *
            100
        : null;
    };

    const setTagContent = (item) =>
      Boolean(parseInt(item.old_price))
        ? `${calculateDiscount(item)} %`
        : Boolean(item.is_new)
        ? "NEW"
        : null;

    return (
      <div className={styles.restaurant__card__wrapper}>
        <div
          className={`${styles.restaurant__card} ${setStyleClasses(item)}`}
          data-bs-toggle="modal"
          data-bs-target={`#item__details__popup`}
          onClick={() => {
            clearReducer({ type: "ITEM__POPUP__DATA", payload: {} });
            (async () => {
              await getItemPage(item?.id);
            })();
          }}
        >
          {Boolean(item?.is_new) || parseInt(item?.old_price) ? (
            <span className={styles.tag}>{setTagContent(item)}</span>
          ) : null}
          <div className={styles.closed__overlay}></div>
          <div className={styles.restaurant__logo__wrapper}>
            <img
              className={styles.restaurant__logo}
              src={setItemImage(item)}
              alt={item?.name}
            />
          </div>
          <h5 className={styles.restaurant__name}>{item?.name}</h5>
          <span className={styles.restaurant__categories}>
            {item?.description || item?.category?.name}
          </span>
          <div className={styles.restaurant__facts}>
            <div className={styles.restaurant__rating}>
              <AiFillStar className={styles.star__icon} />
              <span className={styles.rate__value}>
                {Number(item?.rating).toFixed(1)}
              </span>
            </div>
            <div className={styles.restaurant__rating}>
              <p className={styles.item__price}>
                {Number(item?.price)}
                <span className={styles.item__currency}> SAR</span>
              </p>
            </div>
            <div className={styles.restaurant__rating}>
              <RiMotorbikeLine className={styles.bike__icon} />
              <span className={styles.rate__value}>
                {item?.delivery_time} MIN
              </span>
            </div>
          </div>
        </div>
        <div className={styles.like__btn__wrapper}>
          <FavToggleBtn type={type} item={item} />
        </div>
      </div>
    );
  }

  if (type === "restaurant") {
    const isClosed = (item) => {
      let closed = false;
      if (item?.is_schedulable) {
        const day = lowerCase(
          new Date().toLocaleDateString("en", { weekday: "long" })
        );
        const schedule_table = JSON.parse(item?.schedule_data);

        for (const DAY in schedule_table) {
          if (Object.hasOwnProperty.call(schedule_table, DAY)) {
            if (DAY === day) {
              const Hours = schedule_table[DAY];
              // eslint-disable-next-line no-loop-func
              Hours.forEach((interval) => {
                // GET ALL ABOUT TIME NOW
                const currentTimeNow = new Date();
                // DETERMINE OPENING AND CLOSEING TIMES
                const openTime = new Date();
                openTime.setHours(interval?.open?.split(":")[0]);
                openTime.setMinutes(interval?.open?.split(":")[1]);
                openTime.setSeconds(0);
                const closeTime = new Date();
                closeTime.setHours(interval?.close?.split(":")[0]);
                closeTime.setMinutes(interval?.close?.split(":")[1]);
                closeTime.setSeconds(0);
                if (
                  !(
                    currentTimeNow.getTime() > openTime.getTime() &&
                    currentTimeNow.getTime() < closeTime.getTime()
                  )
                ) {
                  closed = true;
                }
              });
            }
          }
        }
      }
      return closed;
    };
    return (
      <div className={styles.restaurant__card__wrapper}>
        {/* NOT CLOSED */}
        {!isClosed(item) && (
          <Link to={`/restaurant/${item.slug}`}>
            <div className={`${styles.restaurant__card}`}>
              <div className={styles.closed__overlay}></div>
              <div className={styles.restaurant__logo__wrapper}>
                <img
                  className={styles.restaurant__logo}
                  src={setItemImage(item)}
                  alt={item?.name}
                />
              </div>
              <h5 className={styles.restaurant__name}>{item?.name}</h5>
              <span className={styles.restaurant__categories}>
                {item?.description || item?.category?.name}
              </span>
              <div className={styles.restaurant__facts}>
                <div className={styles.restaurant__rating}>
                  <AiFillStar className={styles.star__icon} />
                  <span className={styles.rate__value}>
                    {Number(item?.rating).toFixed(1)}
                  </span>
                </div>
                <div className={styles.restaurant__rating}>
                  <RiMotorbikeLine className={styles.bike__icon} />
                  <span className={styles.rate__value}>
                    {item?.delivery_time} MIN
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}
        {/* CLOSED */}
        {isClosed(item) && (
          <div className={`${styles.restaurant__card} ${styles.closed}`}>
            <div className={styles.closed__overlay}></div>
            <div className={styles.restaurant__logo__wrapper}>
              <img
                className={styles.restaurant__logo}
                src={setItemImage(item)}
                alt={item?.name}
              />
            </div>
            <h5 className={styles.restaurant__name}>{item?.name}</h5>
            <span className={styles.restaurant__categories}>
              {item?.description || item?.category?.name}
            </span>
            <div className={styles.restaurant__facts}>
              <div className={styles.restaurant__rating}>
                <AiFillStar className={styles.star__icon} />
                <span className={styles.rate__value}>
                  {Number(item?.rating).toFixed(1)}
                </span>
              </div>
              <div className={styles.restaurant__rating}>
                <RiMotorbikeLine className={styles.bike__icon} />
                <span className={styles.rate__value}>
                  {item?.delivery_time} MIN
                </span>
              </div>
            </div>
          </div>
        )}
        <div className={styles.like__btn__wrapper}>
          <FavToggleBtn type={type} item={item} />
        </div>
      </div>
    );
  }
});
