import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Match } from '../types/react-router-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductIfNeeded } from '../store/product/actions';
import { Product } from '../store/product/types';
import {
  selectProduct,
  selectIsFetchingProducts
} from '../store/product/selectors';
import { AppState } from '../store';
import Loading from './Loading';
import ProductImage from './ProductImage';

const ProductPage = ({ match }: RouteComponentProps<Match>) => {
  const dispatch = useDispatch();
  dispatch(fetchProductIfNeeded(match.params.id));

  const product: Product | undefined = useSelector((state: AppState) =>
    selectProduct(state, match.params.id)
  );
  const isFetching: boolean = useSelector(selectIsFetchingProducts);

  return (
    <div>
      <Loading isLoading={isFetching} />
      <ProductImage imageSource={product ? product.image : ''} />
      {product ? product.name : ''}
    </div>
  );
};

export default ProductPage;
