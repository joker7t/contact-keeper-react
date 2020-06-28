import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, DELETE_FILTER_CONTACT } from "./type";

//get all contacts
export const getContacts = contacts => dispatch => {
    dispatch({
        type: GET_CONTACTS,
        payload: contacts
    });
};

//add contact
export const addContact = contact => dispatch => {
    dispatch({
        type: ADD_CONTACT,
        payload: contact
    });
};

//delete contact
export const deleteContact = id => dispatch => {
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
};

//set selected contact
export const setSelectedContact = contact => dispatch => {
    dispatch({
        type: SET_CURRENT,
        payload: contact
    });
};

//clear selected contact
export const clearSelectedContact = () => dispatch => {
    dispatch({
        type: CLEAR_CURRENT,
        payload: null
    });
};

//update contact
export const updateContact = (contact) => dispatch => {
    dispatch({
        type: UPDATE_CONTACT,
        payload: contact
    });
};

//filter contacts
export const filterContacts = (filter) => dispatch => {
    dispatch({
        type: FILTER_CONTACTS,
        payload: filter
    });
};

//clear contact
export const clearFilterContacts = () => dispatch => {
    dispatch({
        type: CLEAR_FILTER
    });
};

//delete filter contact
export const deleteFilterContact = id => dispatch => {
    dispatch({
        type: DELETE_FILTER_CONTACT,
        payload: id
    });
};