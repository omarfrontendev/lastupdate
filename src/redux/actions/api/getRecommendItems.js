import api from "../../../api";

const getRecommendItems = () => async (dispatch) => {
  try {
    const res = await api.get("/recommend-items");
    dispatch({
      type: "GET__RECOMMEND__ITEMS",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__RECOMMEND__ITEMS",
      payload: error.response.data,
    });
  }
};

export default getRecommendItems;
