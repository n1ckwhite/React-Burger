import { store, RootState } from "../store/store";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { TActionCurrentIngredient } from "../reducers/currentIngredientReduce";
import { TWSActionData } from "../reducers/socketMiddlewareReduce";
import { TActionIngredient } from "../reducers/ingredientReduce";
import { TActionIngredients } from "../reducers/ingredientsReduce";
import { TActionUsers } from "../reducers/usersReduce";
import { TActionOrder } from "../reducers/orderReducer";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
} from "../action/index";

export interface IIngredient {
  key?: number | string | unknown;
  _id?: string | number | any;
  name: string;
  type: string;
  proteins?: number | string;
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

export type TOrder = {
  ingredients: Array<string>;
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  type?: string;
  price: number;
};

export interface IOrder {
  order: {
    ingredients: [];
    createdAt: string;
    number: number;
    name: string;
  };
}

type Taction =
  | TActionCurrentIngredient
  | TWSActionData
  | TActionIngredient
  | TActionIngredients
  | TActionOrder
  | TActionUsers;

export type TWSUserActions = {
  wsInit: typeof WS_CONNECTION_START;
  onOpen: typeof WS_CONNECTION_SUCCESS;
  onClose: typeof WS_CONNECTION_CLOSED;
  onError: typeof WS_CONNECTION_ERROR;
  wsGetOrders: typeof WS_GET_MESSAGE;
};

export type AppThunk<R, S, E, A extends Action> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;
type TApplicationActions = Taction;

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () =>
  dispatchHook<AppDispatch | TApplicationActions | any>();
