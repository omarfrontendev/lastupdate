import api from "../../../api";

const addCouponToCart =
  ({ restaurant_id, coupon, subtotal }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/AddCoupounToCart", {
        restaurant_id,
        coupon,
        subtotal,
      });
      dispatch({
        type: "SUBMIT__COUPON__TO__CART",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "SUBMIT__COUPON__TO__CART",
        payload: error.response.data,
      });
    }
  };

export default addCouponToCart;
