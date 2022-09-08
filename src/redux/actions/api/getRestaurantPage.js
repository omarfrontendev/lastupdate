import api from "../../../api";

const getRestaurantPage = (slug) => async (dispatch) => {
  try {
    const res = await api.post("/get-store-page-slug", {
      slug,
    });
    dispatch({
      type: "GET__RESTAURANT__PAGE__DATA",
      payload: res.data.data,
    });
    return res.data.success;
  } catch (error) {
    dispatch({
      type: "GET__RESTAURANT__PAGE__DATA",
      payload: error.response.data,
    });
    return error.response.data.success;
  }
};

export default getRestaurantPage;
