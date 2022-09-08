import api from "../../../../api";
import filterRequestBody from "../../../../utils/filterRequestBody";

const userLogin = (formData) => async (dispatch) => {
  const data = filterRequestBody(formData, "email", "password");
  try {
    const res = await api.post("/login", data);
    dispatch({
      type: "USER__LOGIN__ACTION",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "USER__LOGIN__ACTION",
      payload: error.response.data,
    });
  }
};

export default userLogin;
