import checkResponse, {GET_INGREDIENTS} from "./index";
import {API_BURGERS} from "../../utils/data";
export const getIngredients = () => {
    return dispatch => {
        fetch(`${API_BURGERS}/ingredients`)
            .then(response => checkResponse(response))
            .then(json => dispatch({
                type: GET_INGREDIENTS,
                resp: json.data
            }))
            .catch((error) => {
              alert("Ошибка HTTP: " + error.message);
            });
    }
}