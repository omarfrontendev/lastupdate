import userRegister from "./api/auth/userRegisterAction";
import userLogin from "./api/auth/userLoginAction";
import getPopularRestaurants from "./api/getPopularRestaurants";
import getPromoSliders from "./api/getPromoSliders";
import toggleFavourite from "./api/toggleFavourite";
import updateCurrentUser from "./updateCurrentUser";
import getRecommendItems from "./api/getRecommendItems";
import getUserFavourites from "./api/getUserFavourites";
import getAllRestaurants from "./api/getAllRestaurants";
import getUserCart from "./api/getUserCart";
import getItemRestaurantInfo from "./api/getItemRestaurantInfo";
import sendUserCartNote from "./api/sendUserCartNote";
import getSearchRestaurants from "./api/getSearchRestaurants";
import getAllNotifications from "./api/getAllNotifications";
import markAllNotificationsRead from "./api/markAllNotificationsRead";
import forgotPassword from "./api/auth/forgotPassword";
import markOneNotificationRead from "./api/markOneNotificationRead";
import clearReducer from "./clearReducer";
import oAuthLogin_Register from "./api/Oauth";
import getRestaurantPage from "./api/getRestaurantPage";
import getItemPage from "./api/getItemPage";
import toggleItemToCart from "./api/toggleItemToCart";
import updateLocation from "./updateLocation";
import checkIfAreaIsDeliverable from "./api/checkIfAreaIsDeliverable";
import orderCheckout from "./api/orderCheckout";
import addCouponToCart from "./api/addCouponToCart";
import getMyOrders from "./api/getMyOrders";

// eslint-disable-next-line import/no-anonymous-default-export
export {
  userRegister,
  userLogin,
  getPopularRestaurants,
  getPromoSliders,
  toggleFavourite,
  updateCurrentUser,
  getRecommendItems,
  getUserFavourites,
  getAllRestaurants,
  getUserCart,
  getItemRestaurantInfo,
  sendUserCartNote,
  getSearchRestaurants,
  getAllNotifications,
  markAllNotificationsRead,
  forgotPassword,
  markOneNotificationRead,
  clearReducer,
  oAuthLogin_Register,
  getRestaurantPage,
  getItemPage,
  toggleItemToCart,
  updateLocation,
  checkIfAreaIsDeliverable,
  orderCheckout,
  addCouponToCart,
  getMyOrders
};
