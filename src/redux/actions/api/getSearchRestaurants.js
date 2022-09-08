import api from "../../../api";

const getSearchRestaurants = (query) => async (dispatch) => {
  try {
    const res = await api.post("/search-restaurants", {
      q: query,
      latitude: 29.9570981,
      longitude: 31.260742,
    });
    console.log([...res.data.data.restaurants, ...res.data.data.items]);
    dispatch({
      type: "GET__RESTAURANTS__SEARCH__RESULTS",
      payload: [...res.data.data.restaurants, ...res.data.data.items],
    });
  } catch (error) {
    dispatch({
      type: "GET__RESTAURANTS__SEARCH__RESULTS",
      payload: error.response.data,
    });
  }
};

export default getSearchRestaurants;
