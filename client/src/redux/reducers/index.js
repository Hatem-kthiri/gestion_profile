import userReducer from "./userReducer";
import managementReducer from "./managementReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ userReducer, managementReducer });

export default rootReducer;
