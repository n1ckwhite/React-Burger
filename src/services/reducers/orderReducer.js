import {GET_ORDER_REQUEST,GET_ORDER_SUCCESSFUL,GET_ORDER_ERROR} from "../action";

const initialState = {
    order: 0,
    error: '',
    pending: false,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                pending: true,
            }
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                pending: false,
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