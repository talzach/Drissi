import { createSelector } from 'reselect';

import { AppState } from '../';
import { ProductState } from './types';

export const selectAllProducts = createSelector(
  (state: AppState) => state.productsReducer,
  (productsState: ProductState) => productsState.products
);

export const selectIsFetchingProducts = createSelector(
  (state: AppState) => state.productsReducer,
  (productsState: ProductState) => productsState.isFetching
);
