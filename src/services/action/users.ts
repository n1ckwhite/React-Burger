import { Dispatch } from "react";
import checkResponse from ".";
import { API_BURGERS } from "../../utils/data";
import {
  IforgotPass,
  IlogUs,
  IpassSucc,
  IpassSuccess,
  IregSucc,
  IregUs,
  IresetPass,
  IlogUsSucc,
  IgetUsInfo,
  IgetUsInfoSuccess,
  IpathUserInfo,
  IpathUserInfoSuccess,
} from "../reducers/usersReduce";
import { RootState } from "../store/store";
import { AppThunk } from "../types";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESSFUL = "FORGOT_PASSWORD_SUCCESSFUL";
export const RESET_PASSWORD_SUCCESSFUL = "RESET_PASSWORD_SUCCESSFUL";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const REGISTER_USER_SUCCESSFUL = "REGISTER_USER_SUCCESSFUL";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESSFUL = "LOGIN_USER_SUCCESSFUL";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESSFUL = "GET_USER_INFO_SUCCESSFUL";
export const PATCH_USER_INFO = "PATH_USER_INFO";
export const PATCH_USER_INFO_SUCCESSFUL = "PATH_USER_INFO_SUCCESSFUL";
export const EXIT_USER = "EXIT_USER";
export const forgotPassword = (
  email: any,
  history: any
): AppThunk<void, RootState, unknown, IforgotPass | IpassSucc> => {
  return (dispatch: Dispatch<IforgotPass | IpassSucc>) => {
    dispatch({
      type: FORGOT_PASSWORD,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    dispatch({
      type: FORGOT_PASSWORD_SUCCESSFUL,
    });
    fetch(`${API_BURGERS}/password-reset`, requestOptions)
      .then((response) => checkResponse(response))
      .then((data: any) => {
        if (data.success) {
          return history.replace({ pathname: "/reset-password" });
        }
        return null;
      })
      .catch((error) => {
        // alert("Ошибка HTTP: ", error.type);
      });
  };
};

export const resetPassword = (
  password: any,
  token: any
): AppThunk<void, RootState, unknown, IresetPass | IpassSucc> => {
  return (dispatch: Dispatch<IresetPass | IpassSuccess>) => {
    dispatch({
      type: RESET_PASSWORD,
      token: token,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: password, token: token }),
    };
    dispatch({
      type: RESET_PASSWORD_SUCCESSFUL,
    });
    fetch(`${API_BURGERS}/password-reset/reset`, requestOptions).then(
      (response) => checkResponse(response)
    );
  };
};

export const registerUser = (
  email: any,
  password: any,
  name: any,
  history: any
): AppThunk<void, RootState, unknown, IregUs | IpassSuccess> => {
  return (dispatch: Dispatch<IregUs | IregSucc>) => {
    dispatch({
      type: REGISTER_USER,
      email: email,
      password: password,
      name: name,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        name: `${name}`,
      }),
    };
    dispatch({
      type: REGISTER_USER_SUCCESSFUL,
    });
    fetch(`${API_BURGERS}/auth/register`, requestOptions)
      .then((response) => checkResponse(response))
      .then((data: any) =>
        data.success
          ? history.replace({ pathname: "/login" })
          : alert("Укажите корректную почту")
      );

    // .catch((error) => alert("Ошибка HTTP: ", error.type));
  };
};

export const loginUser = (
  email: any,
  password: any,
  history: any
): AppThunk<void, RootState, unknown, IlogUs | IlogUsSucc> => {
  return (dispatch: Dispatch<IlogUs | IlogUsSucc>) => {
    dispatch({
      type: LOGIN_USER,
      email: email,
      password: password,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    };
    dispatch({
      type: LOGIN_USER_SUCCESSFUL,
    });
    fetch(`${API_BURGERS}/auth/login`, requestOptions)
      .then((res) => checkResponse(res))
      .then((data: any) => {
        if (data.success) {
          if (!localStorage.length) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
          }
          history.replace({ pathname: "/" });
        }
      });
    // .catch((error) => alert("Ошибка HTTP: ", error.type));
  };
};

export const getUserInfo = (): AppThunk<
  void,
  RootState,
  unknown,
  IgetUsInfo | IgetUsInfoSuccess
> => {
  return (dispatch: Dispatch<IgetUsInfo | IgetUsInfoSuccess>) => {
    dispatch({
      type: GET_USER_INFO,
    });
    const requestOptions: any = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("accessToken"),
      },
    };
    fetch(`${API_BURGERS}/auth/user`, requestOptions)
      .then((response) => checkResponse(response))
      .then((data: any) => {
        if (data.success) {
          dispatch({
            type: GET_USER_INFO_SUCCESSFUL,
            email: data.user.email,
            name: data.user.name,
          });
        }
      });
    // .catch((error) => alert("Ошибка HTTP: ", error.type));
  };
};

export const patchUserInfo = (
  email: any,
  name: any
): AppThunk<void, RootState, unknown, IpathUserInfo | IpathUserInfoSuccess> => {
  return (dispatch: Dispatch<IpathUserInfo | IpathUserInfoSuccess>) => {
    dispatch({
      type: PATCH_USER_INFO,
      email: email,
      name: name,
    });
    const requestOptions: any = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    };
    dispatch({
      type: PATCH_USER_INFO_SUCCESSFUL,
    });
    fetch(`${API_BURGERS}/auth/user`, requestOptions).then((response) =>
      checkResponse(response)
    );
    // .catch((error) => alert("Ошибка HTTP: ", error.type));
  };
};

export const exitUser = (): AppThunk<void, RootState, unknown, never> => {
  return (dispatch: Dispatch<() => void>) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: window.localStorage.getItem("refreshToken"),
      }),
    };
    fetch(`${API_BURGERS}/auth/logout`, requestOptions)
      .then((response) => checkResponse(response))
      .then((data: any) => {
        if (data.success) {
          window.localStorage.removeItem("accessToken");
          window.localStorage.removeItem("refreshToken");
        }
      });
    // .catch((error) => alert("Ошибка HTTP: ", error.type));
  };
};
