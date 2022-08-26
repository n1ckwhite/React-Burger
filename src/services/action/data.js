import {
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_REQUEST_SUCCESSEFUL,
} from ".";

export const getData = (token = '') => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_REQUEST,
    });
    const ws = new WebSocket(`wss://norma.nomoreparties.space/orders/all${token}`);
    ws.onopen = () => {
      ws.onmessage = (event) => {
        if (event.data) {
          dispatch({
            type: GET_DATA_REQUEST_SUCCESSEFUL,
            data: JSON.parse(event.data),
          });
        }
      };
    };

    ws.onerror = (event) => {
      alert("Ошибка соединения: ", event.message);
      dispatch({
        type: GET_DATA_ERROR,
        error: event.message,
      });
    };
  };
};
