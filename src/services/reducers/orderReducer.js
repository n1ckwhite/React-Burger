import {GET_ORDER} from "../action";

const initialState = {
    order: 0
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER: {
            return {
                ...state,
                order: action.number
            }
        }
        default:
            return state
    }
}