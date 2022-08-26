import {
  CREATE_CURRENT_INGREDIENT,
  REPLACE_BUN_INGREDIENT,
  DELETE_CONSTRUCTOR_ITEM,
  TARGET_CARD_INGREDIENT,
  SET_SORTED_ARRAY,
} from "../action";

const initialState = {
  ingredients: [],
  bun: [],
};

export const currentIngredientReduce = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_CURRENT_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.concat({ ...action.it, key: action.key }),
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
