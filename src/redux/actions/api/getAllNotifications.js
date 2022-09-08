import api from "../../../api";

const getAllNotifications = () => async (dispatch) => {
  try {
    const res = await api.post("/get-user-notifications");
    dispatch({
      type: "GET__ALL__NOTIFICATIONS",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__ALL__NOTIFICATIONS",
      payload: error.response,
    });
  }
};

export default getAllNotifications;