import { AuthActionTypes } from "./auth.constants";


const INIT_STATE = {
  token: '',
  loading: false,
  userLoggedIn: false,
};

interface UserData {
  email: string;
  name: string;
  lastName: string;
  password: string;
  role: string;
  token: string;
}

interface AuthActionType {
  type:
  | AuthActionTypes.AUTH_REQUEST
  | AuthActionTypes.AUTH_SUCCESS
  | AuthActionTypes.AUTH_FAILURE
  | AuthActionTypes.AUTH_LOGOUT_USER
  | AuthActionTypes.AUTH_RESET;

  payload: {
    actionType?: string;
    user: UserData;
    token?: string;
    error?: string;
  };
}

interface State {
  user?: UserData | {};
  loading?: boolean;
  value?: boolean;
}

const Auth = (state: State = INIT_STATE, action: AuthActionType): any => {
  switch (action.type) {
    case AuthActionTypes.AUTH_REQUEST:
      return {
        ...state,
        userLoggedIn: false,
        loading: true,
      };
    case AuthActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        userLoggedIn: true,
        loading: false,
      };
    case AuthActionTypes.AUTH_FAILURE:
      return {
      
        error: action.payload.error,
      };
    case AuthActionTypes.AUTH_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        userLoggedIn: false,
      };

      default:
        return { ...state };
  }
};

export default Auth;
