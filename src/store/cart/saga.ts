import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/core";

// actions
import { addProductToCartFailure, addProductToCartSuccess } from "./actions";

// constants
import { CartActionTypes } from "./constants";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { usersList } from "../../services";

function* cart({ payload }: any) {
  try {
    const {product} = payload
    console.log("payload", payload);
    yield put(addProductToCartSuccess(product));
    yield
  } catch (error: any) {
    console.log("error", error);
    yield put(addProductToCartFailure());
  }
}

export function* watchCartAdd() {
  yield takeEvery(CartActionTypes.ADD_PRODUCT_TO_CART_REQUEST, cart);
}


function* cartSaga() {
  yield all([fork(watchCartAdd)]);
}

export default cartSaga;
