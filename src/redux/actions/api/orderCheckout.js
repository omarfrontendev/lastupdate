import api from "../../../api";

const orderCheckout = (values) => async (dispatch) => {
  try {
    const res = await api.post(`/checkout`, {
      address_id: 2,
      payment_mode: "cash",
    });
    dispatch({
      type: "SET__ORDER__CHECKOUT",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "SET__ORDER__CHECKOUT",
      payload: {},
    });
  }
};

export default orderCheckout;
