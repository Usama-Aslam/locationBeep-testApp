import { SHOW_LOADER, HIDE_LOADER, SIGN_IN } from "../types";

const INITIAL_STATE = {
  user: "",
  loading: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      console.log("inside reducer loader");
      return { ...state, loading: true };

    case HIDE_LOADER:
      console.log("inside reducer");
      return { ...state, loading: false };

    case SIGN_IN:
      return { ...state, user: action.payload };

    case "NUMBER":
      return { ...state, number: action.payload };
    default:
      return state;
  }
};

export default authReducer;
