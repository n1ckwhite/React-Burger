import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESSFUL,
  GET_ORDER_ERROR,
  CLEAR_ORDER_NUMBER,
} from "./index";
import checkResponse from "./index";
import { API_BURGERS } from "../../utils/data";
import { AppDispatch, AppThunk, IIngredient } from "../types";
import { RootState } from "../store/store";
import { IError, IOrderNumber, IRequest } from "../reducers/orderReducer";

export const getOrder = (
  burgers: [IIngredient],
  bun: IIngredient
): AppThunk<
  void,
  RootState,
  unknown,
  IOrderNumber | IOrderNumber | IRequest | IError
> => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: CLEAR_ORDER_NUMBER });
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `${window.localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        ingredients: [bun, ...burgers, bun],
      }),
    };
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch(`${API_BURGERS}/orders`, requestOptions)
      .then((response) => checkResponse(response))
      .then((data: any) =>
        data.success
          ? dispatch({ type: GET_ORDER_SUCCESSFUL, number: data.order.number })
          : ""
      )
      .catch((error) => {
        dispatch({
          type: GET_ORDER_ERROR,
          err: error.message,
        });
        alert("Ошибка HTTP: " + error.message);
      });
  };
};
