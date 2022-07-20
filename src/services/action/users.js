import { API_BURGERS } from "../../utils/data";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESSFUL = "FORGOT_PASSWORD_SUCCESSFUL";
export const RESET_PASSWORD_SUCCESSFUL = "RESET_PASSWORD_SUCCESSFUL";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const REGISTER_USER_SUCCESSFUL = "REGISTER_USER_SUCCESSFUL";
export const REGISTER_USER = "REGISTER_USER";

export const forgotPassword = (email, history) => {
  return (dispatch) => {
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
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          return history.replace({ pathname: "/reset-password" });
        }
        return null;
      })
      .catch((error) => {
        alert("Ошибка HTTP: ", error.type);
      });
  };
};

export const resetPassword = (password, token) => {
  return (dispatch) => {
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
    fetch(`${API_BURGERS}/password-reset/reset`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
};

export const registerUser = (email, password, name) => {
  return (dispatch) => {
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
    fetch("https://norma.nomoreparties.space/api/auth/register", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        alert("Ошибка HTTP: ", error.type);
      });
  };
};
