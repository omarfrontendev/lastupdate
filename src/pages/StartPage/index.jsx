import React, { useState, useEffect } from "react";
import styles from "./.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { VscArrowRight } from "react-icons/vsc";
import { TbCurrentLocation } from "react-icons/tb";
import { HuaweiStoreLogo, AppStoreLogo, PlayStoreLogo } from "../../UI/icons";
import { Helmet } from "react-helmet";
import StartLoading from "../../components/StartLoading";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress } from "react-places-autocomplete";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { updateLocation, checkIfAreaIsDeliverable } from "../../redux/actions";
import { FaRegTimesCircle } from "react-icons/fa";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { updateLocation, checkIfAreaIsDeliverable };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function StartPage({
  errorMsg,
  location,
  updateLocation,
  checkIfAreaIsDeliverable,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(errorMsg);

  const handleChange = (address) => {
    updateLocation({ name: address });
  };

  const handleSelect = async (address) => {
    const results = await geocodeByAddress(address);
    updateLocation({
      name: address,
      lat: results[0]?.geometry?.location?.lat(),
      lng: results[0]?.geometry?.location?.lng(),
      deliverable: await checkIfAreaIsDeliverable({
        lat: +results[0]?.geometry?.location?.lat(),
        lng: +results[0]?.geometry?.location?.lng(),
      }),
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <StartLoading />
      ) : (
        <>
          <Helmet>
            <title>
              Pick • a | Order Food Online From Delivery Restaurants in Emirates
            </title>
          </Helmet>
          <div className={styles.startscreen__container}>
            <div className={styles.startscreen__wrapper}>
              <h1 className={styles.screen__main__heading}>
                Online Food Ordering
              </h1>
              <div className={styles.location__search__form__wrapper}>
                {error && (
                  <span className={styles.error__msg}>
                    {!location.name && "Please select your delivery location."}
                    {location.name &&
                      !location.deliverable &&
                      "Delivery is not available for this area."}
                  </span>
                )}
                <HiOutlineLocationMarker className={styles.location__icon} />
                <form className={styles.location__search__form}>
                  {
                    <PlacesAutocomplete
                      searchOptions={{}}
                      value={location?.name || ""}
                      onChange={handleChange}
                      onSelect={handleSelect}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <>
                          <div className={styles.location__search__form}>
                            <input
                              onFocus={() => {
                                setError(false);
                              }}
                              {...getInputProps({
                                placeholder:
                                  "Find a location, a street, or a landmark...",
                                className: styles.form__search__input,
                              })}
                            />
                          </div>
                          <div
                            className={`${styles.results__container} autocomplete-dropdown-container`}
                          >
                            {loading && (
                              <div className={styles.loading}>
                                <div className="text-center">
                                  <div
                                    className={`spinner-border ${styles.spinner}`}
                                    role="status"
                                  ></div>
                                  <div className="py-3">Please Wait!</div>
                                </div>
                              </div>
                            )}
                            {!loading &&
                              suggestions?.map((suggestion, i) => {
                                const className = suggestion.active
                                  ? "suggestion-item--active"
                                  : "suggestion-item";
                                return (
                                  <div
                                    data-bs-toggle={"modal"}
                                    data-bs-target={`#shipping__modal`}
                                    key={i}
                                    {...getSuggestionItemProps(suggestion, {
                                      className: `${className} ${styles.contain}`,
                                    })}
                                  >
                                    <span className={styles.icon}>
                                      <HiOutlineLocationMarker />
                                    </span>
                                    <span>{suggestion.description}</span>
                                  </div>
                                );
                              })}
                          </div>
                        </>
                      )}
                    </PlacesAutocomplete>
                  }
                  <button
                    onClick={() => {
                      (isEmpty(location) || !location.deliverable) &&
                        setError(true);
                      !isEmpty(location) &&
                        location.deliverable &&
                        location?.name &&
                        window.location.replace("/home");
                    }}
                    className={styles.form__submit__btn}
                    type="button"
                  >
                    <VscArrowRight />
                  </button>
                </form>
                <button
                  onClick={() => {
                    !isEmpty(location) && updateLocation({});
                  }}
                  className={styles.location__btn}
                  data-bs-toggle={isEmpty(location) && "modal"}
                  data-bs-target={isEmpty(location) && `#shipping__modal`}
                >
                  {isEmpty(location) || !location.name ? (
                    <TbCurrentLocation />
                  ) : (
                    <FaRegTimesCircle />
                  )}
                </button>
              </div>
              <h2 className={styles.slogan}>Pick anything you want</h2>
              <p className={styles.description}>
                From thousands of nearby restaurants, You may order your
                favourite food online.
              </p>
              <ul className={styles.app__links__list}>
                <li className={styles.app__link__wrapper}>
                  <a href="/" className={styles.app__link} target={"_blank"}>
                    <PlayStoreLogo />
                  </a>
                </li>
                <li className={styles.app__link__wrapper}>
                  <a href="/" className={styles.app__link} target={"_blank"}>
                    <AppStoreLogo />
                  </a>
                </li>
                <li className={styles.app__link__wrapper}>
                  <a href="/" className={styles.app__link} target={"_blank"}>
                    <HuaweiStoreLogo />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
});
