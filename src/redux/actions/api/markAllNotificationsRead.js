import api from "../../../api";

const markAllNotificationsRead = () => async (dispatch) => {
  try {
    const res = await api.post("/mark-all-notifications-read");
    dispatch({
      type: "ALL__NOTIFICATIONS__READ",
      payload: res.data.data,
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: "ALL__NOTIFICATIONS__READ",
      payload: error.response.data,
    });
    return error.response.data;
  }
};

export default markAllNotificationsRead;