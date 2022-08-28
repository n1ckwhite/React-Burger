import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { socketMiddleware } from "../middleWares/socketMiddleware.ts";


export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      socketMiddleware()

    )
  )
);

export type RootState = ReturnType<typeof store.getState>