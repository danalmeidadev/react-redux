// apicore

// constants
import { UserActionTypes } from "./constants";
import { UserData, UserDataState } from "./types";

const INIT_STATE: UserDataState = {
  user: {} as UserData,
  userView: {} as UserData,
  loading: false,
  users: [],
  load: false
};

interface AuthActionType {
  type:
    | UserActionTypes.API_RESPONSE_SUCCESS
    | UserActionTypes.API_RESPONSE_ERROR
    | UserActionTypes.USER_REQUEST
    | UserActionTypes.USER_SUCCESS
    | UserActionTypes.USER_FAILURE
    | UserActionTypes.USER_LIST_REQUEST
    | UserActionTypes.USER_LIST_SUCCESS
    | UserActionTypes.USER_LIST_FAILURE
    | UserActionTypes.USER_VIEW_REQUEST
    | UserActionTypes.USER_VIEW_SUCCESS
    | UserActionTypes.USER_VIEW_FAILURE;

  payload: {
    actionType?: string;
    data?: UserData | {};
    userView?: UserData | {};
    user?: UserData | {};
    error?: string;
    loading: false;
  };
}

interface State {
  user?: UserData | {};
  userView?: UserData | {};
  users?: UserData[] | [],
  loading?: boolean;
  load?: boolean;
}

const User = (state: State = INIT_STATE, action: AuthActionType): any => {
  switch (action.type) {
    case UserActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case UserActionTypes.USER_REQUEST: {
          return {
            ...state,
            loading: true,
          };
        }
        case UserActionTypes.USER_SUCCESS: {
          return {
            ...state,
            users: action.payload.data,
            loading: true,
          };
        }
        case UserActionTypes.USER_LIST_SUCCESS: {
          return {
            ...state,
            users: action.payload.data,
            loading: false,
          };
        }
        default:
          return { ...state };
      }
    case UserActionTypes.USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.USER_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.USER_VIEW_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.USER_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        userView: action.payload.user
      };
      case UserActionTypes.USER_LIST_SUCCESS: {
        return {
          ...state,
          users: action.payload.data,
          loading: false,
        };
      }
      case UserActionTypes.API_RESPONSE_ERROR:
        switch (action.payload.actionType) {
          case UserActionTypes.USER_FAILURE: {
            return {
              ...state,
              error: action.payload.error,
              loading: false,
            };
          }
          case UserActionTypes.USER_LIST_FAILURE: {
            return {
              ...state,
              error: action.payload.error,
              loading: false,
            };
          }
          case UserActionTypes.USER_VIEW_FAILURE:
            return {
              ...state,
              loading: false,
              user: {}
            };
          default:
            return { ...state };
        }
    default:
      return { ...state };
  }
};

export default User;
