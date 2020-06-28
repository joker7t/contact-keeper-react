import { DELETE_CONTACT, UPDATE_CONTACT, FILTER_CONTACTS } from "../actions/type";

const initialState = {
    contacts: [],
    seletedContact: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_CONTACT:
            return {
                // ...state,
                // isLoading: action.payload
            };

        default:
            return state;
    }
}