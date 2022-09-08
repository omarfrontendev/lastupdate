import api from "../../../api";

const getItemsCategories = () => async (dispatch) => {
  try {
    const res = await api.get("/item-categories");
    dispatch({
      type: "GET__ITEMS__CATEGORIES",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__ITEMS__CATEGORIES",
      payload: error.response.data,
    });
  }
};

export default getItemsCategories;