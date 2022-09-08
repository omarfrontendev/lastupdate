import api from "../../../api";

const getPromoSliders = () => async (dispatch) => {
  try {
    const res = await api.post("/promo-slider", {
      latitude: 29.9570981,
      longitude: 31.260742,
    });
    const mainSlides = JSON.parse(
      JSON.stringify(res.data.data.mainSlides, 0, 2)
    );
    dispatch({
      type: "GET__PROMO__SLIDES",
      payload: [...mainSlides],
    });
  } catch (error) {
    dispatch({
      type: "GET__PROMO__SLIDES",
      payload: [],
    });
  }
};

export default getPromoSliders;
