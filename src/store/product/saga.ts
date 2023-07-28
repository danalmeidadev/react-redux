import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/core";
import { productFailure, productSuccess } from "./actions";
import { ProductActionTypes } from "./constants";
import { productList } from "../../services";

function* product(): SagaIterator {
  try {

    const {data} = yield call(productList);
    yield put(productSuccess(data));
  
  } catch (error: any) {
    yield put(productFailure());
  }
}

export function* watchProduct() {
  yield takeEvery(ProductActionTypes.PRODUCT_REQUEST, product);
}


function* productSaga() {
  yield all([fork(watchProduct)]);
}

export default productSaga;
