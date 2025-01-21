import React from 'react';
import { ProductDescriptionStyled, CommonTitle } from './styles/ProductDetailStyles';

const ProductDescription = ({ description }) => (
  <ProductDescriptionStyled>
    <CommonTitle>제품 상세 정보</CommonTitle>
    <p>{description}</p>
  </ProductDescriptionStyled>
);

export default ProductDescription;
