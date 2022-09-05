import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../action";
import { wsReducer } from "./socketMiddlewareReduce";

const initialState = {
  wsConnected: false,
  messages: [],
};

describe("init Reduce", () => {
  it("initial State", () => {
    expect(wsReducer(undefined, {})).toEqual(initialState);
  });
  it("WS_CONNECTION_SUCCESS", () => {
    expect(wsReducer(undefined, [{ type: WS_CONNECTION_SUCCESS }])).toEqual(
      initialState
    );
  });
  it("WS_CONNECTION_ERROR", () => {
    expect(
      wsReducer(undefined, [
        { type: WS_CONNECTION_ERROR, payload: { message: "error" } },
      ])
    ).toEqual(initialState);
  });
  it("WS_CONNECTION_CLOSED", () => {
    expect(wsReducer(undefined, [{ type: WS_CONNECTION_CLOSED }])).toEqual(
      initialState
    );
  });
  it("WS_GET_MESSAGE", () => {
    expect(wsReducer(undefined, [{ type: WS_GET_MESSAGE }])).toEqual(
      initialState
    );
  });
});
