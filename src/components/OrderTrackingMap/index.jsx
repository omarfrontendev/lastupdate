import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const OrderTrackingMap = ({
  orders
}) => {

  const [mapCenter, setMapCenter] = useState({});
  const [zoom, setZoom] = useState(15);
  const [handleApiLoaded, setHandleApiLoaded] = useState(() => {});

  console.log(orders.trackOrder[0].restaurant.longitude)

  useEffect(() => {
    setZoom(15);
    setMapCenter({
      lat:
        +orders?.trackOrder[0]?.restaurant?.latitude,
      lng:
        +orders?.trackOrder[0]?.restaurant?.longitude,
    });
    setHandleApiLoaded(() => (map, maps) => {
      let marker = new maps.Marker({
        position: {
          lat:
            +orders.trackOrder[0].restaurant.latitude,
          lng:
            +orders.trackOrder[0].restaurant.longitude,
        },
        
        map: map,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GoogleMapReact
      center={mapCenter}
      defaultZoom={zoom}
      yesIWantToUseGoogleMapApiInternals={true}
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    />
  )
}

export default OrderTrackingMap