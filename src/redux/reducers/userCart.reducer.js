const userCartReducer = (cart = {}, action) => {
  switch (action.type) {
    case "GET__USER__CART":
      return { ...action?.payload };
    case "UPDATE__CART__NOTES":
      return { ...cart, ...action?.payload };
    case "CLEAR__USER__CART":
      return { ...action?.payload };
    default:
      return { ...cart };
  }
};

export default userCartReducer;
