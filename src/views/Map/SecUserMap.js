import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector, useDispatch, useStore } from "react-redux";

import MarkerAvatar from "./SecAvatar";
import {
  _getCurrentLocationAsync,
  _cleanCurrentLocationAsync,
  _getUserLocationAsync,
  _cleanUserLocation
} from "../../redux/action/mapAction";

const UserMap = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const coords = useSelector(state => state.mapReducer.location);
  const userCoords = useSelector(state => state.mapReducer.userLocation);

  let zoom = 10;

  useEffect(() => {
    dispatch(_getCurrentLocationAsync(user));
    return () => {
      dispatch(_cleanCurrentLocationAsync());
    };
  }, []);

  useEffect(() => {
    dispatch(_getUserLocationAsync());
    return () => {
      dispatch(_cleanUserLocation());
    };
  }, []);

  console.log(userCoords);

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
