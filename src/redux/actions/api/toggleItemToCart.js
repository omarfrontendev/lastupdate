import api from "../../../api";

const toggleItemToCart =
  ({ item_id, restaurant_id, action }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/cart-items-action", {
        item_id,
        restaurant_id,
        action,
      });
      dispatch({
        type: "TOGGLE__ITEM__TO__CART",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TOGGLE__ITEM__TO__CART",
        payload: error.response.data,
      });
    }
  };

export default toggleItemToCart;
