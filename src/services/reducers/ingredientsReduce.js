import {GET_INGREDIENTS_ERROR,GET_INGREDIENTS_SUCCESSFUL} from "../action";
const initialIngredients = {
    ingredients: {},
    request: false,
    error: '',

}

export const ingredientsReduce = (state = initialIngredients,action) => {
    switch (action.type) {
        case GET_INGREDIENTS_SUCCESSFUL: {
            return {
                ...state,
                ingredients: action.resp,
                request: false,
            }
        }
        case GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                ingredients: state.ingredients,
                error: action.err,
            }
        }

        default:
            return state
    }
}