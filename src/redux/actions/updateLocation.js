import { isEmpty } from "lodash";

const updateLocation = (location) => (dispatch) => {
  if (location) {
    if (isEmpty(location)) {
      window.localStorage.removeItem("location");
      dispatch({
        type: "CLEAR__LOCATION",
        payload: {},
      });
    } else {
      window.localStorage.setItem("location", JSON.stringify(location));
      dispatch({
        type: "UPDATE__LOCATION",
        payload: location,
      });
    }
  } else {
    const savedLocation = JSON.parse(window.localStorage.getItem("location"));
    dispatch({
      type: "UPDATE__LOCATION",
      payload: savedLocation,
    });
  }
};

export default updateLocation;
