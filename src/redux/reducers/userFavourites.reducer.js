const userFavouritesReducer = (items = [], action) => {
  switch (action.type) {
    case "GET__USER__FAVOURITES":
      return [...action?.payload];
    case "CLEAR__USER__FAVOURITES":
      return [...action?.payload];
    default:
      return [...items];
  }
};

export default userFavouritesReducer;
