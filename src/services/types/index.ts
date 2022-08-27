import { store } from "../store/store";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { TActionCurrentIngredient } from "../reducers/currentIngredientReduce";
import { TActionData } from "../reducers/data";
import { TActionIngredient } from "../reducers/ingredientReduce";
import { TActionIngredients } from "../reducers/ingredientsReduce";
import { TActionUsers } from "../reducers/usersReduce";
import { TActionOrder } from "../reducers/orderReducer";
export interface IIngredient {
  key?: number;
  _id: object;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  index?: number;
}

type Taction =
  | TActionCurrentIngredient
  | TActionData
  | TActionIngredient
  | TActionIngredients
  | TActionOrder
  | TActionUsers;

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = Taction;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | TApplicationActions | any>();
