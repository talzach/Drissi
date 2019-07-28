import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  height: 60vh;
  border: 1px solid lightgray;
  overflow: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const ProductImage: React.FunctionComponent<{
  imageSource: string;
}> = ({ imageSource }) => {
  return <StyledImg src={imageSource} alt="Loading..." />;
};

export default ProductImage;
