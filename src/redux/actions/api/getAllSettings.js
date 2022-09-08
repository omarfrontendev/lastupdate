import api from "../../../api";

const getAllSettings = () => async (dispatch) => {
  try {
    const res = await api.post("/get-settings");
    let settings = {};
    res.data.data.forEach((item) => {
      settings = { ...settings, [item["key"]]: item["value"] };
    });
    dispatch({
      type: "GET__ALL__GLOBAL__SETTINGS",
      payload: settings,
    });
  } catch (error) {
    dispatch({
      type: "GET__ALL__GLOBAL__SETTINGS",
      payload: error.response.data,
    });
  }
};

export default getAllSettings;
