import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OffersSlider from "../../components/OffersSlider";
import RecommendedSlider from "../../components/RecommendedSlider";
import PopRestaurantsSlider from "../../components/PopRestaurantsSlider";
import { Helmet } from "react-helmet";
import {
  getPopularRestaurants,
  getPromoSliders,
  getRecommendItems,
  clearReducer,
} from "../../redux/actions";
import LoadWrapper from "../../components/LoadWrapper";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getPopularRestaurants,
  getPromoSliders,
  getRecommendItems,
  clearReducer,
};

const HomePage = function ({
  getPopularRestaurants,
  popularRestaurants,
  getPromoSliders,
  promoSlides,
  recommendItems,
  getRecommendItems,
  clearReducer,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getPromoSliders();
      await getPopularRestaurants();
      await getRecommendItems();
      setIsLoading(false);
    })();

    return () => {
      clearReducer({ type: "PROMO__SLIDES", payload: [] });
      clearReducer({ type: "RECOMMEND__ITEMS", payload: [] });
      clearReducer({ type: "POPULAR__RESTAURANTS", payload: [] });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home__page__wrapper">
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <>
          <Helmet>
            <title>Pick • a | Home</title>
          </Helmet>
          <OffersSlider items={promoSlides.filter((item) => item)} />
          <RecommendedSlider
            type={"item"}
            items={recommendItems.filter((_, i) => i < 5)}
          />
          <PopRestaurantsSlider
            type={"restaurant"}
            items={popularRestaurants.filter((_, i) => i < 9)}
          />
        </>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
