const promoSlidersReducer = (slides = [], action) => {
  switch (action.type) {
    case "GET__PROMO__SLIDES":
      return [...slides, ...action?.payload];
    case "CLEAR__PROMO__SLIDES":
      return [...action?.payload];
    default:
      return [...slides];
  }
};

export default promoSlidersReducer;
