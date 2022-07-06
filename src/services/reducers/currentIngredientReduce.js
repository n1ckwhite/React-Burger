import { CREATE_CURRENT_INGREDIENT, REPLACE_BUN_INGREDIENT, DELETE_CONSTRUCTOR_ITEM} from "../action";

const initialState = {
    ingredients: [],
    bun: [],
};

export const currentIngredientReduce = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CURRENT_INGREDIENT: {
        return { 
            ...state,
            ingredients: state.ingredients.concat(action.it)
        }
    }
    case REPLACE_BUN_INGREDIENT: {
      return {
        ...state,
        bun:[action.bun],
      }
    }
    case DELETE_CONSTRUCTOR_ITEM: {
      const newState = {...state}
      const indexIngredient = newState.ingredients.findIndex(item => item._id === action.indx)
      if(indexIngredient !== -1) {
        newState.ingredients.splice(indexIngredient,1)
      }
      return {
        ...state,
        ingredients: [...newState.ingredients]
      }
    }
    default: {
      return state;
    }
  }
};
