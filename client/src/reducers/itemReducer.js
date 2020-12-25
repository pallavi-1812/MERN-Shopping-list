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
        case ADD_ITEM:
            console.log('state');
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case GET_ITEM:
            return {
                ...state
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}

export default itemReducer;