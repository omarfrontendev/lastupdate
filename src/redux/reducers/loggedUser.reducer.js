const loggedUserReducer = (loggedUser = {}, action) => {
  switch (action.type) {
    // case "USER__REGISTER__ACTION":
    // return { ...loggedUser, ...action?.payload.data };
    // case "USER__LOGIN__ACTION":
    // return { ...loggedUser, ...action?.payload.data };
    case "UPDATE__CURRENT__USER":
      return { ...loggedUser, ...action?.payload };
    default:
      return { ...loggedUser };
  }
};

export default loggedUserReducer;
