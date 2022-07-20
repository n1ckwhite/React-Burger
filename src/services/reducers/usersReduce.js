import {
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  REGISTER_USER,
  FORGOT_PASSWORD_SUCCESSFUL,
  RESET_PASSWORD_SUCCESSFUL,
  REGISTER_USER_SUCCESSFUL,
} from "../action/users";

const initialState = {
  email: "",
  token: "",
  password: "",
  name: "",
  pending: true,
  success: false,
};

export const usersReduce = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESSFUL: {
      return {
        ...state,
        pending: false,
        success: true,
      };
    }
    case FORGOT_PASSWORD: {
      return {
        ...state,
        email: action.email,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        token: action.token,
      };
    }
    case RESET_PASSWORD_SUCCESSFUL: {
      return {
        ...state,
        pending: false,
        success: true,
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        email: action.email,
        password: action.password,
        name: action.name,
      };
    }
    case REGISTER_USER_SUCCESSFUL: {
      return {
        ...state,
        pending: false,
        success: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
