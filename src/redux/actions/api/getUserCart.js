import api from "../../../api";

const getUserCart = (address_id) => async (dispatch) => {
  try {
    const res = await api.get(`/view-cart`);
    dispatch({
      type: "GET__USER__CART",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__USER__CART",
      payload: {},
    });
  }
};

export default getUserCart;
