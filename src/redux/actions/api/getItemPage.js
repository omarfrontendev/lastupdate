import api from "../../../api";

const getItemPage = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/view-single-item?item_id=${id}`);
    dispatch({
      type: "GET__ITEM__POPUP__DATA",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__ITEM__POPUP__DATA",
      payload: error.response.data,
    });
  }
};

export default getItemPage;
