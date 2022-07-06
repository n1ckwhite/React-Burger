import {GET_INGREDIENTS_ERROR,GET_INGREDIENTS_SUCCESSFUL} from "../action";
const initialIngredients = {
    ingredients: {},
    error: '',

}

export const ingredientsReduce = (state = initialIngredients,action) => {
    switch (action.type) {
        case GET_INGREDIENTS_SUCCESSFUL: {
            return {
                ...state,
                ingredients: action.resp,
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