import fetch from 'cross-fetch';

import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, Product } from './types';

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

const initialProducts = [
  {
    id: 1,
    name: 'dress',
    user: 'tal',
    image: 'dress.jpg'
  },
  {
    id: 2,
    name: 'dress2',
    user: 'noa',
    image: 'dress.jpg'
  }
];
