import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { socketMiddleware } from "../middleWares/socketMiddleware";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
} from "../action";
import { TWSUserActions } from "../types";

const wsUserActions: TWSUserActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  wsGetOrders: WS_GET_MESSAGE,
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsUserActions)))
);

export type RootState = ReturnType<typeof store.getState>;
