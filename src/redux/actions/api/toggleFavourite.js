import api from "../../../api";

const toggleFavourite = (type, id) => async (dispatch) => {
  try {
    const res = await api.post("toggle-favorite", {
      type,
      id: String(id),
    });
    dispatch({
      type: "TOGGLE__FAV__RESTAURANT/ITEM",
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: "TOGGLE__FAV__RESTAURANT/ITEM",
      payload: error.response.data,
    });
    return error.response.data;
  }
};

export default toggleFavourite;
