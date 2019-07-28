import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  ProductActionTypes,
  ProductState,
  RECEIVE_PRODUCT
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
    case RECEIVE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
        isFetching: false,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
