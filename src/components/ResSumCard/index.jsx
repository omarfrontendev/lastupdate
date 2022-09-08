import React from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FavToggleBtn from "../FavToggleBtn";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ResSumCard({ type, item }) {
  return (
    <div className={styles.res__summary__card__wrapper}>
      <Link to={`/restaurant/${item?.slug}`}>
        <div className={styles.res__summary__card}>
          <div className={styles.res__img__wrapper}>
            <img
              className={styles.restaurant__logo}
              src={item?.image}
              alt={item?.name}
            />
          </div>
          <h6 className={styles.res__name}>{item?.name}</h6>
          <div className={styles.res__rate}>
            <AiFillStar className={styles.star__icon} />
            <span className={styles.rate__value}>
              {Number(item?.rating).toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
      <div className={styles.like__btn__wrapper}>
        <FavToggleBtn type={type} item={item} />
      </div>
    </div>
  );
});
