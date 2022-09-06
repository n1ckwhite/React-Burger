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

export const initialState = {
  email: "",
  token: "",
  password: "",
  name: "",
  pending: true,
  success: false,
  isLoggedIn: false,
};

interface IState {
  email: string;
  token: string;
  password: string;
  name: string;
  pending: boolean;
  success: boolean;
  isLoggedIn: boolean;
}

export interface IpassSucc {
  readonly type: typeof FORGOT_PASSWORD_SUCCESSFUL;
}

export interface IforgotPass {
  readonly type: typeof FORGOT_PASSWORD;
}

export interface IresetPass {
  readonly type: typeof RESET_PASSWORD;
  token: string;
}

export interface IpassSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESSFUL;
}

export interface IregUs {
  readonly type: typeof REGISTER_USER;
  email: string;
  password: string;
  name: string;
}

export interface IregSucc {
  readonly type: typeof REGISTER_USER_SUCCESSFUL;
}

export interface IlogUs {
  readonly type: typeof LOGIN_USER;
  email: string;
  password: string;
}

export interface IlogUsSucc {
  readonly type: typeof LOGIN_USER_SUCCESSFUL;
}

export interface IgetUsInfo {
  readonly type: typeof GET_USER_INFO;
}

export interface IgetUsInfoSuccess {
  readonly type: typeof GET_USER_INFO_SUCCESSFUL;
  email: string;
  name: string;
}

export interface IpathUserInfo {
  readonly type: typeof PATCH_USER_INFO;
  email: string;
  name: string;
}

export interface IpathUserInfoSuccess {
  readonly type: typeof PATCH_USER_INFO_SUCCESSFUL;
}

export interface Iexit {
  readonly type: typeof EXIT_USER;
  success: boolean;
  pending: boolean;
}

export type TActionUsers =
  | IpassSucc
  | IforgotPass
  | IresetPass
  | IpassSuccess
  | IregUs
  | IregSucc
  | IlogUs
  | IlogUsSucc
  | IgetUsInfo
  | IgetUsInfoSuccess
  | IpathUserInfo
  | IpathUserInfoSuccess
  | Iexit;

export const usersReduce = (
  state: IState = initialState,
  action: TActionUsers
) => {
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
