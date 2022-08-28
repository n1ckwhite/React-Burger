// rootReducer.ts

import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../action/index";
//   import type { IMessage, TWSActions } from '../types';

type TWSState = {
  wsConnected: boolean;
  messages: Array<Object>;

  error?: Event;
};

const initialState = {
  wsConnected: false,
  messages: [],
};

interface IwsSucc {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

interface IwsConnErr {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: Event;
}

interface IwsClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

interface IgetMsg {
  readonly type: typeof WS_GET_MESSAGE;
  payload: Event;
}

export type TActionData = IwsSucc | IwsConnErr | IwsClosed | IgetMsg;

// Создадим редьюсер для WebSocket
export const wsReducer = (
  state: TWSState = initialState,
  action: TActionData
) => {
  switch (action.type) {
    // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
    // Установим флаг wsConnected в состояние true
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    // Опишем обработку экшена с типом WS_CONNECTION_ERROR
    // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
    // Установим флаг wsConnected в состояние false
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    // Опишем обработку экшена с типом WS_GET_MESSAGE
    // Обработка происходит, когда с сервера возвращаются данные
    // В messages передадим данные, которые пришли с сервера
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};