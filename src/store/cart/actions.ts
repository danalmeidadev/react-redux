// constants
import { CartActionTypes } from "./constants";
import {  CartItem, ProductProps } from "./types";

export function addProductToCartRequest(product: ProductProps) {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      product,
    }
  };
}

export function addProductToCartSuccess(product: CartItem) {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART_SUCCCESS,
    payload: {
      product,
    }
  };
}

export function addProductToCartFailure() {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART_FAILURE,
  };
}