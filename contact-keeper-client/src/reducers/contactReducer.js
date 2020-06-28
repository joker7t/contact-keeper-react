import { GET_CONTACTS } from "../actions/type";

const initialState = {
    contacts: [
        {
            "type": "private",
            "_id": "5ef721f2c49ece0f9295971f",
            "name": "toan10",
            "email": "toan@gmail.com",
            "phone": "111111",
            "user": "5ef0d9d9655a0ed3ccb4deea",
            "date": "2020-06-27T10:39:46.743Z",
            "__v": 0
        }
    ],
    seletedContact: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };

        default:
            return state;
    }
}