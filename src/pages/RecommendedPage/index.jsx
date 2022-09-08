import React, { useState, useEffect } from "react";
import styles from "../AllRestaurantsPage/.module.scss";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import RestaurantCard from "../../components/RestaurantCard";
import LoadWrapper from "../../components/LoadWrapper";
import { getRecommendItems, clearReducer } from "../../redux/actions";
import { Helmet } from "react-helmet";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getRecommendItems, clearReducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RecommendedPage({
  recommendItems,
  getRecommendItems,
  clearReducer,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getRecommendItems();
      setIsLoading(false);
    })();

    return () => {
      clearReducer({ type: "RECOMMEND__ITEMS", payload: [] });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <div className="recommended__restaurants__page__wrapper py-5">
          <Helmet>
            <title>Pick • a | Recommended for you</title>
          </Helmet>
          <PageHeader title={"Recommended for you"} />
          <div className="row">
            {!recommendItems.length && (
              <div className="col">
                NO RECOMMENDED ITEMS AVAILABLE IN YOUR AREA
              </div>
            )}
            {recommendItems.map((item, i) => (
              <div key={i} className={`col-12 col-sm-6 col-lg-4 ${styles.col}`}>
                <RestaurantCard type={"item"} item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
});
