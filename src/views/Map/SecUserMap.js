import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector, useDispatch } from "react-redux";

import MarkerAvatar from "./SecAvatar";
import { _getCurrentLocationAsync } from "../../redux/action/mapAction";

const UserMap = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33
  });
  const zoom = 10;

  useEffect(async () => {
    await dispatch(_getCurrentLocationAsync(user));
    return () => {
      navigator.geolocation.clearWatch();
    };
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
        <MarkerAvatar />
      </GoogleMapReact>
    </div>
  );
};

export default UserMap;
