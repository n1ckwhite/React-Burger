import {
  FORGOT_PASSWORD_SUCCESSFUL,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESSFUL,
  LOGIN_USER,
  LOGIN_USER_SUCCESSFUL,
  GET_USER_INFO,
  GET_USER_INFO_SUCCESSFUL,
  PATCH_USER_INFO,
  PATCH_USER_INFO_SUCCESSFUL,
  EXIT_USER,
} from "../action/users";
import { usersReduce } from "./usersReduce";

const initialState = {
  email: "",
  token: "",
  password: "",
  name: "",
  pending: true,
  success: false,
  isLoggedIn: false,
};

describe("init Reduce", () => {
  it("initial State", () => {
    expect(usersReduce(undefined, {})).toEqual(initialState);
  });
  it("FORGOT_PASSWORD_SUCCESSFUL", () => {
    expect(
      usersReduce(undefined, [{ type: FORGOT_PASSWORD_SUCCESSFUL }])
    ).toEqual(initialState);
  });
  it("FORGOT_PASSWORD", () => {
    expect(usersReduce(undefined, [{ type: FORGOT_PASSWORD }])).toEqual(
      initialState
    );
  });
  it("RESET_PASSWORD", () => {
    expect(
      usersReduce(undefined, [{ type: RESET_PASSWORD, token: "123" }])
    ).toEqual(initialState);
  });
  it("RESET_PASSWORD_SUCCESSFUL", () => {
    expect(
      usersReduce(undefined, [
        { type: RESET_PASSWORD_SUCCESSFUL, token: "123" },
      ])
    ).toEqual(initialState);
  });
  it("LOGIN_USER", () => {
    expect(
      usersReduce(undefined, [
        { type: LOGIN_USER, email: "123@yandex.ru", password: "123123" },
      ])
    ).toEqual(initialState);
  });
  it("LOGIN_USER_SUCCESSFUL", () => {
    expect(usersReduce(undefined, [{ type: LOGIN_USER_SUCCESSFUL }])).toEqual(
      initialState
    );
  });
  it("GET_USER_INFO", () => {
    expect(usersReduce(undefined, [{ type: GET_USER_INFO }])).toEqual(
      initialState
    );
  });
  it("GET_USER_INFO_SUCCESSFUL", () => {
    expect(
      usersReduce(undefined, [
        {
          type: GET_USER_INFO_SUCCESSFUL,
          email: "123@yandex.ru",
          name: "nickwhite",
        },
      ])
    ).toEqual(initialState);
  });
  it("PATCH_USER_INFO", () => {
    expect(
      usersReduce(undefined, [
        { type: PATCH_USER_INFO, email: "123@yandex.ru", name: "nickwhite" },
      ])
    ).toEqual(initialState);
  });
  it("PATCH_USER_INFO_SUCCESSFUL", () => {
    expect(
      usersReduce(undefined, [{ type: PATCH_USER_INFO_SUCCESSFUL }])
    ).toEqual(initialState);
  });
  it("EXIT_USER", () => {
    expect(usersReduce(undefined, [{ type: EXIT_USER }])).toEqual(initialState);
  });
});
