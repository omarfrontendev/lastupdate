const popularRestaurantsReducer = (popularRestaurants = [], action) => {
  switch (action.type) {
    case "GET__POPULAR__RESTAURANTS":
      return [...popularRestaurants, ...action?.payload];
    case "CLEAR__POPULAR__RESTAURANTS":
      return [...action?.payload];
    default:
      return [...popularRestaurants];
  }
};

export default popularRestaurantsReducer;
