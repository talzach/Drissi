import React from 'react';
import styled from 'styled-components';
import { Product } from '../store/product/types';

const StyledSpan = styled.span``;

const StyledImg = styled.img`
  height: 40vh;
  border: 1px solid lightgray;
  overflow: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const ProductItem: React.FunctionComponent<{
  product: Product;
  className?: any;
}> = ({ product, className }) => {
  return (
    <StyledSpan className={className}>
      <StyledImg src={product.image} alt="Loading..." />
    </StyledSpan>
  );
};

export default ProductItem;
