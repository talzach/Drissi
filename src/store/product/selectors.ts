import { createSelector } from 'reselect';

import { AppState } from '../';
import { Product } from './types';

export const selectProducts = (state: AppState) =>
  state.productsReducer.products;

export const selectProduct = createSelector(
  selectProducts,
  (_: any, productId: string) => productId,
  (products: Product[], productId: string) => {
    return products.find(x => x.id === productId);
  }
);

export const selectIsFetchingProducts = (state: AppState) =>
  state.productsReducer.isFetching;
