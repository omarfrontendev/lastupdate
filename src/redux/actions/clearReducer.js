const clearReducer =
  ({ type, payload }) =>
  (dispatch) => {
    dispatch({
      type: `CLEAR__${type}`,
      payload,
    });
  };

export default clearReducer;
