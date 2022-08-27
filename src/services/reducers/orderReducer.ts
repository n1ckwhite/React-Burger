import {
  CLEAR_ORDER_NUMBER,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESSFUL,
  GET_ORDER_ERROR,
} from "../action";

const initialState = {
  order: 0,
  error: "",
  pending: false,
};

interface IState {
  order: number;
  error: string;
  pending: boolean;
}

interface IRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

interface IError {
  readonly type: typeof GET_ORDER_ERROR;
  err: Object;
}

interface ISuccessful {
  readonly type: typeof GET_ORDER_SUCCESSFUL;
  number: number;
}

interface IOrderNumber {
  readonly type: typeof CLEAR_ORDER_NUMBER;
}

export type TActionOrder = IRequest | IError | ISuccessful | IOrderNumber;

export const orderReducer = (
  state: IState = initialState,
  action: TActionOrder
) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case GET_ORDER_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.err,
      };
    }
    case GET_ORDER_SUCCESSFUL: {
      return {
        ...state,
        pending: false,
        order: `${action.number}`,
      };
    }
    case CLEAR_ORDER_NUMBER: {
      return {
        ...state,
        order: 0,
      };
    }
    default:
      return state;
  }
};
