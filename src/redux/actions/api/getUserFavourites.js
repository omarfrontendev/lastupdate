import api from "../../../api";

const getUserFavourites = (type) => async (dispatch) => {
  try {
    const res = await api.get(
      `/get-userfavorite-stores-items?favoriteable_type=${type}`
    );
    dispatch({
      type: "GET__USER__FAVOURITES",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__USER__FAVOURITES",
      payload: [],
    });
  }
};

export default getUserFavourites;
