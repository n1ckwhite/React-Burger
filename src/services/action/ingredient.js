import {GET_INGREDIENT} from "./index";

export const getIngredient = (ingredient) => {
    return dispatch => {
        dispatch({
            type: GET_INGREDIENT,
            arr: ingredient
        })
    }
}

