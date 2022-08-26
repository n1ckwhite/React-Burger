import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_REQUEST_SUCCESSEFUL } from "../action"


const state = {
    error: false,
    request: false,
    connecting: false,
    data: []
}



export const dataReducer = (initalState = state, action: any) => {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {
                ...state,
                requset: true,
            }
        }
        case GET_DATA_REQUEST_SUCCESSEFUL: {
            return {
                ...state,
                data: action.data
            }
        }
        case GET_DATA_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state
        }
    }
}