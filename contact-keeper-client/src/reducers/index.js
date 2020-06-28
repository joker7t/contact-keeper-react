import { combineReducers } from "redux";
import controlReducer from "./controlReducer";
import contactReducer from "./contactReducer";
import userReducer from "./userReducer";

export default combineReducers({
    control: controlReducer,
    contact: contactReducer,
    auth: userReducer
});