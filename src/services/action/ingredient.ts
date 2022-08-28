import { Dispatch } from "react";
import { Iclear } from "../reducers/ingredientReduce";
import { AppDispatch, AppThunk, IIngredient } from "../types";
import { CLEAR_INGREDIENT, GET_INGREDIENT } from "./index";




export const getIngredient: AppThunk = (ingredient: IIngredient) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_INGREDIENT,
      arr: ingredient,
    });
  };
};
export const clearIngredient = () => (dispatch: Dispatch<Iclear>) =>
  dispatch({ type: CLEAR_INGREDIENT });
