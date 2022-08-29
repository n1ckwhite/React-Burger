// socketMiddleware.ts
import type { Middleware, MiddlewareAPI } from "redux";

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
      const { wsInit, onOpen, onClose, onError, wsGetOrders } = wsActions;

      if (type === wsInit) {
        // объект класса WebSocket
        socket = new WebSocket(payload);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: wsGetOrders, payload: JSON.parse(data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  }) as Middleware;
};
