import React from "react";
import styles from "./.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import Modal from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress } from "react-places-autocomplete";
import GoogleMapComponent from "../GoogleMapComponent";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { connect } from "react-redux";
import { updateLocation, checkIfAreaIsDeliverable } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { updateLocation, checkIfAreaIsDeliverable };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ShippingPopUp({
  location,
  updateLocation,
  checkIfAreaIsDeliverable,
}) {
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
  return (
    <Modal maxWidth="696px" id={"shipping__modal"}>
      <div className={styles.shipping__popup__wrapper}>
        <PopUpWrapper id={"shipping__modal"} title={"Address for Shipping"}>
          <div className={styles.search__form__wrapper}>
            <form className={styles.search__form}>
              <RiSearchLine />
              <div className="w-100">
                <PlacesAutocomplete
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
                    <div>
                      <div className={styles.location__search__form}>
                        <input
                          {...getInputProps({
                            placeholder:
                              "Find a location, a street, or a landmark...",
                            className: styles.search__input,
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
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
            </form>
          </div>
          <div className={styles.map__wrapper}>
            <GoogleMapComponent isMarkerShown />
          </div>
          <footer className={styles.footer}>
            <div className="row g-0">
              <div className="col mx-1 text-end">
                <button
                  disabled={!location.deliverable || !location.name}
                  data-bs-toggle={
                    location.deliverable && location.name && "modal"
                  }
                  data-bs-target={
                    location.deliverable && location.name && `#shipping__modal`
                  }
                  className={styles.submit__btn}
                >
                  <div>
                    <HiLocationMarker />
                    <span>
                      {!location?.deliverable || !location.name
                        ? "Delivery is not available for this area"
                        : "Deliver Here"}
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="col mx-1 text-end">
              {location?.deliverable && location.name && (
                <p className={styles.shipping__address}>
                  <span>Deliver to :</span> {location?.name}
                </p>
              )}
            </div>
          </footer>
        </PopUpWrapper>
      </div>
    </Modal>
  );
});
