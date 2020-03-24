import { GET_LOCATION } from "../types";
const INITIAL_STATE = {
  location: null
};
const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return { ...state, location: action.payload };
    default:
      return { ...state };
  }
};

export default mapReducer;
