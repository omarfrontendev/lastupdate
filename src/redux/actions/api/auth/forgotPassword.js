import api from "../../../../api";

const forgotPassword = (email) => async (dispatch) => {
  try {
    const res = await api.post("send-password-reset-mail", {
      email,
    });
    dispatch({
      type: "FORGOT__PASSWORD",
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: "FORGOT__PASSWORD/ITEM",
      payload: error.response.data,
    });
    return error.response.data;
  }
};

export default forgotPassword;
