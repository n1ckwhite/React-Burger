export const GET_INGREDIENTS_SUCCESSFUL = "GET_INGREDIENTS_SUCCESSFUL";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";
export const GET_ORDER_SUCCESSFUL = "GET_ORDER_SUCCESSFUL";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";
export const GET_INGREDIENT = "GET_INGREDIENT_SUCCESSFUL";
export const CLEAR_INGREDIENT = "CLEAR_INGREDIENT";
export const CREATE_CURRENT_INGREDIENT = "CREATE_CURRENT_INGREDIENT";
export const REPLACE_BUN_INGREDIENT = "REPLACE_BUN_INGREDIENT";
export const DELETE_CONSTRUCTOR_ITEM = "DELETE_CONSTRUCTOR_ITEM";
export default function checkResponse(response) {
  if (!response.ok) {
    throw new Error("Ответ сети был не ok.");
  }
  return response.json();
}
