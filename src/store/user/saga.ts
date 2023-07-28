import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/core";


// actions
import {
  userApiResponseError,
  userApiResponseSuccess,
  userSuccess,
  userViewSuccess,
  usersListRequest
} from "./actions";


// constants
import { UserActionTypes } from "./constants";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { usersList } from "../../services";

 function* users() {
  try {
    const response: AxiosResponse<any> = yield call(usersList);
    const { data } = response;
    yield put(
      userApiResponseSuccess(UserActionTypes.USER_LIST_SUCCESS, data)
    );
  } catch (error: any) {
    yield put(userApiResponseSuccess(UserActionTypes.USER_LIST_FAILURE, error));
  }
}

function* view({ payload }: any) {
  try {
    const { user } = payload;
    yield put(
      userViewSuccess(UserActionTypes.USER_VIEW_SUCCESS, user)
    );
  } catch (error: any) {
    toast.error("Oops! Houve um erro ao editar os dados! Tente novamente!");
    yield put(
      userApiResponseError(UserActionTypes.USER_VIEW_FAILURE, error)
    );
  }
}


export function* watchUserView() {
  yield takeEvery(UserActionTypes.USER_VIEW_REQUEST, view);
}

export function* watchUsersList() {
  yield takeEvery(UserActionTypes.USER_LIST_REQUEST, users);
}


function* userSaga() {
  yield all([fork(watchUsersList), fork(watchUserView)]);
}

export default userSaga;
