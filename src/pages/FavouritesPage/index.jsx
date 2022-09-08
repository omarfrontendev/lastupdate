import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "../AllRestaurantsPage/.module.scss";
import PageHeader from "../../components/PageHeader";
import RestaurantCard from "../../components/RestaurantCard";
import LoadWrapper from "../../components/LoadWrapper";
import { getUserFavourites, clearReducer } from "../../redux/actions";
import { isEmpty } from "lodash";
import { Helmet } from "react-helmet";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getUserFavourites, clearReducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function FavouritesPage({
  userFavourites,
  getUserFavourites,
  clearReducer,
  loggedUser,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [favType, setFavType] = useState("restaurant");

  useEffect(() => {
    (async () => {
      await getUserFavourites(favType);
      setIsLoading(false);
    })();

    return () => {
      clearReducer({ type: "USER__FAVOURITES", payload: [] });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favType]);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <>
          <div className="favourites__page__wrapper py-5">
            <Helmet>
              <title>Pick • a | Favourites</title>
            </Helmet>
            <PageHeader
              type={favType}
              filter={true}
              title={"Favourites"}
              toggle={(type) => {
                setIsLoading(true);
                setFavType(type);
              }}
              categories={[
                {
                  category: "Restaurant",
                  active: favType === "restaurant",
                  type: "restaurant",
                },
                { category: "Food", active: favType === "item", type: "item" },
              ]}
            />
            {userFavourites.length ? (
              <div className="row">
                {userFavourites.map((item, i) => (
                  <div
                    key={i}
                    className={`col-12 col-sm-6 col-lg-4 ${styles.col}`}
                  >
                    <RestaurantCard type={favType} item={item} />
                  </div>
                ))}
              </div>
            ) : isEmpty(loggedUser) ? (
              <>TRY TO LOGIN FIRST</>
            ) : (
              <>NO {favType.toLocaleUpperCase()} FAVOURTIES</>
            )}
          </div>
        </>
      )}
    </>
  );
});
