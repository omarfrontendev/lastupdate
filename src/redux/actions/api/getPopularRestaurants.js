import api from "../../../api";

const getPopularRestaurants = () => async (dispatch) => {
  try {
    const res = await api.get("/popular-restaurants", {
      latitude: 29.9570981,
      longitude: 31.260742,
    });
    dispatch({
      type: "GET__POPULAR__RESTAURANTS",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__POPULAR__RESTAURANTS",
      payload: error.response.data,
    });
  }
};

export default getPopularRestaurants;
