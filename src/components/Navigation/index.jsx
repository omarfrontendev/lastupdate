import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { updateCurrentUser, updateLocation } from "../../redux/actions";

export const Navigation = ({
  serverResponse,
  updateCurrentUser,
  updateLocation,
}) => {
  const getUserGeoLocation = () => {
    if (window.navigator.geolocation) {
      let latitude, longitude;
      window.navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        window.localStorage.setItem(
          "currentLocation",
          JSON.stringify({
            lat: latitude,
            lng: longitude,
          })
        );
      });
    }
  };

  useLayoutEffect(() => {
    updateCurrentUser();
    updateLocation();
    getUserGeoLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (serverResponse?.data?.auth_token) {
      localStorage.setItem("user", JSON.stringify(serverResponse.data));
      localStorage.setItem("auth_token", serverResponse.data.auth_token);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [serverResponse]);

  return <></>;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { updateCurrentUser, updateLocation };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
