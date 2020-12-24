import { v1 as uuid } from "uuid";
import { ADD_ITEM, GET_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Bread' },
        { id: uuid(), name: 'Salt' }
    ]
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state
            };

        default:
            return state;
    }
}

export default itemReducer;