import { Reducer } from "redux";
import produce from 'immer';
import { CartState } from "./types";
import { CartActionTypes } from "./constants";

const INITIAL_STATE: CartState = {
  cart: [],
  failedStockCheck: [],
};

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case CartActionTypes.ADD_PRODUCT_TO_CART_SUCCCESS: {
        console.log('ACTION_REDUCER_CART', action.payload)
        const { product } = action.payload;

        const productInCartIndex = draft.cart.findIndex(item => 
          item.product.id === product.id,  
        );

        if (productInCartIndex >= 0) {
          draft.cart[productInCartIndex].quantity++;
        } else {
          draft.cart.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case CartActionTypes.ADD_PRODUCT_TO_CART_FAILURE: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default cart;