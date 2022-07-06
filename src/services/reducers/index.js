import {combineReducers} from "redux";
import {ingredientsReduce} from "./ingredientsReduce";
import {orderReducer} from "./orderReducer";
import {ingredientReduce} from "./ingredientReduce";
import { currentIngredientReduce } from "./currentIngredientReduce";

export const rootReducer = combineReducers({
    ingredients: ingredientsReduce,
    order: orderReducer,
    ingredient: ingredientReduce,
    currentIngredient: currentIngredientReduce,
})