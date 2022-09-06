import {
  CLEAR_ORDER_NUMBER,
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESSFUL,
} from "../action";
import { orderReducer,initialState } from "./orderReducer";

describe("init Reduce", () => {
  it("initial State", () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });
  it("GET_ORDER_REQUEST", () => {
    expect(orderReducer(undefined, [{ type: GET_ORDER_REQUEST }])).toEqual(
      initialState
    );
  });
  it("GET_ORDER_ERROR", () => {
    expect(
      orderReducer(undefined, [
        { type: GET_ORDER_ERROR, err: { message: "error" } },
      ])
    ).toEqual(initialState);
  });
  it("GET_ORDER_SUCCESSFUL", () => {
    expect(
      orderReducer(undefined, [{ type: GET_ORDER_SUCCESSFUL, number: 1234 }])
    ).toEqual(initialState);
  });
  it("CLEAR_ORDER_NUMBER", () => {
    expect(orderReducer(undefined, [{ type: CLEAR_ORDER_NUMBER }])).toEqual(
      initialState
    );
  });
});
