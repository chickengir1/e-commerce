import React from 'react';
import { SummaryContainer } from './Styles/CartSummaryStyles';
import Label from './Label';

const CartSummary = ({totalAmount}) => (
  <SummaryContainer>
    <Label >총 금액 :</Label>
    <Label>{totalAmount.toLocaleString('ko-KR')}원</Label>
  </SummaryContainer>
);

export default CartSummary;
