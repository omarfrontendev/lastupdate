import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
// import { useJsApiLoader } from "@react-google-maps/api";
// import config from "../../config";
// PAGES
import IsDeliverable from "../IsDeliverable";
import StartPage from "../../pages/StartPage";
import HomePage from "../../pages/Homepage";
import RestaurantsPage from "../../pages/AllRestaurantsPage";
import PopularRestaurantsPage from "../../pages/PopularRestaurantsPage";
import RecommendedPage from "../../pages/RecommendedPage";
import FavouritesPage from "../../pages/FavouritesPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import RestaurantDetailsPage from "../../pages/RestaurantDetailsPage";
import OrderDetailsPage from "../../pages/OrderDetailsPage";
import OrderTrackingPage from "../../pages/OrderTrackingPage";
import SupportPage from "../../pages/SupportPage";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage";
import NotFound from "../NotFound";
import AuthGuard from "../AuthGuard";
import ChangePasswordPage from "../../pages/ChangePasswordPage";

// Components
import Layout from "../../layout";
import Navigation from "../Navigation";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/global.style.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/button";

export default function App() {
  // const myLibraries = ["places"];
  // useJsApiLoader({
  // googleMapsApiKey: config.GOOGLE_MAPS_API_KEY,
  // libraries: myLibraries,
  // });
  return (
    <>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/home"
            element={
              <IsDeliverable>
                <HomePage />
              </IsDeliverable>
            }
          />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route
            path="/popular-restaurants"
            element={<PopularRestaurantsPage />}
          />
          <Route path="/recommended-items" element={<RecommendedPage />} />
          <Route
            path="/favourites"
            element={
              <AuthGuard>
                <FavouritesPage />
              </AuthGuard>
            }
          />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/restaurant/:slug" element={<RestaurantDetailsPage />} />
          <Route
            path="/my-order"
            element={
              <AuthGuard>
                <OrderDetailsPage />
              </AuthGuard>
            }
          />
          <Route
            path="/order-tracking"
            element={
              <AuthGuard>
                <OrderTrackingPage />
              </AuthGuard>
            }
          />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route
            path="/change-password"
            element={
              <AuthGuard>
                <ChangePasswordPage />
              </AuthGuard>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
