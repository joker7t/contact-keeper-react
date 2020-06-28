import { GET_CONTACTS } from "./type";

//add contact
export const getContacts = contacts => dispatch => {
    dispatch({
        type: GET_CONTACTS,
        payload: contacts
    });
};

//delete contact

//set current contact

//clear current contact

//update contact

//filter contacts

//clear contact