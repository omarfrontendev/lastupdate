import React, { useEffect, useState } from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { CgTimer } from "react-icons/cg";
import FavToggleBtn from "../FavToggleBtn";
import { connect } from "react-redux";
import {
  getItemRestaurantInfo,
  clearReducer,
  getItemPage,
} from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getItemRestaurantInfo, clearReducer, getItemPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function MealCard({
  type,
  item,
  getItemRestaurantInfo,
  clearReducer,
  getItemPage,
}) {
  const [data, setdata] = useState({});
  useEffect(() => {
    (async () => {
      setdata(await getItemRestaurantInfo(item?.restaurant_id));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.meal__card__wrapper}>
      <div className={styles.meal__like__btn__wrapper}>
        <FavToggleBtn item={item} type={type} />
      </div>
      <div
        data-bs-toggle="modal"
        data-bs-target={`#item__details__popup`}
        className={styles.meal__card}
        onClick={() => {
          clearReducer({ type: "ITEM__POPUP__DATA", payload: {} });
          (async () => {
            await getItemPage(item?.id);
          })();
        }}
      >
        <div className="row g-0 w-100">
          <div className="col">
            <div className={styles.meal__description__wrapper}>
              <h3 className={styles.meal__title}>{item?.name}</h3>
              <p className={styles.restaurant__name}>
                {data?.name || "Loading..."}
              </p>
              <span className={styles.meal__dish}>{item?.category?.name}</span>
              <div className={styles.meal__facts}>
                <div className={styles.meal__rating}>
                  <AiFillStar className={styles.rating__icon} />
                  <span className={styles.meal__rate__value}>
                    {Number(item?.rating).toFixed(1)}
                  </span>
                </div>
                <div className={styles.meal__rating}>
                  <CgTimer className={"a"} />
                  <span className={styles.meal__rate__value}>
                    {item?.delivery_time} min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={styles.meal__image_wrapper}>
            <img
              className={styles.meal__img}
              src={item?.image}
              alt={item?.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
