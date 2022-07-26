import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESSFUL,
} from "../action";
const initialIngredients = {
  ingredients: [],
  error: "",
  pending: false,
};

export const ingredientsReduce = (state = initialIngredients, action) => {
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
        error: action.err,
      };
    }

    default:
      return state;
  }
};
