// Describing the shape of the chat's slice of state
export interface Product {
  id: string;
  image: string;
  user: string;
  name: string;
}

export interface ProductState {
  products: Product[];
  isFetching: boolean;
  lastUpdated?: Date;
}

// Describing the different ACTION NAMES available
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

interface RequestProductsAction {
  type: typeof REQUEST_PRODUCTS;
}

interface ReceiveProductsAction {
  type: typeof RECEIVE_PRODUCTS;
  products: Product[];
  receivedAt: Date;
}

interface ReceiveProductAction {
  type: typeof RECEIVE_PRODUCT;
  product: Product;
  receivedAt: Date;
}

export type ProductActionTypes =
  | RequestProductsAction
  | ReceiveProductsAction
  | ReceiveProductAction;
