import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector, useDispatch } from "react-redux";

import MarkerAvatar from "./SecAvatar";
import {
  _getCurrentLocationAsync,
  _cleanCurrentLocationAsync
} from "../../redux/action/mapAction";

const UserMap = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const coords = useSelector(state => state.mapReducer.location);

  const center = {
    lat: 59.95,
    lng: 30.33
  };
  const zoom = 10;

  useEffect(() => {
    dispatch(_getCurrentLocationAsync(user));
    return () => {
      dispatch(_cleanCurrentLocationAsync());
    };
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {coords && (
        <GoogleMapReact
          defaultCenter={coords ? coords : null}
          defaultZoom={zoom}
        >
          <MarkerAvatar {...coords} text={user.displayName} />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default UserMap;
