// constants
import { UserActionTypes } from "./constants";
import { UserData } from "./types";

export interface UserActionType {
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

  payload: {} | string;
}

export const userApiResponseSuccess = (
  actionType: string,
  data: UserData | {}
): UserActionType => ({
  type: UserActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const userApiResponseError = (
  actionType: string,
  error: string
): UserActionType => ({
  type: UserActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});


export const usersListRequest = (): UserActionType => ({
  type: UserActionTypes.USER_LIST_REQUEST,
  payload: {},
});

export const  usersListSuccess = (users: []) => {
  return {
    type: UserActionTypes.USER_LIST_SUCCESS,
    payload: {
      users,
    },
  };
}


export const userRequest = (
  user: UserData
  ): UserActionType => ({
    type: UserActionTypes.USER_REQUEST,
    payload: { user },
  });

  export const  userSuccess = (actionType: string, user: UserData) => {
    return {
      type: UserActionTypes.USER_SUCCESS,
      payload: {
        actionType,
        user,
      },
    };
  }
  export const userViewRequest = (
    user: UserData
    ): UserActionType => ({
      type: UserActionTypes.USER_VIEW_REQUEST,
      payload: { user },
    });
  
  export const  userViewSuccess = (actionType: string, user: UserData) => {
    return {
      type: UserActionTypes.USER_VIEW_SUCCESS,
      payload: {
        actionType,
        user,
      },
    };
  }