import { DELETE_CONTACT, UPDATE_CONTACT, FILTER_CONTACTS } from "./type";

//add contact
export const addContact = contact => dispatch => {
    dispatch({
        type: DELETE_CONTACT,
        payload: contact
    });
};

//delete contact

//set current contact

//clear current contact

//update contact

//filter contacts

//clear contact