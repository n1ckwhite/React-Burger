import { CLEAR_INGREDIENT, GET_INGREDIENT } from "../action";
import { IIngredient } from "../types";

const initialState = {
  ingredient: {},
};

type IState = {
  ingredient: Object;
};

export interface Iclear {
  readonly type: typeof CLEAR_INGREDIENT;
}

interface Iget {
  readonly type: typeof GET_INGREDIENT;
  arr: IIngredient;
}

export type TActionIngredient = Iclear | Iget;

export const ingredientReduce = (
  state: IState = initialState,
  action: TActionIngredient
) => {
  switch (action.type) {
    case CLEAR_INGREDIENT: {
      return {
        ...state,
        ingredient: {},
      };
    }
    case GET_INGREDIENT: {
      return {
        ...state,
        ingredient: { ...state.ingredient, ...action.arr },
      };
    }
    default:
      return state;
  }
};
