import firebase from "../../config/firebase";

import { GET_LOCATION } from "../types";

var id;
export const _getCurrentLocationAsync = user => {
  return dispatch => {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const success = pos => {
        firebase
          .database()
          .ref(`/location/${user.uid}`)
          .set({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
        console.log("location==>", pos.coords);
        dispatch({ type: GET_LOCATION, payload: pos.coords });
      };
      const error = err => {
        console.log("location error=>", err);
      };

      id = navigator.geolocation.watchPosition(success, error, options);
    } else {
      console.log("location not allowed");
    }
  };
};