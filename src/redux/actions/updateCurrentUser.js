const updateCurrentUser = () => (dispatch) => {
  try {
    const user = JSON.parse(window.localStorage.getItem("user"));
    dispatch({
      type: "UPDATE__CURRENT__USER",
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE__CURRENT__USER",
      payload: {},
    });
  }
};

export default updateCurrentUser;
