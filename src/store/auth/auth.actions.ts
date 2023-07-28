// constants
import { AuthActionTypes } from "./auth.constants";
import {UserPropsData } from "./types";

export interface AuthActionType {
  type:
  | AuthActionTypes.AUTH_REQUEST
  | AuthActionTypes.AUTH_SUCCESS
  | AuthActionTypes.AUTH_FAILURE
  | AuthActionTypes.AUTH_LOGOUT_USER
  | AuthActionTypes.AUTH_RESET;
  payload: {} | string;
}


export const loginUser = (email: string, password: string): AuthActionType => ({
  type: AuthActionTypes.AUTH_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (user: UserPropsData): AuthActionType => ({
  type: AuthActionTypes.AUTH_SUCCESS,
  payload: { user },
});

export const logoutUser = (): AuthActionType => ({
  type: AuthActionTypes.AUTH_LOGOUT_USER,
  payload: {},
});


export const resetAuth = (): AuthActionType => ({
  type: AuthActionTypes.AUTH_RESET,
  payload: {},
});

export const loginError = (
  actionType: string,
  error: string
): AuthActionType => ({
  type: AuthActionTypes.AUTH_FAILURE,
  payload: { actionType, error },
});


