import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import MarkerAvatar from "./SecAvatar";
import { store } from "../../redux/store";

const UserMap = () => {
  const [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33
  });
  const [zoom, setZoom] = useState(10);
  const [user, setUser] = useState(store.getState().authReducer.user);

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
        <MarkerAvatar />
      </GoogleMapReact>
    </div>
  );
};

export default UserMap;
