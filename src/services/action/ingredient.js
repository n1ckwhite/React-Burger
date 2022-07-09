import {CLEAR_INGREDIENT, GET_INGREDIENT} from "./index";

export const getIngredient = (ingredient) => {
    return dispatch => {
        dispatch({
            type: GET_INGREDIENT,
            arr: ingredient
        })
    }
}
export const clearIngredient = () => (dispatch => dispatch({type: CLEAR_INGREDIENT}))

