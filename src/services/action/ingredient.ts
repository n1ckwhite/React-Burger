import { Dispatch } from "react";
import { Iclear, Iget } from "../reducers/ingredientReduce";
import { RootState } from "../store/store";
import { AppDispatch, AppThunk, IIngredient } from "../types";
import { CLEAR_INGREDIENT, GET_INGREDIENT } from "./index";

export const getIngredient = (
  ingredient: IIngredient
): AppThunk<void, RootState, unknown, Iclear | Iget> => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_INGREDIENT,
      arr: ingredient,
    });
  };
};
export const clearIngredient = () => (dispatch: Dispatch<Iclear>) =>
  dispatch({ type: CLEAR_INGREDIENT });
