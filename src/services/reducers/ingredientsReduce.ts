import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESSFUL,
} from "../action";
import { IIngredient } from "../types";
export const initialIngredients = {
  ingredients: [],
  pending: false,
  error: ''
};

interface IState {
  ingredients: Array<IIngredient>;
  error?: String;
  pending: boolean;
}

export interface IgetRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IgetSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESSFUL;
  resp: [IIngredient];
}

export interface IgetError {
  readonly type: typeof GET_INGREDIENTS_ERROR;
  err: Event;
}

export type TActionIngredients = IgetRequest | IgetSuccess | IgetError;

export const ingredientsReduce = (
  state: IState = initialIngredients,
  action: TActionIngredients
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case GET_INGREDIENTS_SUCCESSFUL: {
      return {
        ...state,
        pending: false,
        ingredients: action.resp,
      };
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        pending: false,
        ingredients: state.ingredients,
        error: `${action.err}`,
      };
    }

    default:
      return state;
  }
};
