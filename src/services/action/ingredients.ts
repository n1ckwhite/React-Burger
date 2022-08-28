import checkResponse, {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_SUCCESSFUL,
} from "./index";
import { API_BURGERS } from "../../utils/data";
import { AppDispatch, AppThunk } from "../types";
import { RootState } from "../store/store";
import { IgetError, IgetRequest, IgetSuccess } from "../reducers/ingredientsReduce";

export const getIngredients = () : AppThunk<void, RootState, unknown, IgetRequest | IgetSuccess | IgetError> => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    fetch(`${API_BURGERS}/ingredients`)
      .then((response) => checkResponse(response))
      .then((json: any) =>
        dispatch({
          type: GET_INGREDIENTS_SUCCESSFUL,
          resp: json.data,
        })
      )
      .catch((error) => {
        dispatch({
          type: GET_INGREDIENTS_ERROR,
          err: error.message,
        });
        alert("Ошибка HTTP: " + error.message);
      });
  };
};
