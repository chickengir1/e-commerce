import React from 'react';
import { Title, Row, BoldRow } from './styles';

const OrderConfirmation = ({ total, items }) => {
  return (
    <>
      <Title>주문 확인</Title>
      {items.map((item, index) => (
        <Row key={index}>
          <span>{item.name}</span>
          <span>{(item.price * item.quantity).toLocaleString('ko-KR')} 원</span>
        </Row>
      ))}
      <BoldRow>
        <span>총 금액 :</span>
        <span>{total.toLocaleString('ko-KR')} 원</span>
      </BoldRow>
    </>
  );
};

export default OrderConfirmation;
