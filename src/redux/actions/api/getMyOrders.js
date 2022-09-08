import api from "../../../api";

const getMyOrders = () => async (dispatch) => {
  try {
    const res = await api.get(`/my-orders`);
    dispatch({
      type: "GET__MY__ORDERS",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__MY__ORDERS",
      payload: error.response,
    });
  }
};

export default getMyOrders;