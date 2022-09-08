import api from "../../../api";

const checkIfAreaIsDeliverable =
  ({ lat, lng }) =>
  async () => {
    try {
      const res = await api.post("/get-delivery-restaurants", {
        latitude: +lat,
        longitude: +lng,
      });
      return res.data.data.length ? true : false;
    } catch (error) {
      return error.response.data.success;
    }
  };

export default checkIfAreaIsDeliverable;
