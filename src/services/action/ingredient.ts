import { IIngredient } from "../../utils/constans";
import {CLEAR_INGREDIENT, GET_INGREDIENT} from "./index";

export const getIngredient = (ingredient: IIngredient) => {
    return (dispatch: (A: Object) => Object) => {
        dispatch({
            type: GET_INGREDIENT,
            arr: ingredient
        })
    }
}
export const clearIngredient = () => ((dispatch: (A: Object)=> void) => dispatch({type: CLEAR_INGREDIENT}))

