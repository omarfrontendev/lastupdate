const recommendItemsReducer = (items = [], action) => {
  switch (action.type) {
    case "GET__RECOMMEND__ITEMS":
      return [...items, ...action?.payload];
    case "CLEAR__RECOMMEND__ITEMS":
      return [...action?.payload];
    default:
      return [...items];
  }
};

export default recommendItemsReducer;
