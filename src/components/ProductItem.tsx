import React from 'react';

const ProductItem: React.FunctionComponent<{
  product: any;
}> = ({ product }) => {
  return (
    <span>
      <img src={product.image} alt="Loading..." height="300vh" />
    </span>
  );
};

export default ProductItem;
