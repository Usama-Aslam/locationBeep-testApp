import { combineReducers } from "redux";

import authReducer from "./reducer/authReducer";
import mapReducer from "./reducer/mapReducer";

export default combineReducers({ authReducer, mapReducer });
