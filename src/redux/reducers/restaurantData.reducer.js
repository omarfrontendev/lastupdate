const restaurantDateReducer = (data = {}, action) => {
  switch (action.type) {
    case "GET__RESTAURANT__PAGE__DATA":
      return { ...data, ...action?.payload };
    case "CLEAR__RESTAURANT__PAGE__DATA":
      return { ...action?.payload };
    default:
      return { ...data };
  }
};

export default restaurantDateReducer;
