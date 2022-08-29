// socketMiddleware.ts
import type { Middleware, MiddlewareAPI } from "redux";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../action";
import { TWSActionData } from "../reducers/socketMiddlewareReduce";
import { RootState } from "../store/store";
import type { AppDispatch, AppThunk, TWSUserActions } from "../types";

export const socketMiddleware = (wsActions: TWSUserActions): Middleware => {
  return ((
    store: MiddlewareAPI<AppDispatch, RootState>
  ): AppThunk<void, RootState, unknown, TWSActionData> => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSActionData) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        // объект класса WebSocket
        socket = new WebSocket(payload);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: WS_GET_MESSAGE, payload: JSON.parse(data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };
      }

      next(action);
    };
  }) as Middleware;
};
