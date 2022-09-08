import api from "../../../api";

const getItemRestaurantInfo = (id) => async () => {
  try {
    const res = await api.get(`/get-store-page?id=${id}`);
    return res.data.data.restaurant;
  } catch (error) {
    return null;
  }
};

export default getItemRestaurantInfo;
