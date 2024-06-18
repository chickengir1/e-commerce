import React from 'react';
import { Title, Row } from './styles';

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
    </>
  );
};

export default OrderConfirmation;