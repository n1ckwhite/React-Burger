import {
  CREATE_CURRENT_INGREDIENT,
  REPLACE_BUN_INGREDIENT,
  DELETE_CONSTRUCTOR_ITEM,
  TARGET_CARD_INGREDIENT,
  SET_SORTED_ARRAY,
} from "../action";
import { IIngredient } from "../types";

const initialState = {
  ingredients: [],
  bun: [],
};

type IState = {
  ingredients: Array<IIngredient> | any;
  bun: Array<IIngredient> | any;
};


interface Iitem {
  _id: number,
  indx: number,
}
interface Icreate {
  readonly type: typeof CREATE_CURRENT_INGREDIENT;
  it: IIngredient;
  key: () => number;
}

interface ISetSort {
  readonly type: typeof SET_SORTED_ARRAY;
  sortedArray: Array<IIngredient>;
}

interface Ireplace {
  readonly type: typeof REPLACE_BUN_INGREDIENT;
  bun: IIngredient;
  key: () => number;
}

interface Idelete {
  readonly type: typeof DELETE_CONSTRUCTOR_ITEM;
  indx: IIngredient;
}

interface Itarget {
  readonly type: typeof TARGET_CARD_INGREDIENT;
  targetCard: IIngredient;
}

export type TActionCurrentIngredient =
  | Icreate
  | ISetSort
  | Ireplace
  | Idelete
  | Itarget;

export const currentIngredientReduce = (
  state: IState = initialState,
  action: TActionCurrentIngredient
) => {
  switch (action.type) {
    case CREATE_CURRENT_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.concat({
          ...action.it,
          key: action.key,
        }),
      };
    }
    case SET_SORTED_ARRAY: {
      return {
        ...state,
        ingredients: [...action.sortedArray],
      };
    }

    case REPLACE_BUN_INGREDIENT: {
      return {
        ...state,
        bun: [{ ...action.bun, key: action.key }],
      };
    }
    case DELETE_CONSTRUCTOR_ITEM: {
      const newState = { ...state };
      const indexIngredient = newState.ingredients.findIndex(
        (item: any) => item._id === action.indx 
      );
      if (indexIngredient !== -1) {
        newState.ingredients.splice(indexIngredient, 1);
      }
      return {
        ...state,
        ingredients: [...newState.ingredients],
      };
    }
    case TARGET_CARD_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.targetCard,
      };
    }
    default: {
      return state;
    }
  }
};
