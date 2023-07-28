// constants
import { ProductActionTypes } from "./constants";
import {  ProductProps } from "./types";

export function productRequest() {
  return {
    type: ProductActionTypes.PRODUCT_REQUEST,
   
  };
}

export function productSuccess(product: ProductProps[]) {
  return {
    type: ProductActionTypes.PRODUCT_SUCCCESS,
    payload: {
      product,
    }
  };
}

export function productFailure() {
  return {
    type: ProductActionTypes.PRODUCT_FAILURE,

  };
}