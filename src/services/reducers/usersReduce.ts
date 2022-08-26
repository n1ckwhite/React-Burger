import {
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  REGISTER_USER,
  FORGOT_PASSWORD_SUCCESSFUL,
  RESET_PASSWORD_SUCCESSFUL,
  REGISTER_USER_SUCCESSFUL,
  LOGIN_USER,
  LOGIN_USER_SUCCESSFUL,
  GET_USER_INFO,
  GET_USER_INFO_SUCCESSFUL,
  PATCH_USER_INFO,
  PATCH_USER_INFO_SUCCESSFUL,
  EXIT_USER,
} from "../action/users";

const initialState = {
  email: "",
  token: "",
  password: "",
  name: "",
  pending: true,
  success: false,
  isLoggedIn: false,
};

export const usersReduce = (state = initialState, action: any) => {
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
    case LOGIN_USER: {
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    }
    case LOGIN_USER_SUCCESSFUL: {
      return {
        ...state,
        pending: false,
        success: true,
        isLoggedIn: true,
      };
    }
    case GET_USER_INFO: {
      return {
        ...state,
        pending: false,
        success: true,
      };
    }
    case GET_USER_INFO_SUCCESSFUL: {
      return {
        email: action.email,
        name: action.name,
        isLoggedIn: true,
        pending: false,
      };
    }
    case PATCH_USER_INFO: {
      return {
        email: action.email,
        name: action.name,
      };
    }
    case PATCH_USER_INFO_SUCCESSFUL: {
      return {
        ...state,
        success: true,
        pending: false,
      };
    }
    case EXIT_USER: {
      return {
        ...state,
        success: true,
        pending: false,
      };
    }
    default: {
      return state;
    }
  }
};
