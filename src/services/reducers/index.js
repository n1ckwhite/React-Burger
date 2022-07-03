import {combineReducers} from "redux";
import {ingredientsReduce} from "./ingredientReduce";
import {orderReducer} from "./orderReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReduce,
    order: orderReducer,
})