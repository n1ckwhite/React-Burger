import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESSFUL,
  GET_ORDER_ERROR,
  CLEAR_ORDER_NUMBER,
} from "./index";
import checkResponse from "./index";
import { API_BURGERS } from "../../utils/data";

export const getOrder = (burgers) => {
  return (dispatch) => {
    dispatch({type: CLEAR_ORDER_NUMBER})
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients: [...burgers.filter((item) => item._id)],
      }),
    };
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch(`${API_BURGERS}/orders`, requestOptions)
      .then((response) => checkResponse(response))
      .then((data) =>
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
