import fetch from 'cross-fetch';

import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  Product,
  RECEIVE_PRODUCT
} from './types';
import { AppState } from '..';

let nextTodoId = 0;

export const addProduct = (text: string) => ({
  type: 'ADD_PRODUCT',
  id: nextTodoId++,
  text
});

export const requestProducts = () => {
  return {
    type: REQUEST_PRODUCTS
  };
};

export const receiveProducts = (products: Product[]) => {
  return {
    type: RECEIVE_PRODUCTS,
    products: products,
    receivedAt: Date.now()
  };
};

export const receiveProduct = (product: Product) => {
  return {
    type: RECEIVE_PRODUCT,
    product: product,
    receivedAt: Date.now()
  };
};

export const fetchProducts = () => {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch: any) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestProducts());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://www.reddit.com/r/javascript.json`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveProducts(initialProducts))
      );
  };
};

function shouldFetchProduct(
  { productsReducer }: AppState,
  productId: string
): boolean {
  const post = productsReducer.products.find(x => x.id === productId);
  return post == null;
}

export const fetchProductIfNeeded = (productId: string) => {
  return function(dispatch: any, getState: Function) {
    if (shouldFetchProduct(getState(), productId)) {
      dispatch(fetchProduct(productId));
    }
  };
};

export const fetchProduct = (productId: string) => {
  return function(dispatch: any) {
    dispatch(requestProducts());

    const product = {
      id: productId,
      name: 'dress3',
      user: 'tal2',
      image: '/images/dress.jpg'
    };

    dispatch(receiveProduct(product));
  };
};

const initialProducts = [
  {
    id: '1',
    name: 'dress',
    user: 'tal',
    image: '/images/dress.jpg'
  },
  {
    id: '2',
    name: 'dress2',
    user: 'noa',
    image: '/images/dress.jpg'
  }
];
