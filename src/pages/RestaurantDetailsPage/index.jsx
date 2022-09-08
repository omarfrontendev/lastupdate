import React, { useState, useEffect } from "react";
import SingleRestaurant from "../../components/SingleRestaurant";
import { connect } from "react-redux";
import LoadWrapper from "../../components/LoadWrapper";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import NotFound from "../../components/NotFound";
import { clearReducer, getRestaurantPage } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getRestaurantPage,
  clearReducer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RestaurantDetailsPage({
  clearReducer,
  getRestaurantPage,
  restaurantDetails,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [found, setFound] = useState(null);
  const slug = useParams("slug").slug;

  useEffect(() => {
    (async () => {
      try {
        setFound(await getRestaurantPage(slug));
        setIsLoading(false);
      } catch (error) {
        setFound(false);
        setIsLoading(false);
      }
    })();
    return () => {
      clearReducer({ type: "RESTAURANT__PAGE__DATA", payload: {} });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="res__details__page__wrappper py-5">
      {isLoading && found === null && <LoadWrapper />}
      {!isLoading && found === false && <NotFound />}
      {!isLoading && found === true && (
        <>
          <Helmet>
            <title>Pick • a | {restaurantDetails?.restaurant?.name}</title>
          </Helmet>
          <SingleRestaurant />
        </>
      )}
    </div>
  );
});
