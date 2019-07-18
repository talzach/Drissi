import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import ProductItem from './ProductItem';
import { AppState } from '../store';
import { Product, ProductState } from '../store/product/types';

const selectAllProducts = createSelector(
  (state: AppState) => state.productsReducer,
  (productsState: ProductState) => productsState.products
);

const getProductItems = (products: Product[]) => {
  return products
    ? products.map(product => (
        <ProductItem product={product} key={product.id} />
      ))
    : null;
};

const ProductList = () => {
  const products = useSelector(selectAllProducts);
  const productItems = getProductItems(products);

  return <div>{productItems}</div>;
};

export default ProductList;
