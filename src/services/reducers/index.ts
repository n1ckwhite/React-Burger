import {combineReducers} from "redux";
import {ingredientsReduce} from "./ingredientsReduce";
import {orderReducer} from "./orderReducer";
import {ingredientReduce} from "./ingredientReduce";
import { currentIngredientReduce } from "./currentIngredientReduce";
import { usersReduce } from "./usersReduce";
import { wsReducer } from "./socketMiddlewareReduce";

export const rootReducer = combineReducers({
    ingredients: ingredientsReduce,
    order: orderReducer,
    ingredient: ingredientReduce,
    currentIngredient: currentIngredientReduce,
    users: usersReduce,
    data: wsReducer,
})