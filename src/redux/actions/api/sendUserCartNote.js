import api from "../../../api";

const sendUserCartNote = (values) => async (dispatch) => {
  try {
    const res = await api.post(`/add-notes`, { notes: values });
    dispatch({
      type: "UPDATE__CART__NOTES",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE__CART__NOTES",
      payload: [],
    });
  }
};

export default sendUserCartNote;
