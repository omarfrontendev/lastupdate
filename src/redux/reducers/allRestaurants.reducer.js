const allRestaurantsReducer = (restaurants = [], action) => {
  switch (action.type) {
    case "GET__ALL__RESTAURANTS":
      return [...restaurants, ...action?.payload];
    case "CLEAR__ALL__RESTAURANTS":
      return [...action?.payload];
    default:
      return [...restaurants];
  }
};

export default allRestaurantsReducer;
