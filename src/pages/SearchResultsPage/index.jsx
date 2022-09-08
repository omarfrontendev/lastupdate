import React, { useState, useEffect, useMemo } from "react";
import styles from "../AllRestaurantsPage/.module.scss";
import PageHeader from "../../components/PageHeader";
import RestaurantCard from "../../components/RestaurantCard";
import LoadWrapper from "../../components/LoadWrapper";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchRestaurants } from "../../redux/actions";
import { Helmet } from "react-helmet";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getSearchRestaurants };

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function SearchResultsPage({ getSearchRestaurants, searchResults }) {
  const QUERY = useQuery();
  const query = QUERY.get("query");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (query) {
        setIsLoading(true);
        await getSearchRestaurants(query);
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      {!isLoading ? (
        <div className="search__results__page__wrapper py-5">
          <Helmet>
            <title>Pick • a | Search</title>
          </Helmet>
          <PageHeader title={"Search Results"} />
          {searchResults.length ? (
            <div className="row">
              {searchResults.map((item, i) => (
                <div
                  key={i}
                  className={`col-12 col-sm-6 col-lg-4 ${styles.col}`}
                >
                  <RestaurantCard
                    type={item?.restaurant_id ? "item" : "restaurant"}
                    item={item}
                  />
                </div>
              ))}
            </div>
          ) : (
            <>NO SEARCH RESULTS FOUND</>
          )}
        </div>
      ) : (
        <LoadWrapper />
      )}
    </>
  );
});
