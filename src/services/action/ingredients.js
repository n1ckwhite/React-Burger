import checkResponse, {GET_INGREDIENTS_REQUEST,GET_INGREDIENTS_ERROR, GET_INGREDIENTS_SUCCESSFUL} from "./index";
import {API_BURGERS} from "../../utils/data";
export const getIngredients = () => {
    return dispatch => {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })
        fetch(`${API_BURGERS}/ingredients`)
            .then(response => checkResponse(response))
            .then(json => dispatch({
                type: GET_INGREDIENTS_SUCCESSFUL,
                resp: json.data
            }))
            .catch((error) => {
                dispatch({
                    type: GET_INGREDIENTS_ERROR,
                    err: error.message
                })
              alert("Ошибка HTTP: " + error.message);
            });
    }
}