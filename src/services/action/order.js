import {GET_ORDER} from "./index";
import checkResponse from './index';
import {API_BURGERS} from "../../utils/data";


export const getOrder = (burgers) => {
    return dispatch => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: [...burgers.filter((i) => i._id)] }),
        };
        fetch(`${API_BURGERS}/orders`, requestOptions)
            .then((response) => checkResponse(response))
            .then((data) => data.success ? dispatch({type: GET_ORDER,number: data.order.number}) : '')
            .catch((error) => {
                alert("Ошибка HTTP: " + error.message);
            });
    }
}