import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import { Product } from '../store/product/types';
import {
  selectProducts,
  selectIsFetchingProducts
} from '../store/product/selectors';
import Loading from './Loading';

const StyledProductItem = styled(ProductItem)`
  margin: 10px;
  flex: 1;
`;

const ProductListDiv = styled.div`
  display: flex;
  margin: auto;
  width: 25vw;
  padding: 10px;
`;

const getProductItems = (products: Product[]) => {
  return products
    ? products.map(product => (
        <StyledProductItem product={product} key={product.id} />
      ))
    : null;
};

const ProductList: React.FunctionComponent = () => {
  const products: Product[] = useSelector(selectProducts);
  const isFetching: boolean = useSelector(selectIsFetchingProducts);
  const productItems = getProductItems(products);

  return (
    <ProductListDiv>
      <Loading isLoading={isFetching} />
      {productItems}
    </ProductListDiv>
  );
};

export default ProductList;
