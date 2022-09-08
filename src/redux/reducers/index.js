import { combineReducers } from "redux";

// REDUCERS
import loggedUserReducer from "./loggedUser.reducer";
import serverResponseReducer from "./serverResponse.reducer";
import popularRestaurantsReducer from "./homePopularRestaurants.reducer";
import promoSlidersReducer from "./promoSliders.reducer";
import recommendItemsReducer from "./recommendItems.reducer";
import userFavouritesReducer from "./userFavourites.reducer";
import allRestaurantsReducer from "./allRestaurants.reducer";
import userCartReducer from "./userCart.reducer";
import searchResultsReducer from "./searchResults.reducer";

import allNotificationsReducer from "./allNotifications.reducer";
import allNotificationsReadReducer from "./markAllNotidicationsRead.reducer";
import restaurantDateReducer from "./restaurantData.reducer";
import itemDataReducer from "./itemData.reducer";
import LocationReducer from "./location.reducer";
import myOrdersReducer from "./myOrders.reducer";

export default combineReducers({
  loggedUser: loggedUserReducer,
  serverResponse: serverResponseReducer,
  popularRestaurants: popularRestaurantsReducer,
  promoSlides: promoSlidersReducer,
  recommendItems: recommendItemsReducer,
  userFavourites: userFavouritesReducer,
  allRestaurants: allRestaurantsReducer,
  userCart: userCartReducer,
  searchResults: searchResultsReducer,
  allNotifications: allNotificationsReducer,
  allNotificationsRead: allNotificationsReadReducer,
  restaurantDetails: restaurantDateReducer,
  itemDetails: itemDataReducer,
  location: LocationReducer,
  orders: myOrdersReducer
});
