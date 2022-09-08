import api from "../../../api";

const markOneNotificationRead = (id) => async (dispatch) => {
  try {
    const res = await api.post("/mark-one-notification-read", {
      notification_id: id
    });
    dispatch({
      type: "MARK__NOTIFICATION__READ",
      payload: res.data.data,
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: "MARK__NOTIFICATION__READ",
      payload: error.response.data,
    });
    return error.response.data;
  }
};

export default markOneNotificationRead;