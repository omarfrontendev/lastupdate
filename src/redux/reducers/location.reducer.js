const LocationReducer = (location = {}, action) => {
  switch (action.type) {
    case "UPDATE__LOCATION":
      return { ...location, ...action?.payload };
    case "CLEAR__LOCATION":
      return { ...action?.payload };
    default:
      return { ...location };
  }
};

export default LocationReducer;
