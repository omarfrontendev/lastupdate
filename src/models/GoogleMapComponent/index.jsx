import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { checkIfAreaIsDeliverable, updateLocation } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { checkIfAreaIsDeliverable, updateLocation };

export const GoogleMap = ({
  location,
  checkIfAreaIsDeliverable,
  updateLocation,
}) => {
  const [mapCenter, setMapCenter] = useState({});
  const [zoom, setZoom] = useState(15);
  const [handleApiLoaded, setHandleApiLoaded] = useState(() => {});

  useEffect(() => {
    setZoom(15);
    setMapCenter({
      lat:
        location.lat ||
        JSON.parse(localStorage?.getItem("currentLocation"))?.lat ||
        30.041707228013045,
      lng:
        location.lng ||
        JSON.parse(localStorage?.getItem("currentLocation"))?.lng ||
        31.240693981250008,
    });
    setHandleApiLoaded(() => (map, maps) => {
      let marker = new maps.Marker({
        position: mapCenter,
        map: map,
        draggable: true,
      });
      marker.addListener("dragend", async function (e) {
        const acoords = await this.getPosition().toJSON(); // this === marker
        const geocoder = new maps.Geocoder();
        const geoCode = await geocoder.geocode({
          location: { lat: acoords.lat, lng: acoords.lng },
        });
        const address = geoCode.results[0].formatted_address;
        updateLocation({
          name: address,
          lat: acoords.lat,
          lng: acoords.lng,
          deliverable: await checkIfAreaIsDeliverable({
            lat: +acoords.lat,
            lng: +acoords.lng,
          }),
        });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, mapCenter]);

  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  // const handleApiLoaded = (map, maps) => {
  // marker = new maps.Marker({
  //   position: {
  //     lat:
  //       location.lat ||
  //       JSON.parse(localStorage?.getItem("currentLocation"))?.lat ||
  //       30.041707228013045,
  //     lng:
  //       location.lng ||
  //       JSON.parse(localStorage?.getItem("currentLocation"))?.lng ||
  //       31.240693981250008,
  //   },
  //   map: map,
  //   draggable: true,
  // });
  // marker.addListener("dragend", async function (e) {
  //   const acoords = await this.getPosition().toJSON(); // this === marker
  //   const geocoder = new maps.Geocoder();
  //   const geoCode = await geocoder.geocode({
  //     location: { lat: acoords.lat, lng: acoords.lng },
  //   });
  //   const address = geoCode.results[0].formatted_address;
  //   updateLocation({
  //     name: address,
  //     lat: acoords.lat,
  //     lng: acoords.lng,
  //     deliverable: await checkIfAreaIsDeliverable({
  //       lat: +acoords.lat,
  //       lng: +acoords.lng,
  //     }),
  //   });
  // });
  // };
  return (
    <GoogleMapReact
      center={mapCenter}
      defaultZoom={zoom}
      yesIWantToUseGoogleMapApiInternals={true}
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
