import {GET_INGREDIENTS} from "../action";
const initialIngredients = {
    ingredients: {}

}

export const ingredientsReduce = (state = initialIngredients,action) => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.resp
            }
        }
        default:
            return state
    }
}