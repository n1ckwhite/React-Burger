import {CLEAR_INGREDIENT, GET_INGREDIENT} from "../action";


const initialState = {
    ingredient: {}
}


export const ingredientReduce =(state = initialState,action) => {
    switch (action.type) {
        case CLEAR_INGREDIENT: {
            return {
                ...state,
                ingredient: {}
            }
        }
        case GET_INGREDIENT: {
            return {
                ...state,
                ingredient: {...state.ingredient,...action.arr}
            }
        }
        default:
            return state
    }
}