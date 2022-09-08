import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";
import { toggleFavourite } from "../../redux/actions";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { toggleFavourite };

const FavToggleBtn = ({ type, item, toggleFavourite }) => {
  const [isFavourited, setIsFavourited] = useState(item?.is_fav);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      disabled={isLoading}
      className={styles.fav__toggle__btn}
      onClick={async () => {
        setIsLoading(true);
        const res = await toggleFavourite(type, item?.id);
        if (res.success) {
          (res.message === "restaurant Added To Favorite" ||
            res.message === "item Added To Favorite") &&
            setIsFavourited(true);
          (res.message === "restaurant Deleted From Favorite" ||
            res.message === "item Deleted From Favorite") &&
            setIsFavourited(false);
        }
        setIsLoading(false);
      }}
    >
      {!isLoading ? (
        isFavourited ? (
          <AiFillHeart className={styles.like__btn__icon} />
        ) : (
          <AiOutlineHeart className={styles.like__btn__icon} />
        )
      ) : (
        <div
          className={`spinner-border spinner-border-sm ${styles.spinner}`}
          role="status"
        ></div>
      )}
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavToggleBtn);
