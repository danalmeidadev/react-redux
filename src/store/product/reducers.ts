import { ProductActionTypes } from "./constants";
import { ProductState, ProductProps } from "./types";

const INIT_STATE: ProductState = {
  product: [],
  loading: false,
};

interface ProductActionType {
  type:
  | ProductActionTypes.PRODUCT_REQUEST
  | ProductActionTypes.PRODUCT_SUCCCESS
  | ProductActionTypes.PRODUCT_FAILURE

  payload: {
    actionType?: string;
    product: ProductProps;
  };
}

interface State {
  data?: ProductProps | [];
  loading?: boolean;
  value?: boolean;
}

const Product = (state: State = INIT_STATE, action: ProductActionType): any => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductActionTypes.PRODUCT_SUCCCESS:
      return {
        ...state,
        product: action.payload.product,
        loading: false,
      };
    case ProductActionTypes.PRODUCT_FAILURE:
      return {
        ...state        
      };

      default:
        return { ...state };
  }
};

export default Product;
