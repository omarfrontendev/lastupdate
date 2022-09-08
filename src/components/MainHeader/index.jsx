import React, { useEffect, useRef, useState } from "react";
import styles from "./.module.scss";
import { AiFillCaretDown } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty, debounce } from "lodash";
import { useCallback } from "react";

// DROPDOWN MENUS
import CartDropdown from "../CartDropdown";
import UserDropdown from "../UserDropdown";
import MessagesDropdown from "../MessagesDropdown";
import NotificationsDropdown from "../NotificationsDropdown";

import {
  FilterIcon,
  CartIcon,
  MsgIcon,
  BillIcon,
  UserIcon,
} from "../../UI/icons";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function MainHeader({ loggedUser, userCart }) {
  const navigate = useNavigate();
  const headerRef = useRef();
  const [showHeader, setShowHeader] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ShowCart, setShowCart] = useState(false);
  const [ShowMessages, setShowMessages] = useState(false);
  const [ShowNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (document.body.getBoundingClientRect().top < 0) {
        setScrollPosition(document.body.getBoundingClientRect().top);
        setShowHeader(
          document.body.getBoundingClientRect().top > scrollPosition
        );
      } else {
        setShowHeader(null);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [scrollPosition]);

  const handleDebounceFn = (query) => {
    query ? navigate(`/search?query=${query}`) : navigate("/home");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const DEBOUNCE = useCallback(debounce(handleDebounceFn, 1000), []);

  const handleInputChange = (event) => {
    DEBOUNCE(event.target.value);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.main__header} ${
          showHeader === null
            ? ""
            : showHeader
            ? styles.header__show
            : styles.header__hide
        }`}
      >
        <div className={`container__wrapper ${styles.main__header__wrapper}`}>
          {isEmpty(loggedUser) && (
            <button
              type="button"
              className={styles.signup_login__btn}
              data-bs-toggle="modal"
              data-bs-target={`#member__area__modal`}
            >
              <UserIcon />
              <span>Sign In/Sign up</span>
            </button>
          )}
          {!isEmpty(loggedUser) && (
            <div className={`row g-0 ${styles.header__wrapper}`}>
              <div className="col-9 col-sm-10 col-md-7">
                <div className={styles.search__form__container}>
                  <form
                    className={styles.search__form}
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <RiSearchLine className={styles.search__icon} />
                    <input
                      onChange={handleInputChange}
                      className={styles.search__input__field}
                      type="text"
                      placeholder="Search Food or Resturant ..."
                    />
                  </form>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={`#search__filters__modal`}
                    className={styles.filter_btn}
                  >
                    <FilterIcon />
                  </button>
                </div>
              </div>
              <div className="col-3 col-sm-2 col-md-5">
                <ul className={styles.user__actions__list}>
                  <li className={styles.list__item}>
                    <div className="dropdown">
                      <button
                        className={`${styles.user__settings_list} dropdown-toggle`}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-auto-close="outside"
                      >
                        <CartIcon />
                        {userCart?.items?.length && (
                          <span className={styles.count__wrapper}>
                            {userCart?.items?.length}
                          </span>
                        )}
                      </button>
                      <CartDropdown showHeader={showHeader} />
                    </div>
                  </li>
                  <li className={styles.list__item}>
                    <div className="dropdown">
                      <button
                        className={`${styles.user__settings_list} dropdown-toggle`}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-auto-close="outside"
                        data-bs-display="static"
                      >
                        <MsgIcon />
                        {/* <span className={styles.count__wrapper}>6</span> */}
                      </button>
                      <MessagesDropdown showHeader={showHeader} />
                    </div>
                  </li>
                  <li className={styles.list__item}>
                    <div className="dropdown">
                      <button
                        className={`${styles.user__settings_list} dropdown-toggle`}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-auto-close="outside"
                        data-bs-display="static"
                      >
                        <BillIcon />
                        {/* <span className={styles.count__wrapper}>+9</span> */}
                      </button>
                      <NotificationsDropdown showHeader={showHeader} />
                    </div>
                  </li>
                  <li className="ms-3">
                    <div className="dropdown">
                      <button
                        className={`btn dropdown-toggle ${styles.user__settings_list}`}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-auto-close="auto-close"
                      >
                        <div
                          className={`${styles.user__avatar__container} me-3`}
                        ></div>
                        <div className={`mx-2 ${styles.user__info}`}>
                          <p className={`${styles.user__name}`}>
                            {loggedUser?.name}
                          </p>
                          <p className={`${styles.user__role}`}>Customer</p>
                        </div>
                        <AiFillCaretDown className="ms-2" />
                      </button>
                      <UserDropdown
                        showHeader={showHeader}
                        setShowCart={setShowCart}
                        setShowMessages={setShowMessages}
                        setShowNotifications={setShowNotifications}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
      {ShowCart && <CartDropdown notMenu={true} onClose={setShowCart} />}
      {ShowMessages && (
        <MessagesDropdown notMenu={true} onClose={setShowMessages} />
      )}
      {ShowNotifications && (
        <NotificationsDropdown notMenu={true} onClose={setShowNotifications} />
      )}
    </>
  );
});
