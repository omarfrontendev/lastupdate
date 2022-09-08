const itemDataReducer = (data = {}, action) => {
  switch (action.type) {
    case "GET__ITEM__POPUP__DATA":
      return { ...data, ...action?.payload };
    case "CLEAR__ITEM__POPUP__DATA":
      return { ...action?.payload };
    default:
      return { ...data };
  }
};

export default itemDataReducer;
