import { combineReducers } from "redux";
import controlReducer from "./controlReducer";
import contactReducer from "./contactReducer";

export default combineReducers({
    control: controlReducer,
    contact: contactReducer
});