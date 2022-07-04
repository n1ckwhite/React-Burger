import {GET_ORDER_SUCCESSFUL,GET_ORDER_ERROR} from "../action";

const initialState = {
    order: 0,
    error: ''
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_ERROR: {
            return {
                ...state,
                error: action.err,
            }
        }
        case GET_ORDER_SUCCESSFUL: {
            return {
                ...state,
                order: action.number
            }
        }
        default:
            return state
    }
}