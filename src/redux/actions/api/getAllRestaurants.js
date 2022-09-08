import api from "../../../api";

const getAllRestaurants = () => async (dispatch) => {
  try {
    const res = await api.get("/view-restaurants");
    dispatch({
      type: "GET__ALL__RESTAURANTS",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__ALL__RESTAURANTS",
      payload: error.response.data,
    });
  }
};

export default getAllRestaurants;
