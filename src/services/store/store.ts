import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { socketMiddleware } from "../action/data";


export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      socketMiddleware( "wss://norma.nomoreparties.space/orders/all")

    )
  )
);

export type RootState = ReturnType<typeof store.getState>