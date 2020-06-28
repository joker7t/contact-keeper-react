import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from "../actions/type";

const initialState = {
    contacts: [
        {
            "type": "professional",
            "_id": "123456789",
            "name": "toan10",
            "email": "toan@gmail.com",
            "phone": "111111",
            "user": "5ef0d9d9655a0ed3ccb4deea",
            "date": "2020-06-27T10:39:46.743Z",
            "__v": 0
        }
    ],
    selectedContact: null,
    filteredContacts: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload
                ]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload)

            };
        case SET_CURRENT:
            return {
                ...state,
                selectedContact: action.payload

            };
        case CLEAR_CURRENT:
            return {
                ...state,
                selectedContact: action.payload

            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact)
            };
        case FILTER_CONTACTS:
            return {
                ...state,
                filteredContacts: state.contacts.filter(contact => {
                    const regex = new RegExp(action.payload, 'gi');
                    return contact.name.match(regex) || contact.email.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filteredContacts: null
            };
        default:
            return state;
    }
}