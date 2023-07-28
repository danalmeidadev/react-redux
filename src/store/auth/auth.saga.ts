import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/core";

import {  loginError, loginSuccess,    } from "./auth.actions";

import { AuthActionTypes } from "./auth.constants";
import { loginApi } from "../../services/autheticate";
import { APICore, setAuthorization } from "../../services/config";


interface UserData {
  payload: {
    id?: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    role: string;
    status: string;
  };
  type: string;
}

const api = new APICore();

/**
 * Login the user
 * @param {*} payload - username and password
 */
function* login({
  payload: { email, password }}: UserData): SagaIterator {
  try {
    const response = yield call(loginApi, { email, password });
    const user = response.data;
    yield put(loginSuccess(user));
    api.setLoggedInUser(user);
    setAuthorization(user["token"]);
    window.location.pathname = '/home'
  } catch (error: any) {
    yield put(loginError(AuthActionTypes.AUTH_FAILURE, error));
  }
}

export function* watchLoginUser() {
  yield takeEvery(AuthActionTypes.AUTH_REQUEST, login);
}

function* authSaga() {
  yield all([
    fork(watchLoginUser),
  ]);
}

export default authSaga;
