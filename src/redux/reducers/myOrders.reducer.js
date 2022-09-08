const myOrdersReducer = (orders = {}, action) => {
  switch (action.type) {
    case "GET__MY__ORDERS":
      return {...orders, ...action.payload};
    case "CLEAR__MY__ORDERS":
      return { ...action.payload };
    default:
      return { ...orders };
  }
};

export default myOrdersReducer;