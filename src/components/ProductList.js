import React from 'react';

import useGlobal from '../store';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [globalState, globalActions] = useGlobal();
  const products = globalState.products;

  return products.map(product => (
    <ProductItem imageSource={product.image} key={product.id} />
  ));
};

export default ProductList;
