import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  ProductActionTypes,
  ProductState
} from './types';

const initialState: ProductState = {
  products: [],
  isFetching: false
};

export function productsReducer(
  state = initialState,
  action: ProductActionTypes
): ProductState {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
        isFetching: false,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
