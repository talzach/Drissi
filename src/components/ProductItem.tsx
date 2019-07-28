import React from 'react';
import { Product } from '../store/product/types';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

const ProductItem: React.FunctionComponent<{
  product: Product;
  className?: string;
}> = ({ product, className }) => {
  return (
    <Link to={`/product/${product.id}`} className={className}>
      <ProductImage imageSource={product.image} />
    </Link>
  );
};

export default ProductItem;
