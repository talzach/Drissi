// Describing the shape of the chat's slice of state
export interface Product {
  id: number;
  image: string;
  user: string;
}

export interface ProductState {
  products: Product[];
  isFetching: boolean;
  lastUpdated?: Date;
}

// Describing the different ACTION NAMES available
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

interface RequestProductsAction {
  type: typeof REQUEST_PRODUCTS;
}

interface ReceiveProductsAction {
  type: typeof RECEIVE_PRODUCTS;
  products: Product[];
  receivedAt: Date;
}

export type ProductActionTypes = RequestProductsAction | ReceiveProductsAction;
