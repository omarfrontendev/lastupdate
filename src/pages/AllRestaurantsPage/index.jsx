import React, { useEffect, useState } from "react";
import styles from "./.module.scss";
import PageHeader from "../../components/PageHeader";
import RestaurantCard from "../../components/RestaurantCard";
import { connect } from "react-redux";
import { getAllRestaurants, clearReducer } from "../../redux/actions";
import LoadWrapper from "../../components/LoadWrapper";
import { lowerCase } from "lodash";
import { Helmet } from "react-helmet";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getAllRestaurants, clearReducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function RestaurantsPage({
  allRestaurants,
  getAllRestaurants,
  clearReducer,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState(0);

  useEffect(() => {
    (async () => {
      await getAllRestaurants();
      setIsLoading(false);
    })();

    return () => {
      setItems([]);
      clearReducer({ type: "ALL__RESTAURANTS", payload: [] });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    switch (sortBy) {
      case 0:
        setItems(allRestaurants);
        break;
      case 1:
        setItems(allRestaurants.filter((item) => item.is_recommend));
        break;
      case 2:
        setItems(allRestaurants.filter((item) => item.is_featured));
        break;
      case 3:
        // eslint-disable-next-line eqeqeq
        setItems(allRestaurants.filter((item) => item.rating == "5"));
        break;
      case 4:
        setItems(allRestaurants.filter((item) => item.new));
        break;
      case 5:
        setItems(
          allRestaurants
            .sort((a, b) =>
              lowerCase(a.name) > lowerCase(b.slug)
                ? 1
                : lowerCase(b.name) > lowerCase(a.name)
                ? -1
                : 0
            )
            .map((item) => item)
        );
        break;
      case 6:
        setItems(
          allRestaurants
            .sort((a, b) =>
              lowerCase(a.name) > lowerCase(b.slug)
                ? 1
                : lowerCase(b.name) > lowerCase(a.name)
                ? -1
                : 0
            )
            .map((item) => item)
            .reverse()
        );
        break;
      default:
        break;
    }
  }, [allRestaurants, sortBy]);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <div className="all__restaurants__page__wrapper py-5">
          <Helmet>
            <title>Pick • a | Explore Restaurants</title>
          </Helmet>
          <PageHeader
            filter={true}
            span={true}
            spanText={"Sort By:"}
            title={"All Restaurants"}
            categories={[
              { type: 0, category: "All", active: sortBy === 0 },
              { type: 1, category: "Recommended", active: sortBy === 1 },
              { type: 2, category: "Is Featured", active: sortBy === 2 },
              { type: 3, category: "Ratings", active: sortBy === 3 },
              { type: 4, category: "Newest", active: sortBy === 4 },
              { type: 5, category: "A to Z", active: sortBy === 5 },
              { type: 6, category: "Z to A", active: sortBy === 6 },
            ]}
            toggle={(type) => setSortBy(type)}
          />
          {items.length ? (
            <div className="row">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`col-12 col-sm-6 col-lg-4 ${styles.col}`}
                >
                  <RestaurantCard type="restaurant" item={item} />
                </div>
              ))}
            </div>
          ) : (
            <>No Filter Results</>
          )}
        </div>
      )}
    </>
  );
});
