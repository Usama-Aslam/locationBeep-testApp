import { GET_LOCATION, USER_LOCATION } from "../types";
const INITIAL_STATE = {
  location: null
};
const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return { ...state, location: action.payload };
    case USER_LOCATION:
      return { ...state, userLocation: action.payload };
    default:
      return { ...state };
  }
};

export default mapReducer;
